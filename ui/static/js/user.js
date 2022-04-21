
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
    
    const warning = document.getElementById("warning")

    let url = "/user/signup";
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
            window.location.replace("/user/signin")
        } else {
            warning.innerHTML = ""
            warning.innerHTML += "Шото не так :("
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

    const warning = document.getElementById("warning")

    let url = "/user/signin";
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
        if (rawResponse.status == 200) {
            window.location.replace("/")
        } else {
            warning.innerHTML = ""
            warning.innerHTML += "Неправильная почта или пароль :("
        }
    })();
}
