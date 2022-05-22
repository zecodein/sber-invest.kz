function commentCreate() {
    let comment = document.querySelector("#comment");
    let article_id = document.querySelector("#article_id")
    let category_id = document.querySelector("#category_id")

    var data = JSON.stringify({
        article_id: Number(article_id.value),
        category_id: Number(category_id.value),
        text: comment.value,
    });

    const warning = document.getElementById("warning")

    let url = "/comment/create";
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
        } else {
            warning.innerHTML = ""
            warning.innerHTML += "Bad request"
        }
    })();
}
