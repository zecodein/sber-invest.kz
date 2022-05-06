package web

import (
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/zecodein/sber-invest.kz/domain"
)

func (h *Handler) createArticle(c *gin.Context) {
	userRedis := getSession(c)
	if userRedis.Id == 0 {
		c.Redirect(http.StatusSeeOther, "/user/signin")
		return
	}

	access, err := h.UserUsecase.GetAccess(c, userRedis.Id)
	if err != nil {
		c.Writer.WriteHeader(getStatusCode(err))
		return
	}

	if access == "basic_user" {
		c.Redirect(http.StatusFound, "/")
		return
	}

	categories, err := h.ArticleUsecase.GetAllCategory(c.Request.Context())
	if err != nil {
		log.Fatal(err)
		c.Writer.WriteHeader(getStatusCode(err))
		return
	}

	switch c.Request.Method {
	case http.MethodGet:
		// TODO create article page
		c.HTML(http.StatusOK, "article_create.html", gin.H{
			"categories": categories,
		})
	case http.MethodPost:
		article := &domain.Article{}

		err := c.BindJSON(article)
		if err != nil {
			c.Writer.WriteHeader(getStatusCode(err))
			return
		}

		for _, category := range categories {
			if category.Name == article.CategoryName {
				article.CategoryID = category.ID
			}
		}

		article.UserID = userRedis.Id
		article.ID, err = h.ArticleUsecase.Create(c.Request.Context(), article)
		if err != nil {
			c.Writer.WriteHeader(getStatusCode(err))
			return
		}

		c.JSON(http.StatusOK, article)
		// c.HTML(http.StatusCreated, "article.html", gin.H{
		// 	"article": article,
		// })
		// url := "/article/" + strconv.FormatInt(id, 10)
		// c.Redirect(http.StatusFound, url)
	}
}

func (h *Handler) updateArticle(c *gin.Context) {
	if getSession(c).Id == 0 {
		c.Redirect(http.StatusSeeOther, "/user/signin")
		return
	}
	switch c.Request.Method {
	case http.MethodGet:
		fmt.Fprint(c.Writer, "update")
		// TODO update article page
	case http.MethodPut:
		// TODO update article
	}
}

func (h *Handler) getArticleByID(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.HTML(http.StatusNotFound, "404.html", gin.H{})
		return
	}

	article, err := h.ArticleUsecase.GetByID(c.Request.Context(), id)
	if err != nil {
		c.HTML(http.StatusNotFound, "404.html", gin.H{})
		return
	}

	c.HTML(http.StatusOK, "article_page.html", gin.H{
		"article": article,
	})
	// TODO article/:id page
}

func (h *Handler) deleteArticle(c *gin.Context) {
	if getSession(c).Id == 0 {
		c.Redirect(http.StatusSeeOther, "/user/signin")
		return
	}
	fmt.Fprint(c.Writer, "delete")
	// TODO delete article
}
