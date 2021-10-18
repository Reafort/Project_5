var singleProduct = [
    { 
        name:"Zurss 50S",
        price: 499,
        imageUrl:"/JWDP5-master/images/vcam_1.jpg",
        },

    { 
        name:"Hirsch 400DTS",
        price: 309,
        imageUrl:"/JWDP5-master/images/vcam_2.jpg",
        },
    { 
        name:"Franck JS 105",
        price: 209,
        imageUrl:"/JWDP5-master/images/vcam_3.jpg",
        },
    { 
        name:"Kuros TTS",
        price: 159,
        imageUrl:"/JWDP5-master/images/vcam_4.jpg",
        },
    { 
        name:"Katatone",
        price: 599,
        imageUrl:"/JWDP5-master/images/vcam_5.jpg",
        },

    ]
let search= window.location.search
let params = new URLSearchParams(search)
let productid = params.get('id')
    fetch ('http://localhost:3000/api/cameras/'+productid).then(res=>res.json()).then(data=>{
        console.log(data)
    
let container = document.getElementsByClassName('flexContainer3')[0];

container.innerHTML = `
<div class="singleProduct">
<figure class="card1-secondPage">
  <img alt="vcam1" src="${data.imageUrl}">
  <figcaption>${data.name}</figcaption>
  <span class="price">${data.price}</span>
  <p class="description">${data.description}</p>
  <span class="lenses">Lenses
      <select id="lenses">
        
      </select></span>
      <div class="single-items-addtoCart">
  <div class="addtoCart">ADD TO CART</div></div>
 </figure>
 </div>
 `

let lensesDiv = document.getElementById('lenses')
data.lenses.forEach(element => {
    lensesDiv.insertAdjacentHTML('beforeend',` <option value="lense1">${element}</option>`)
});

let button = document.getElementsByClassName('addtoCart')[0].addEventListener('click',()=>{

    let products = []
    products.push(data)
localStorage.setItem('cart',JSON.stringify(products))
})
})

//








