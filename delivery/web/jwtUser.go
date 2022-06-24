package web

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/zecodein/sber-invest.kz/domain"
	token "github.com/zecodein/sber-invest.kz/usecase"
)

func (h *Handler) jwtLogin(c *gin.Context) {
	var input domain.UserLoginRequestDTO

	if err := c.ShouldBindJSON(&input); err != nil {
		c.Writer.WriteHeader(http.StatusBadRequest)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()}) // to be removed
		return
	}

	u := &domain.User{}

	u.Email = input.Email
	u.Password = input.Password

	token, err := h.UserUsecase.GetByEmailJWT(c.Request.Context(), u)

	if err != nil {
		c.Writer.WriteHeader(getStatusCode(err))
		c.JSON(http.StatusBadRequest, gin.H{"error": "username or password is incorrect."})
		return
	}

	c.Writer.WriteHeader(http.StatusCreated)
	c.JSON(http.StatusOK, gin.H{"token": token})
}

func (h *Handler) jwtRegister(c *gin.Context) {
	var input domain.UserRegisterRequestDTO

	if err := c.ShouldBindJSON(&input); err != nil {
		c.Writer.WriteHeader(getStatusCode(err))
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()}) // to be removed
		return
	}

	u := &domain.User{}

	u.FirstName = input.FirstName
	u.LastName = input.LastName
	u.Email = input.Email
	u.Password = input.Password

	_, err := h.UserUsecase.Create(c.Request.Context(), u)
	if err != nil {
		c.Writer.WriteHeader(getStatusCode(err))
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()}) // to be removed
		return
	}
	c.Writer.WriteHeader(http.StatusCreated)
	c.JSON(http.StatusOK, gin.H{"message": "registration success"}) // to be removed
}

func (h *Handler) jwtCurrentUser(c *gin.Context) {
	user_id, err := token.ExtractTokenID(c)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	u, err := h.UserUsecase.GetByID(c.Request.Context(), int64(user_id))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "success", "data": u})
}
