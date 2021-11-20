package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/zecodein/sber-invest.kz/controller"
)

func main() {
	// Создаю и запускаю в работу роутер для обслуживания запросов
	r := httprouter.New()
	routes(r)

	const PORT = ":8080"

	fmt.Printf("Listening on the port %v\nhttp://localhost%v/\n", PORT, PORT)
	log.Fatal(http.ListenAndServe(PORT, r))
}

func routes(r *httprouter.Router) {
	// Путь к папке со внешними файлами: html, js, css и тд
	r.ServeFiles("/public/*filepath", http.Dir("public"))

	r.GET("/", controller.MainPage)
	r.GET("/services", controller.ServicesPage)
}
