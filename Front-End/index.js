
fetch('http://localhost:3000/api/cameras').then(res=>res.json()).then(data=>{
    
    let lensesDiv = document.getElementsByClassName('flexContainer2')[0];
    lensesDiv.innerHTML ="" ;
        data.forEach(element => {
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