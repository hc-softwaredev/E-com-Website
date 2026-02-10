function searchProducts() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let products = document.getElementsByClassName('product-card');

    for (let i = 0; i < products.length; i++) {
       if(!products[i].innerHTML.toLowerCase().includes(input)) {
        products[i].style.display = 'none';
       } else {
        products[i].style.display = 'block';
       }
    }
}