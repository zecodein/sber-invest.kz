window.addEventListener('load', () => {

    // Via Query parameters - GET
    const params = (new URL(document.location)).searchParams;
    const tarif = params.get('tarif');
    const price = params.get('price'); 

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    // const name = sessionStorage.getItem('NAME');
    // const surname = sessionStorage.getItem('SURNAME');
    
    document.getElementById('result-tarif').innerHTML = tarif;
    document.getElementById('result-price').innerHTML = price;

})