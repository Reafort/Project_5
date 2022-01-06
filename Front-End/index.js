
   
       let cartDiv = document.getElementById('items')

function showcart(){
    cartDiv.innerHTML = ''
   let cart = localStorage.getItem('cart');
   if (cart != null ){
       cart = JSON.parse(cart)
      
   }


        cart.forEach((element,index) => {
            cartDiv.insertAdjacentHTML('beforeend',` 
        
        <tr>
        <td><img src="${element.imageUrl}" width = 110px height = 90px /> </td>
        <td>${element.name}</td>
        <td> <input class="input-cart"type="number"/> </td>
        <td>${element.price}</td>
        <td><button class="delete-btn" onclick="deleteItem(${index})"><i class="fa fa-trash"></i></button></td>
       
</tr>
        
        `)
    });

    const empty = document.getElementById("empty");
    const notEmpty = document.getElementById("notEmpty");
  
    if (cart.length === 0) {
        empty.style.display = 'inline';
        notEmpty.style.display = 'none';
      } else {
        empty.style.display = 'none';
        notEmpty.style.display = 'inline';
      }
    }


      //removing item using splice//

 function deleteItem(deleteItem) {

var retrieveObject = JSON.parse(localStorage.getItem('cart'));
retrieveObject.splice(deleteItem,1)
localStorage.setItem('cart',JSON.stringify(retrieveObject))
showcart()
}

showcart()



//form
function submitForm() {
    
    let form = document.getElementById("contactForm");
    //make validation before creating object
    const fname = document.getElementById('fname').value ;
const lname = document.getElementById('lname').value;
const email= document.getElementById('email').value
const city = document.getElementById('city').value
const address = document.getElementById('address').value

//Object line to access the values and send it back to API

if(fname == "" || lname == "" || email == "" ||city == ""||address == ""){
    alert("please insert the missing data")
}else{
    let contact = {
        firstName : fname,
        lastName :lname ,
        email : email,
        city : city,
        address : address
    }

//send it to API
    let products = []
    let cart = JSON.parse(localStorage.cart)
    cart.forEach(item =>{
        products.push(item._id)
    })
    console.log(contact)
    console.log(products)
    let sendOBj = {
        contact,
        products
    }
// fetch sending the body and receiving data

    fetch ('http://localhost:3000/api/cameras/order',{
        method:"POST",
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(sendOBj)
    }).then(res=>res.json()).then(data=>{
        console.log(data)
        localStorage.setItem('orderId',data.orderId)
        window.location.href = './confirmation.html'
    }).catch(err=>{
        console.log(err)
    })
}
    //form.submit();
 }







    
      









