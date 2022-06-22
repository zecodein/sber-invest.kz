package web

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/zecodein/sber-invest.kz/domain"
)

type Handler struct {
	UserUsecase        domain.UserUsecase
	ArticleUsecase     domain.ArticleUsecase
	CommentUsecase     domain.CommentUsecase
	LikeArticleUsecase domain.LikeArticleUsecase
	LikeCommentUsecase domain.LikeCommentUsecase
}

func NewHandler(r *gin.Engine, h *Handler) {
	r.GET("/", h.index)
	r.GET("/knowledgebase", h.knowledgebase)
	r.GET("/notifications", h.notifications)
	r.GET("/counttaxbasebroker", h.counttaxbasebroker)
	r.GET("/knowledgebase/:id", h.getKnowledgebaseById)
	// r.GET("/aboutus", h.aboutus)
	r.GET("/services", h.services)
	// r.GET("/courses", h.courses)
	r.GET("/videos", h.videos)
	r.GET("/tools", h.tools)
	r.GET("/privacyPolicy", h.privacyPolicy)
	r.GET("/contractOffer", h.contractOffer)
	r.GET("/taxreturn", h.taxreturn)
	r.GET("/consultation", h.consultation)
	r.GET("/NalInvVKaz", h.nalInvVKAZ)

	user := r.Group("/user")
	user.GET("/signup", h.signUp)
	user.POST("/signup", h.signUp)
	user.GET("/signin", h.signIn)
	user.POST("/signin", h.signIn)
	user.GET("/signout", h.signOut)
	user.GET("/update/password", h.updatePassword)
	user.POST("/update/password", h.updatePassword)
	user.GET("/profile/:id", h.profile)
	user.GET("/profile/", h.profile)
	user.POST("/delete", h.deleteUser)

	// JWT routes for testing ...
	public := r.Group("/api")
	// api.GET("/login", h.jwtLogin)
	public.POST("/register", h.jwtRegister)
	// api.GET("admin/user", h.adminUser)

	article := r.Group("/article")
	article.GET("/create", h.createArticle)
	article.POST("/create", h.createArticle)
	article.GET("/update", h.updateArticle)
	article.PUT("/update", h.updateArticle)
	article.GET("/:id", h.getArticleByID)
	article.GET("/delete", h.deleteArticle)

	comment := r.Group("/comment")
	comment.POST("/create", h.createComment)
	comment.POST("/update", h.updateComment)
	comment.POST("/delete", h.deleteComment)

	voteArticle := r.Group("/vote/article")
	voteArticle.POST("/like/:id", h.likeArticle)
	voteArticle.POST("/dislike/:id", h.dislikeArticle)

	voteComment := r.Group("/vote/comment")
	voteComment.POST("/like/:id", h.likeComment)
	voteComment.POST("/dislike/:id", h.dislikeComment)

	admin := r.Group("/admin")
	admin.GET("/", h.admin)
	admin.POST("/access", h.adminAccess)

}

func (h *Handler) admin(c *gin.Context) {
	if getSession(c).Access != "superuser" {
		c.HTML(http.StatusNotFound, "404.html", gin.H{})
		return
	}

	users, err := h.UserUsecase.GetAll(c)
	if err != nil {
		c.Writer.WriteHeader(getStatusCode(err))
		return
	}
	c.HTML(http.StatusOK, "admin.html", gin.H{
		"users":   users,
		"session": getSession(c),
	})
}

func (h *Handler) adminAccess(c *gin.Context) {
	if getSession(c).Access != "superuser" {
		c.HTML(http.StatusNotFound, "404.html", gin.H{})
		return
	}

	email := c.Request.FormValue("email")
	access := c.Request.FormValue("access")

	err := h.UserUsecase.ChangeAccess(c, email, access)
	if err != nil {
		c.Writer.WriteHeader(getStatusCode(err))
		return
	}

	fmt.Println(email, access)
	c.Redirect(http.StatusFound, "/admin")
}

func (h *Handler) index(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{
		"session": getSession(c),
	})
}

type category struct {
	Id          int
	Name        string
	Description string
}

