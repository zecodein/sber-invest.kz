package web

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/zecodein/sber-invest.kz/domain"
)

type UserHandler struct {
	userUsecase domain.UserUsecase
}

const key = "sber-session"

func NewUserHandler(r *gin.Engine, us domain.UserUsecase) {
	handler := &UserHandler{
		userUsecase: us,
	}

	r.GET("/user/signup", handler.signUp)
	r.POST("/user/signup", handler.signUp)

	r.GET("/user/signin", handler.signIn)
	r.POST("/user/signin", handler.signIn)

	r.GET("/user/signout", handler.signOut)

	r.GET("/user/update/password", handler.updatePassword)
	r.POST("/user/update/password", handler.updatePassword)

	r.GET("/user/profile/:id", handler.profile)
	r.GET("/user/profile/", handler.profile)

	r.POST("/user/delete", handler.delete)
}

func (u *UserHandler) signUp(c *gin.Context) {
	if getSession(c) != 0 {
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

		_, err = u.userUsecase.Create(c.Request.Context(), user)
		if err != nil {
			c.Writer.WriteHeader(getStatusCode(err))
			return
		}

		c.Writer.WriteHeader(http.StatusCreated)
	}
}

func (u *UserHandler) signIn(c *gin.Context) {
	if getSession(c) != 0 {
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
		id, err := u.userUsecase.GetByEmail(c.Request.Context(), user)
		if err != nil {
			c.Writer.WriteHeader(getStatusCode(err))
			return
		}
		fmt.Println(id)

		err = u.session(c, id)
		if err != nil {
			c.Writer.WriteHeader(getStatusCode(err))
			return
		}
		c.Writer.WriteHeader(http.StatusOK)
	}
}

func (u *UserHandler) signOut(c *gin.Context) {
	session := sessions.Default(c)
	session.Clear()
	session.Options(sessions.Options{MaxAge: -1})
	session.Save()
	c.Redirect(http.StatusSeeOther, "/")
}

func (u *UserHandler) updatePassword(c *gin.Context) {
	userID := getSession(c)
	if userID == 0 {
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

		err = u.userUsecase.UpdatePassword(c.Request.Context(), update.OldPassword, update.NewPassword, userID)
		if err != nil {
			c.Writer.WriteHeader(getStatusCode(err))
			return
		}

		c.Writer.WriteHeader(http.StatusOK)
	}
	// TODO update
}

func (u *UserHandler) profile(c *gin.Context) {
	userID := getSession(c)
	if userID == 0 {
		c.Redirect(http.StatusSeeOther, "/user/signin")
		return
	}

	profileID, err := strconv.ParseInt(c.Param("id"), 10, 64)
	fmt.Println(profileID, err)
	if err != nil || profileID == 0 {
		url := "/user/profile/" + strconv.FormatInt(userID, 10)
		c.Redirect(http.StatusSeeOther, url)
		return
	}

	user, err := u.userUsecase.GetByID(c.Request.Context(), profileID)
	if err != nil {
		c.Writer.WriteHeader(http.StatusNotFound)
		return
	}

	c.HTML(http.StatusOK, "profile.html", gin.H{
		"user": user,
	})
}

func (u *UserHandler) delete(c *gin.Context) {
	// TODO delete
}

func (u *UserHandler) session(c *gin.Context, id int64) error {
	session := sessions.Default(c)
	session.Options(sessions.Options{MaxAge: 3600 * 24, Path: "/", HttpOnly: true})
	session.Set(key, id)
	err := session.Save()
	if err != nil {
		return err
	}

	return nil
}

func getSession(c *gin.Context) int64 {
	session := sessions.Default(c)
	a := session.Get(key)
	if a == nil {
		return 0
	}
	return a.(int64)
}
