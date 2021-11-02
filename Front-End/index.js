
fetch('http://localhost:3000/api/cameras').then(res=>res.json()).then(data=>{
    
    let addtoCart= document.getElementsByClassName('singleProduct')[0];
    addtoCart.innerHTML ="" ;
        data.cart(element => {
        lensesDiv.insertAdjacentHTML('beforeend',` 
        
        <figure class="card2">
        <a href="single-product.html?id=${element._id}">
        <img alt="vcam1" src="${element.imageUrl}">
          <figcaption>${element.name}</figcaption>
       
    </a>
</figure>
        
        `)
    });
})








fetch('http://localhost:3000/api/cameras')
.then(response => response.json())
.then(cart=> renderAllCart(cart))

