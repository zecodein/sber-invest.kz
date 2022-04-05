package web

import (
	"log"
	"net/http"

	"github.com/jackc/pgx/v4"
	"github.com/zecodein/sber-invest.kz/domain"
	"golang.org/x/crypto/bcrypt"
)

func getStatusCode(err error) int {
	log.Println(err)
	switch err {
	case bcrypt.ErrMismatchedHashAndPassword:
		return http.StatusUnauthorized
	case http.ErrNoCookie:
		return http.StatusUnauthorized
	case pgx.ErrNoRows:
		return http.StatusBadRequest
	case domain.ErrWrongPassword:
		return http.StatusUnauthorized
	default:
		return http.StatusInternalServerError
	}
}
