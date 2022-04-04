package main

import (
	"flag"
	"fmt"
	"log"

	"github.com/BurntSushi/toml"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/redis"
	"github.com/gin-gonic/gin"
	"github.com/zecodein/sber-invest.kz/configs"
	"github.com/zecodein/sber-invest.kz/repository/postgres"
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

	fmt.Println(config)

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
	// router.Static("/static", "./ui/static")
	// router.LoadHTMLGlob("./ui/html/*")
}
