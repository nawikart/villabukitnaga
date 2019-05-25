package auth

import (
	jwt "github.com/dgrijalva/jwt-go"
	"github.com/auth0/go-jwt-middleware"
	"time"
	"net/http"
)

var mySigningKey = []byte("secret")

func GetToken() string{
	token := jwt.New(jwt.SigningMethodHS256)

	/* Create a map to store our claims */
	claims := token.Claims.(jwt.MapClaims)
  
	/* Set token claims */
	claims["admin"] = true
	claims["name"] = "Kartini Nawi"
	claims["exp"] = time.Now().Add(time.Hour * 24).Unix()
  
	/* Sign the token with our secret */
	tokenString, _ := token.SignedString(mySigningKey)
	
	return tokenString
}

func GetTokenApi(w http.ResponseWriter, r *http.Request){
	w.Write([]byte(GetToken()))
}

var StatusHandler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Authorization")

	w.Write([]byte("API is up and running"))
  })

var JwtMiddleware = jwtmiddleware.New(jwtmiddleware.Options{
    ValidationKeyGetter: func(token *jwt.Token) (interface{}, error) {
      return mySigningKey, nil
    },
    SigningMethod: jwt.SigningMethodHS256,
})