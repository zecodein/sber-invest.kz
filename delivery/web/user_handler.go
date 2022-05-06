package web

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/zecodein/sber-invest.kz/domain"
)

// type UserHandler struct {
// 	userUsecase domain.UserUsecase
// }

const key = "sber-session"

// func NewUserHandler(r *gin.Engine, us domain.UserUsecase) {
// 	handler := &UserHandler{
// 		userUsecase: us,
// 	}

// 	r.GET("/user/signup", handler.signUp)
// 	r.POST("/user/signup", handler.signUp)
// 	r.GET("/user/signin", handler.signIn)
// 	r.POST("/user/signin", handler.signIn)
// 	r.GET("/user/signout", handler.signOut)
// 	r.GET("/user/update/password", handler.updatePassword)
// 	r.POST("/user/update/password", handler.updatePassword)
// 	r.GET("/user/profile/:id", handler.profile)
// 	r.GET("/user/profile/", handler.profile)
// 	r.POST("/user/delete", handler.delete)
// }

func (h *Handler) signUp(c *gin.Context) {
	if getSession(c).Id != 0 {
		c.Redirect(http.StatusSeeOther, "/")
		return
	}

	switch c.Request.Method {
	case http.MethodGet:
		c.HTML(http.StatusOK, "signup.html", gin.H{})
	case http.MethodPost:
		user := &domain.User{}

		err := c.BindJSON(user)
		if err != nil {
			c.Writer.WriteHeader(getStatusCode(err))
			return
		}

		_, err = h.UserUsecase.Create(c.Request.Context(), user)
		if err != nil {
			c.Writer.WriteHeader(getStatusCode(err))
			return
		}

		c.Writer.WriteHeader(http.StatusCreated)
	}
}

func (h *Handler) signIn(c *gin.Context) {
	if getSession(c).Id != 0 {
		c.Redirect(http.StatusSeeOther, "/")
		return
	}
	switch c.Request.Method {
	case http.MethodGet:
		c.HTML(http.StatusOK, "signin.html", gin.H{})
	case http.MethodPost:
		user := &domain.User{}
		err := c.BindJSON(user)
		if err != nil {
			c.Writer.WriteHeader(http.StatusBadRequest)
			return
		}
		id, err := h.UserUsecase.GetByEmail(c.Request.Context(), user)
		if err != nil {
			c.Writer.WriteHeader(getStatusCode(err))
			return
		}
		fmt.Println(id)

		err = h.session(c, id)
		if err != nil {
			c.Writer.WriteHeader(getStatusCode(err))
			return
		}
		c.Writer.WriteHeader(http.StatusOK)
	}
}

func (h *Handler) signOut(c *gin.Context) {
	session := sessions.Default(c)
	session.Clear()
	session.Options(sessions.Options{MaxAge: -1})
	session.Save()
	c.Redirect(http.StatusSeeOther, "/")
}

func (h *Handler) updatePassword(c *gin.Context) {
	userRedis := getSession(c)
	if userRedis.Id == 0 {
		c.Redirect(http.StatusSeeOther, "/user/signin")
		return
	}

	type updatePass struct {
		OldPassword string `json:"old_password,omitempty"`
		NewPassword string `json:"new_password,omitempty"`
	}

	switch c.Request.Method {
	case http.MethodGet:
	// TODO
	case http.MethodPost:
		update := updatePass{}

		err := c.BindJSON(&update)
		if err != nil {
			c.Writer.WriteHeader(getStatusCode(err))
			return
		}

		err = h.UserUsecase.UpdatePassword(c.Request.Context(), update.OldPassword, update.NewPassword, userRedis.Id)
		if err != nil {
			c.Writer.WriteHeader(getStatusCode(err))
			return
		}

		c.Writer.WriteHeader(http.StatusOK)
	}
	// TODO update
}

func (h *Handler) profile(c *gin.Context) {
	userRedis := getSession(c)
	if userRedis.Id == 0 {
		c.Redirect(http.StatusSeeOther, "/user/signin")
		return
	}

	profileID, err := strconv.ParseInt(c.Param("id"), 10, 64)
	fmt.Println(profileID, err)
	if err != nil || profileID == 0 {
		url := "/user/profile/" + strconv.FormatInt(userRedis.Id, 10)
		c.Redirect(http.StatusSeeOther, url)
		return
	}

	user, err := h.UserUsecase.GetByID(c.Request.Context(), profileID)
	if err != nil {
		c.Writer.WriteHeader(http.StatusNotFound)
		return
	}

	c.HTML(http.StatusOK, "profile.html", gin.H{
		"user": user,
	})
}

func (h *Handler) deleteUser(c *gin.Context) {
	// TODO delete
}

type userSession struct {
	Id     int64  `json:"id,omitempty"`
	Access string `json:"access,omitempty"`
}

func (h *Handler) session(c *gin.Context, id int64) error {
	user, err := h.UserUsecase.GetByID(c, id)
	if err != nil {
		return err
	}
	// TODO json в redis
	b, err := json.Marshal(user)
	if err != nil {
		return err
	}
	session := sessions.Default(c)
	session.Options(sessions.Options{MaxAge: 3600 * 24, Path: "/", HttpOnly: true})
	session.Set(key, b)
	err = session.Save()
	if err != nil {
		return err
	}

	return nil
}

func getSession(c *gin.Context) userSession {
	session := sessions.Default(c)
	a := session.Get(key)
	if a == nil {
		return userSession{}
	}
	user := &userSession{}
	fmt.Println(user, a.([]byte))
	err := json.Unmarshal(a.([]byte), user)
	if err != nil {
		return userSession{}
	}
	fmt.Println(user)
	return *user
}
