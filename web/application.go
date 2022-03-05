package web

import "html/template"

// * Application - Зависимости всего веб приложения
type Application struct {
	TemplateCache map[string]*template.Template
}
