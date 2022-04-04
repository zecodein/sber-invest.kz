package web

import (
	"github.com/gin-gonic/gin"
	"github.com/zecodein/sber-invest.kz/domain"
)

type UserHandler struct {
	userUsecase domain.UserUsecase
}

func NewUserHandler(r *gin.Engine, us domain.UserUsecase) {
	handler := &UserHandler{
		userUsecase: us,
	}

	r.POST("/user/signup", handler.signUp)
	r.POST("/user/signin", handler.signIn)
	r.POST("/user/signout", handler.signOut)
	r.POST("/user/update", handler.update)
	r.POST("/user/:id", handler.getByID)
	r.POST("/user/delete", handler.delete)
}

func (u *UserHandler) signUp(c *gin.Context) {
	// sign up
}

func (u *UserHandler) signIn(c *gin.Context) {
	// sign in
}

func (u *UserHandler) signOut(c *gin.Context) {
	// sign out
}

func (u *UserHandler) update(c *gin.Context) {
	// update
}

func (u *UserHandler) getByID(c *gin.Context) {
	// get by id
}

func (u *UserHandler) delete(c *gin.Context) {
	// delete
}
