   
       let cartDiv = document.getElementById('items')


   let cart = localStorage.getItem('cart');
   if (cart != null ){
       cart = JSON.parse(cart)
      
   }



    //cartDiv.innerHTML = " " ;
        cart.forEach(element => {
            cartDiv.insertAdjacentHTML('beforeend',` 
        
        <tr>
        <td><img src="${element.imageUrl}" width = 160px height = 150px /> </td>
        <td>${element.name}</td>
        <td> <input class="input-cart"type="number"/> </td>
        <td>${element.price}</td>
        <td><button class="delete-btn"><i class="fa fa-trash"></i></button></td>
       
</tr>
        
        `)
    });













