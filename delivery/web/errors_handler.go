package web

import (
	"log"
	"net/http"
)

func getStatusCode(err error) int {
	log.Println(err)
	// switch err {
	// case domain.ErrPasswordNotConfirmed:
	// 	return http.StatusBadRequest
	// case bcrypt.ErrMismatchedHashAndPassword:
	// 	return http.StatusUnauthorized
	// case http.ErrNoCookie:
	// 	return http.StatusUnauthorized
	// default:
	// 	return http.StatusInternalServerError
	// }
	return http.StatusInternalServerError
}
