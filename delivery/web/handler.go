package web

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func NewHandler(r *gin.Engine) {
	r.GET("/", index)
	r.GET("/aboutus", aboutus)
	r.GET("/services", services)
	r.GET("/courses", courses)
	r.GET("/videos", videos)
	r.GET("/tools", tools)
}

func index(c *gin.Context) {
	fmt.Println(getSession(c))
	c.HTML(http.StatusOK, "index.html", gin.H{})
}

func aboutus(c *gin.Context) {
	c.HTML(http.StatusOK, "aboutus.html", gin.H{})
}

func services(c *gin.Context) {
	c.HTML(http.StatusOK, "services.html", gin.H{})
}

func courses(c *gin.Context) {
	c.HTML(http.StatusOK, "courses.html", gin.H{})
}

func videos(c *gin.Context) {
	c.HTML(http.StatusOK, "videos.html", gin.H{})
}

func tools(c *gin.Context) {
	c.HTML(http.StatusOK, "tools.html", gin.H{})
}
