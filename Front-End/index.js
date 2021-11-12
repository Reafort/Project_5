   
       let cartDiv = document.getElementById('items')


   let cart = localStorage.getItem('cart');
   if (cart != null ){
       cart = JSON.parse(cart)
      
   }



    //cartDiv.innerHTML = " " ;
        cart.forEach(element => {
            cartDiv.insertAdjacentHTML('beforeend',` 
        
        <tr>
        <td><img src="${element.imageUrl}" width = 50 height = 50/> </td>
        <td>${element.name}</td>
        <td> <input type="number"/> </td>
        <td>${element.price}</td>
        <td><button><i class="fa fa-trash"></i></button></td>
       
</tr>
        
        `)
    });













