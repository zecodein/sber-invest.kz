package web

import (
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/zecodein/sber-invest.kz/domain"
)

type ArticleHandler struct {
	articleUsecase domain.ArticleUsecase
}

func NewArticleHandler(r *gin.Engine, us domain.ArticleUsecase) {
	handler := &ArticleHandler{
		articleUsecase: us,
	}

	r.GET("/article/create", handler.create)
	r.POST("/article/create", handler.create)

	r.GET("/article/update", handler.update)
	r.PUT("/article/update", handler.update)

	r.GET("/article/:id", handler.getByID)

	r.GET("/article/delete", handler.delete)
}

func (a *ArticleHandler) create(c *gin.Context) {
	userID := getSession(c)
	if userID == 0 {
		c.Redirect(http.StatusSeeOther, "/user/signin")
		return
	}

	categories, err := a.articleUsecase.GetAllCategory(c.Request.Context())
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

		article.UserID = userID
		article.ID, err = a.articleUsecase.Create(c.Request.Context(), article)
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

func (a *ArticleHandler) update(c *gin.Context) {
	if getSession(c) == 0 {
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

func (a *ArticleHandler) getByID(c *gin.Context) {
	// TODO err
	id, _ := strconv.ParseInt(c.Param("id"), 10, 64)
	// fmt.Fprint(c.Writer, "get by id ", id)
	article, err := a.articleUsecase.GetByID(c.Request.Context(), id)
	if err != nil {
		// TODO err
		log.Fatal(err)
	}

	c.HTML(http.StatusOK, "article_page.html", gin.H{
		"article": article,
	})
	// TODO article/:id page
}

func (a *ArticleHandler) delete(c *gin.Context) {
	if getSession(c) == 0 {
		c.Redirect(http.StatusSeeOther, "/user/signin")
		return
	}
	fmt.Fprint(c.Writer, "delete")
	// TODO delete article
}
