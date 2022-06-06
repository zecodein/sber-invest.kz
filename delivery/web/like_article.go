package web

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/zecodein/sber-invest.kz/domain"
)

func (h *Handler) likeArticle(c *gin.Context) {
	vote := domain.LikeArticle{}
	vote.UserID = getSession(c).Id

	if vote.UserID == 0 {
		c.Redirect(http.StatusSeeOther, "/user/signin")
		return
	}

	articleID := c.Param("id")
	var err error

	vote.ArticleID, err = strconv.ParseInt(articleID, 10, 64)
	if err != nil {
		c.Writer.WriteHeader(getStatusCode(err))
		return
	}

	vote.Vote = 1
	err = h.LikeArticleUsecase.Like(c, &vote)
	if err != nil {
		c.Writer.WriteHeader(getStatusCode(err))
		return
	}
	c.Redirect(http.StatusFound, "/article/"+articleID)
	fmt.Println(vote)
}

func (h *Handler) dislikeArticle(c *gin.Context) {
	vote := domain.LikeArticle{}
	vote.UserID = getSession(c).Id

	if vote.UserID == 0 {
		c.Redirect(http.StatusSeeOther, "/user/signin")
		return
	}

	articleID := c.Param("id")
	var err error

	vote.ArticleID, err = strconv.ParseInt(articleID, 10, 64)
	if err != nil {
		c.Writer.WriteHeader(getStatusCode(err))
		return
	}

	vote.Vote = -1
	err = h.LikeArticleUsecase.Dislike(c, &vote)
	if err != nil {
		c.Writer.WriteHeader(getStatusCode(err))
		return
	}
	c.Redirect(http.StatusFound, "/article/"+articleID)
	fmt.Println(vote)
}
