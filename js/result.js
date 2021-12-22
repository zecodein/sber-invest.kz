window.addEventListener('load', () => {

    // Via Query parameters - GET
    const params = (new URL(document.location)).searchParams;
    const tarif = params.get('tarif');
    const price = params.get('price'); 

    document.getElementById('result-tarif').innerHTML = tarif;
    document.getElementById('result-price').innerHTML = price;

})