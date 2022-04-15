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
	r.GET("/privacyPolicy", privacyPolicy)
	r.GET("/contractOffer", contractOffer)
	r.GET("/taxreturn", taxreturn)
	r.GET("/NalInvVKaz", nalInvVKAZ)
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

func privacyPolicy(c *gin.Context) {
	c.HTML(http.StatusOK, "privacyPolicy.html", gin.H{})
}

func contractOffer(c *gin.Context) {
	c.HTML(http.StatusOK, "contractOffer.html", gin.H{})
}

func taxreturn(c *gin.Context) {
	c.HTML(http.StatusOK, "taxreturn.html", gin.H{})
}

func nalInvVKAZ(c *gin.Context) {
	c.HTML(http.StatusOK, "NalInvVKaz.html", gin.H{})
}
