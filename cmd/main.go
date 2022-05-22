package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/BurntSushi/toml"
	"github.com/gin-contrib/multitemplate"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/redis"
	"github.com/gin-gonic/gin"
	"github.com/zecodein/sber-invest.kz/configs"
	"github.com/zecodein/sber-invest.kz/delivery/web"
	"github.com/zecodein/sber-invest.kz/repository"
	"github.com/zecodein/sber-invest.kz/repository/postgres"
	"github.com/zecodein/sber-invest.kz/usecase"
)

var configPath string

func init() {
	flag.StringVar(&configPath, "cfg", "configs/docker.toml", "path to config file")
}

func main() {
	flag.Parse()

	logger, err := os.Create("server.log")
	if err != nil {
		log.Println(err)
		return
	}

	config := configs.NewConfig()
	_, err = toml.DecodeFile(configPath, config)
	if err != nil {
		log.Fatal(err)
	}

	db, err := postgres.NewPostgresRepository(config)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	router := gin.Default()
	router.Use(gin.LoggerWithWriter(logger))

	store, err := redis.NewStore(10, "tcp", config.CacheHost+config.CacheAddr, config.CachePassword, []byte("sber"))
	if err != nil {
		log.Fatal(err)
	}

	router.Use(sessions.Sessions("sber-invest", store))
	router.Static("/static", "./ui/static")
	router.HTMLRender = loadTemplates("./ui/html/")

	userRepository := repository.NewUserRepository(db)
	articleRepository := repository.NewArticleRepository(db)
	commentRepository := repository.NewCommentRepository(db)
	likeArticleRepository := repository.NewLikeArticleRepository(db)

	userUsecase := usecase.NewUserUsecase(userRepository)
	articleUsecase := usecase.NewArticleUsecase(articleRepository)
	commentUsecase := usecase.NewCommentUsecase(commentRepository)
	likeArticleUsecase := usecase.NewLikeArticleUsecase(likeArticleRepository)

	handler := &web.Handler{
		UserUsecase:        userUsecase,
		ArticleUsecase:     articleUsecase,
		CommentUsecase:     commentUsecase,
		LikeArticleUsecase: likeArticleUsecase,
	}
	web.NewHandler(router, handler)
	// web.NewUserHandler(router, userUsecase)
	// web.NewArticleHandler(router, articleUsecase)

	server := &http.Server{
		Addr:         config.BindAddr,
		Handler:      router,
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  15 * time.Second,
	}

	log.Println(server.ListenAndServe())
}

func loadTemplates(templatesDir string) multitemplate.Renderer {
	r := multitemplate.NewRenderer()

	layouts, err := filepath.Glob(templatesDir + "/layouts/*.html")
	if err != nil {
		panic(err.Error())
	}

	includes, err := filepath.Glob(templatesDir + "/includes/*.html")
	if err != nil {
		panic(err.Error())
	}

	// Generate our templates map from our layouts/ and includes/ directories
	for _, include := range includes {
		layoutCopy := make([]string, len(layouts))
		copy(layoutCopy, layouts)
		files := append(layoutCopy, include)
		r.AddFromFiles(filepath.Base(include), files...)
		fmt.Println(files)
	}
	return r
}
