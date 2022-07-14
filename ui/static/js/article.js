function createArticle() {
    let title = document.querySelector("#title");
    // let text = document.querySelector("#editor");
    let category = document.querySelector("#categories")
 
    // retreive CK editor data from text area
    const editorData = editor.getData();
    // console.log(editorData)

    var data = JSON.stringify({
        title: title.value,
        text: editorData, // replaced text by editorData
        category_name: category.value,
    });

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
        let content = await rawResponse.json();
        if (rawResponse.status == 200) {
            console.log(content)      
              
              let url = "/article/" + content.id
            // console.log(content, url)
            window.location.replace(url)
        }
    })();    
}
