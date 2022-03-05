package web

import "net/http"

// * Routes - Инициализация маршрутов
func (app *Application) Routes() *http.ServeMux {
	mux := http.NewServeMux()

	// * Создать маршуты

	// * Подключить статические файлы

	return mux
}
