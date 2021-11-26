
function handleSubmit () {
    const tarif = document.getElementById('tarif').value;
    const price = document.getElementById('price').value;

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("TARIF", tarif);
    sessionStorage.setItem("PRICE", price);

    return;
}