var categories = [6]category{
	{Id: 1, Name: "Assetallocation", Description: "В этой рубрике собраны материалы на тему инвестиционных стратегий, финансовых инструментов, портфелей, инструментов инвестиционного анализа – все что касается инвестиций."},
	{Id: 2, Name: "Налоги", Description: "В этой рубрике собраны материалы на тему налогообложения активов в портфеле инвестора и его налоговой отчетности в Казахстане (инструкции, разъяснительные статьи, новости."},
	{Id: 3, Name: "Пошаговые Инструкции", Description: "В этой рубрике собраны все инструкции проекта (оплата налогов, заполнение 240 формы, регистрация брокерского договора и подачи отчётности в НацБанк)"},
	{Id: 4, Name: "Психология Инвестиций", Description: "В этой рубрике собраны материалы о людях, их особенностях и ограничениях. О дисциплине, правилах и инструментах, которые в нужный момент могут удержать нас от ошибок."},
	{Id: 5, Name: "Важные Новости", Description: "В этой рубрике собраны «выжимки» важных новостей за каждый квартал"},
	{Id: 6, Name: "TuneUp", Description: "В этой рубрике собрана информация о курсах, конференциях и других полезных мероприятиях и ресурсах, с помощью которых можно «прокачать» свою финансовую грамотность."},
}

func (h *Handler) notifications(c *gin.Context) {
	c.HTML(http.StatusOK, "notifications.html", gin.H{
		"session": getSession(c),
	})
}

// Расчет налогооблагаемой базы по отчету брокера
func (h *Handler) counttaxbasebroker(c *gin.Context) {
	c.HTML(http.StatusOK, "countTaxBaseBroker.html", gin.H{
		"session": getSession(c),
	})
}

func (h *Handler) knowledgebase(c *gin.Context) {
	c.HTML(http.StatusOK, "knowledgebase.html", gin.H{
		"categories": categories,
		"session":    getSession(c),
	})
}

func (h *Handler) getKnowledgebaseById(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.HTML(http.StatusNotFound, "404.html", gin.H{
			"session": getSession(c),
		})
		return
	}

	articles, err := h.ArticleUsecase.GetByCategory(c, categories[id-1].Name)
	if err != nil {
		c.HTML(http.StatusNotFound, "404.html", gin.H{
			"session": getSession(c),
		})
		return
	}

	c.HTML(http.StatusOK, "articles.html", gin.H{
		"articles": articles,
		"session":  getSession(c),
	})
	fmt.Println(id)
}

func (h *Handler) aboutus(c *gin.Context) {
	c.HTML(http.StatusOK, "aboutus.html", gin.H{
		"session": getSession(c),
	})
}

func (h *Handler) services(c *gin.Context) {
	c.HTML(http.StatusOK, "services.html", gin.H{
		"session": getSession(c),
	})
}

func (h *Handler) courses(c *gin.Context) {
	c.HTML(http.StatusOK, "courses.html", gin.H{
		"session": getSession(c),
	})
}

func (h *Handler) videos(c *gin.Context) {
	c.HTML(http.StatusOK, "videos.html", gin.H{
		"session": getSession(c),
	})
}

func (h *Handler) tools(c *gin.Context) {
	c.HTML(http.StatusOK, "tools.html", gin.H{
		"session": getSession(c),
	})
}

func (h *Handler) privacyPolicy(c *gin.Context) {
	c.HTML(http.StatusOK, "privacyPolicy.html", gin.H{
		"session": getSession(c),
	})
}

func (h *Handler) contractOffer(c *gin.Context) {
	c.HTML(http.StatusOK, "contractOffer.html", gin.H{
		"session": getSession(c),
	})
}

func (h *Handler) taxreturn(c *gin.Context) {
	c.HTML(http.StatusOK, "taxreturn.html", gin.H{
		"session": getSession(c),
	})
}

func (h *Handler) consultation(c *gin.Context) {
	c.HTML(http.StatusOK, "consultation.html", gin.H{
		"session": getSession(c),
	})
}

func (h *Handler) nalInvVKAZ(c *gin.Context) {
	c.HTML(http.StatusOK, "NalInvVKaz.html", gin.H{
		"session": getSession(c),
	})
}
