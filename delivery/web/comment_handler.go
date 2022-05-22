package web

import (
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/zecodein/sber-invest.kz/domain"
)

func (h *Handler) createComment(c *gin.Context) {
	userID := getSession(c).Id
	if userID == 0 {
		c.Redirect(http.StatusSeeOther, "/user/signin")
		return
	}

	comment := domain.Comment{}

	err := c.BindJSON(&comment)
	if err != nil {
		log.Println(err)
		c.Writer.WriteHeader(getStatusCode(err))
		return
	}

	if strings.TrimSpace(comment.Text) == "" {
		c.Writer.WriteHeader(http.StatusBadRequest)
		return
	}

	comment.CreatedAt = time.Now()
	comment.UpdatedAt = time.Now()
	comment.UserID = userID

	log.Println(comment)

	_, err = h.CommentUsecase.Create(c, &comment)
	if err != nil {
		log.Println(err)
		c.Writer.WriteHeader(getStatusCode(err))
		return
	}

	c.Writer.WriteHeader(http.StatusCreated)
}

func (h *Handler) updateComment(c *gin.Context) {

}

func (h *Handler) deleteComment(c *gin.Context) {

}
