const product = [
    {
        id: 0,
        image: 'image/pro1.1M.webp',
        title: 'Logitech Mx master 3S',
        price: 120,
    },
    {
        id: 1,
        image: 'image/pro2.1M.webp',
        title: 'Razer League of legends',
        price: 60,
    },
    {
        id: 2,
        image: 'image/pro3.1K.jpg',
        title: 'Viper V2 Pro',
        price: 230,
    },
    {
        id: 3,
        image: 'image/pro4.1M.jpg',
        title: 'Huntsman V2',
        price: 100,
    },
    {
        id: 4,
        image: 'image/pro5.1K.jpg',
        title: 'DeathAddders',
        price: 100,
    },
    {
        id: 5,
        image: 'image/pro6.1M.jpg',
        title: 'Death Adder',
        price: 100,
    },
    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}