function createArticle() {
    let title = document.querySelector("#title");
    let text = document.querySelector("#text");
    let category = document.querySelector("#categories")

    var data = JSON.stringify({
        title: title.value,
        text: text.value,
        name: category.value,
    });

    console.log(data)

    let url = "/article/create";
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
        }
    })();
}
