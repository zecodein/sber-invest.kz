package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
	token "github.com/zecodein/sber-invest.kz/usecase"
)

// import "github.com/appleboy/gin-jwt"

// GoMiddleware represent the data-struct for middleware
type GoMiddleware struct {
	// for extra stuff by middleware
}

// InitMiddleware initialize the middleware
func InitMiddleware() *GoMiddleware {
	return &GoMiddleware{}
}

// func (m *GoMiddleware) NameMiddle() gin.HandlerFunc {
// 	return func(c gin.Context) error {
// 		return nil
// 	}
//
// }

func (m *GoMiddleware) JWTAuthMiddlware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// need to add for empty token

		err := token.TokenValid(c)
		if err != nil {
			c.String(http.StatusUnauthorized, "Unauthorized")
			c.Abort()
			return
		}
		c.Next()
	}
}
