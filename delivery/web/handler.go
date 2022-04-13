package web

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func NewHandler(r *gin.Engine) {
	r.GET("/", index)
}

func index(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{})
}
