package main

import (
	"flag"
	"log"
	"net/http"
	"time"

	"github.com/BurntSushi/toml"
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
	flag.StringVar(&configPath, "config-path", "configs/server.toml", "path to config file")
}

func main() {
	// * CONFIG
	flag.Parse()

	config := configs.NewConfig()

	_, err := toml.DecodeFile(configPath, config)
	if err != nil {
		log.Fatal(err)
	}

	// * CONNECT DATABASE
	db, err := postgres.NewPostgresRepository(config)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// * ROUTER
	router := gin.Default()

	// * REDIS STORE
	store, err := redis.NewStore(10, "tcp", config.CacheHost+config.CacheAddr, config.CachePassword, []byte("sber"))
	if err != nil {
		log.Fatal(err)
	}

	// * SESSION MIDDLEWARE
	router.Use(sessions.Sessions("sber-invest", store))

	// * STATIC FILES & PARSE *.html files
	router.Static("/static", "./ui/static")
	router.LoadHTMLGlob("./ui/html/*")

	// * REPOSITORY
	userRepository := repository.NewUserRepository(db)

	// * USECASE
	userUsecase := usecase.NewUserUsecase(userRepository)

	// * HANDLER
	web.NewHandler(router)
	web.NewUserHandler(router, userUsecase)

	// * SERVER
	server := &http.Server{
		Addr:         config.BindAddr,
		Handler:      router,
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  15 * time.Second,
	}

	log.Println(server.ListenAndServe())
}
