
function handleSubmit () {
    const tarif = document.getElementById('tarif').value;
    const price = document.getElementById('price').value;
    
    sessionStorage.setItem("TARIF", tarif);
    sessionStorage.setItem("PRICE", price);

    return;
}