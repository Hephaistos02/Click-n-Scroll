let iconcart = document.querySelector('.icon-cart' );
let closecart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHtml = document.querySelector('listProduct')
let listProducts = [];


iconcart.addEventListener('click', () =>{
    body.classList.toggle('showcart')
})
closecart.addEventListener('click', () =>{
    body.classList.toggle('showcart')
})

// begin video from 13:23