package emailer

import (
	"crypto/tls"
	"fmt"

	gomail "gopkg.in/mail.v2"
)

func main() {
	abc := gomail.NewMessage()

	abc.SetHeader("From", "sales@zecodein.kz") // make sure less secure
	abc.SetHeader("To", "s-bek-k@mail.ru")
	abc.SetHeader("Subject", "Test Email Subject abc")
	abc.SetBody("text/plain", "This is the Test Body")

	a := gomail.NewDialer("mail.zecodein.kz", 25, "sales@zecodein.kz", "Zcode!n2022")
	a.TLSConfig = &tls.Config{InsecureSkipVerify: true}

	if err := a.DialAndSend(abc); err != nil {
		fmt.Println(err)
		panic(err)
	}
}
