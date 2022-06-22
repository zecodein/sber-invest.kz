package middleware

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
// }
