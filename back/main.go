package main

import "fmt"

func getToken() (token string, err error) {
	// if err != nil {
	//   return
	// }
	// token = ..
	return
}

func main() {
	token, err := getToken()
	if err != nil {
		panic(err)
	}
	fmt.Printf("token %s\n", token)
}
