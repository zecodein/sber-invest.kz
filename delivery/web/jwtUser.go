package web

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/zecodein/sber-invest.kz/domain"
)

func (h *Handler) jwtRegister(c *gin.Context) {
	var input domain.UserRequestDTO

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	u := &domain.User{}

	u.FirstName = input.FirstName
	u.LastName = input.LastName
	u.Email = input.Email
	u.Password = input.Password

	_, err := h.UserUsecase.Create(c.Request.Context(), u)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "validated"})
}
