package web

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/zecodein/sber-invest.kz/domain"
)

func (h *Handler) likeComment(c *gin.Context) {
	url := c.Request.Referer()
	articleID := url[len(url)-1:]
	vote := domain.LikeComment{}
	vote.UserID = getSession(c).Id

	if vote.UserID == 0 {
		c.Redirect(http.StatusSeeOther, "/user/signin")
		return
	}

	commentID := c.Param("id")
	var err error

	vote.CommentID, err = strconv.ParseInt(commentID, 10, 64)
	if err != nil {
		c.Writer.WriteHeader(getStatusCode(err))
		return
	}

	vote.Vote = 1
	err = h.LikeCommentUsecase.Like(c, &vote)
	if err != nil {
		c.Writer.WriteHeader(getStatusCode(err))
		return
	}
	c.Redirect(http.StatusFound, "/article/"+articleID)
	fmt.Println(vote)
}

func (h *Handler) dislikeComment(c *gin.Context) {
	url := c.Request.Referer()
	articleID := url[len(url)-1:]
	vote := domain.LikeComment{}
	vote.UserID = getSession(c).Id

	if vote.UserID == 0 {
		c.Redirect(http.StatusSeeOther, "/user/signin")
		return
	}

	commentID := c.Param("id")
	var err error

	vote.CommentID, err = strconv.ParseInt(commentID, 10, 64)
	if err != nil {
		c.Writer.WriteHeader(getStatusCode(err))
		return
	}

	vote.Vote = -1
	err = h.LikeCommentUsecase.Dislike(c, &vote)
	if err != nil {
		c.Writer.WriteHeader(getStatusCode(err))
		return
	}
	c.Redirect(http.StatusFound, "/article/"+articleID)
	fmt.Println(vote)
}
