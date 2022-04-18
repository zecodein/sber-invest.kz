package web

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/zecodein/sber-invest.kz/domain"
)

type Handler struct {
	UserUsecase domain.UserUsecase
}

func NewHandler(r *gin.Engine, h *Handler) {
	r.GET("/", h.index)
	r.GET("/aboutus", h.aboutus)
	r.GET("/services", h.services)
	r.GET("/courses", h.courses)
	r.GET("/videos", h.videos)
	r.GET("/tools", h.tools)
	r.GET("/privacyPolicy", h.privacyPolicy)
	r.GET("/contractOffer", h.contractOffer)
	r.GET("/taxreturn", h.taxreturn)
	r.GET("/NalInvVKaz", h.nalInvVKAZ)
}

func (h *Handler) index(c *gin.Context) {
	fmt.Println(getSession(c))
	c.HTML(http.StatusOK, "index.html", gin.H{})
}

func (h *Handler) aboutus(c *gin.Context) {
	c.HTML(http.StatusOK, "aboutus.html", gin.H{})
}

func (h *Handler) services(c *gin.Context) {
	c.HTML(http.StatusOK, "services.html", gin.H{})
}

func (h *Handler) courses(c *gin.Context) {
	c.HTML(http.StatusOK, "courses.html", gin.H{})
}

func (h *Handler) videos(c *gin.Context) {
	c.HTML(http.StatusOK, "videos.html", gin.H{})
}

func (h *Handler) tools(c *gin.Context) {
	c.HTML(http.StatusOK, "tools.html", gin.H{})
}

func (h *Handler) privacyPolicy(c *gin.Context) {
	c.HTML(http.StatusOK, "privacyPolicy.html", gin.H{})
}

func (h *Handler) contractOffer(c *gin.Context) {
	c.HTML(http.StatusOK, "contractOffer.html", gin.H{})
}

func (h *Handler) taxreturn(c *gin.Context) {
	c.HTML(http.StatusOK, "taxreturn.html", gin.H{})
}

func (h *Handler) nalInvVKAZ(c *gin.Context) {
	c.HTML(http.StatusOK, "NalInvVKaz.html", gin.H{})
}
