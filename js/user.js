function signup() {
    let firstname = document.querySelector("#InputFirstName1")
    let lastname = document.querySelector("#InputLastName1")
    let email = document.querySelector("#InputEmail1");
    let password = document.querySelector("#password");
    let confirm = document.querySelector("#confirm");

    var data = JSON.stringify({
        first_name: firstname.value,
        last_name: lastname.value,
        email: email.value,
        password: password.value,
        confirm_password: confirm.value,
    });
    console.log(data)
    let url = "http://localhost:8080/user/signup";
    (async () => {
        const rawResponse = await fetch(url, {
            mode: 'no-cors',
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: data,
        });
        // const content = await rawResponse.status();
        if (rawResponse.status == 201) {
            // window.location.replace("/")
        }
    })();
}

function signin() {
    let email = document.querySelector("#InputEmail1");
    let password = document.querySelector("#password");

    var data = JSON.stringify({
        email: email.value,
        password: password.value,
    });
    console.log(data)
    let url = "http://localhost:8080/user/signin";
    (async () => {
        const rawResponse = await fetch(url, {
            mode: 'no-cors',
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: data,
        });
        // const content = await rawResponse.status();
        if (rawResponse.status == 201) {
            // window.location.replace("/")
        }
    })();
}
