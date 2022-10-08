const wrapper = document.querySelector('.sliderWrapper');
const menuItems =   document.querySelectorAll('.menuItem'); 

const payment = document.getElementById('payment');
const payButton = document.querySelector('.productButton');
const close = document.querySelector('.close');


payButton.addEventListener('click',() => {
    payment.style.display = 'flex';
})
close.addEventListener('click', () => {
    payment.style.display = 'none';
})

const products = [
    {
        id: 1,
        title: 'Air Force',
        price: 119,
        colors: [
            {
                code: 'black',
                img: './img/air.png'
            },
            {
                code:'darkblue',
                img: './img/air2.png'
            }
        ]
    },
    {
        id: 2,
        title: 'Air Jordan',
        price: 149,
        colors: [
            {
                code: 'lightgray',
                img: './img/jordan.png'
            },
            {
                code:'green',
                img: './img/jordan2.png'
            }
        ]
    },
    {
        id: 3,
        title: 'Blazer',
        price: 109,
        colors: [
            {
                code: 'lightgray',
                img: './img/blazer.png'
            },
            {
                code:'green',
                img: './img/blazer2.png'
            }
        ]
    },
    {
        id: 4,
        title: 'Crater',
        price: 129,
        colors: [
            {
                code: 'black',
                img: './img/crater.png'
            },
            {
                code:'lightgray',
                img: './img/crater2.png'
            }
        ]
    },
    {
        id: 5,
        title: 'Hippie',
        price: 99,
        colors: [
            {
                code: 'gray',
                img: './img/hippie.png'
            },
            {
                code:'black',
                img: './img/hippie2.png'
            }
        ]
    }
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');

menuItems.forEach((item,index) => {
    // change the current slide 
    item.addEventListener('click', () => {
         wrapper.style.transform = `translateX(${-100 * index}vw)`;
 //    change the choosen product 
         choosenProduct = products[index];

    // change texts of current product 
        currentProductTitle.innerHTML = choosenProduct.title;
        currentProductPrice.textContent = '$' + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

            // assing new colors 
        currentProductColors.forEach((color,index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
    });
    });
});

currentProductColors.forEach((color,index) => {
    color.addEventListener('click', () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});
currentProductSizes.forEach((size,index) => {
    size.addEventListener('click',() => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = 'white';
            size.style.color = 'black';
        })
        size.style.backgroundColor = 'black';
        size.style.color = 'white';
    })
})

// =================================================================
// search keyword

const searchInput = document.querySelector('.searchInput');
const searchIcon = document.querySelector('.searchIcon');

function search () {
let currentProduct =  searchInput.value.toUpperCase();
   menuItems.forEach((item,index) => {
        if(item.innerHTML == currentProduct) {
            wrapper.style.transform = `translateX(${-100 * index}vw)`;
             //    change the choosen product 
         choosenProduct = products[index];

         // change texts of current product 
             currentProductTitle.innerHTML = choosenProduct.title;
             currentProductPrice.textContent = '$' + choosenProduct.price;
             currentProductImg.src = choosenProduct.colors[0].img;
     
                 // assing new colors 
             currentProductColors.forEach((color,index) => {
             color.style.backgroundColor = choosenProduct.colors[index].code;
         });
        }
   });
}
searchIcon.addEventListener('click', () => {
    search();
})
searchInput.addEventListener('keyup', (e) => {
    if(e.key == 'Enter')
        search();
})
