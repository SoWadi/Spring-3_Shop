// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

var total = 0;

// Exercise 1
let selected, id;
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart

  //console.log(id, products.length);
  for (let i = 0; i < products.length - 1; i++) {
    if (id) {
      selected = products[id - 1];
      //return selected
    }
  }
  

  // 2. Add found product to the cartList array
  
  cartList.push(selected);
}

// ************************** Exercise2 ***************************
function cleanCart() {
  cartList = [];
  total = 0;
    cart.length = 0;
}

// ************************** Exercise3 **************************
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array

  for (item of cartList) {
    total += item.price;
  }
  console.log(total);
}

// ************************** Exercise4 **************************



function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart, generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  console.log("cart: ", cart);
console.log("id generateCart(): ", id);
        //Pour chaque élément cartList, nous devons valider s'il existe dans le tableau cart :

    for (let i = 0; i <= cartList.length-1; i++) { 

        let selectedFromCartList = cart.find((element) => element.id === cartList[i].id);
        console.log("selectedFromCartList:", selectedFromCartList); // while isnt in cart, devuelve UNDEFINED
        console.log("cart: ", cart);
        

        if (selectedFromCartList === undefined){  //si selectedFromCartList n'EXISTE pas dans cart[]
            let product = cartList[i];
            product.quantity = 1;
            product.subtotal = product.price;
            cart.push(product);
          } 
        
          else {                                  //si selectedFromCartList EXISTE dans cart[]
            let productIndex = cart.indexOf(selectedFromCartList); // ==> trouve son index dans cart[]
            cart[productIndex].quantity++; // ==> a travers son index, ADD +1 to its .quantity
            cart[productIndex].subtotal = cart[productIndex].quantity * cart[productIndex].price;
          }
        }                
    console.log("cart", cart);
    

}

// Exercise 5
function applyPromotionsCart() {
  
  generateCart()
console.log("cart: ", cart);
  
let hasPromoOil = cart.find((element) => element.id == 1 && element.quantity >= 3);
let hasPromoBakery = cart.find((element) => element.id === 3 && element.quantity >= 2);

  for (let i = 0; i < cart.length; i++) {

    
      if(hasPromoOil){
        let OilIndex = cart.indexOf(hasPromoOil); // ==> trouve son index dans cart[]
        cart[OilIndex].subtotalWithDiscount = cart[OilIndex].quantity * 10;
      }
    
    
      if (hasPromoBakery){
      let reduc = ((5*2)/3).toFixed(2);        
      let bakeryIndex = cart.indexOf(hasPromoBakery); // ==> trouve son index dans cart[]
      cart[bakeryIndex].subtotalWithDiscount = cart[bakeryIndex].quantity * reduc;
    }

      }
  }
/* function percentage2(percent, total) {
  reduc = Number(((percent/ 100) * total).toFixed(2));
return reduc
} */
  /* 
  offer: { id =
    number: 3,
    percent: 20,
  }, 
  offer: {
    number: 10,
    percent: 30,
  },
   */

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  const modalCart = document.getElementById("cart_list");
  modalCart.innerHTML = "";


  applyPromotionsCart();
  let totalCart = 0;

  let tbody_tr = document.querySelector("thead tr");
  
/*   let tTotal = document.createElement("th");
  tTotal.innerHTML = "Total";
  tbody_tr.append(tTotal); */

        for (let i = 0; i < cart.length; i++) {


          let tableRow = document.createElement("tr");
          let itemName = document.createElement("th");
              itemName.innerHTML = cart[i].name;
          let itemPrice = document.createElement("td");
              itemPrice.innerHTML = cart[i].price;
          let itemQuantity = document.createElement("td");
              itemQuantity.innerHTML = cart[i].quantity;
          let itemTotal = document.createElement("td");
              if (!cart[i].subtotalWithDiscount) {
                itemTotal.innerHTML = cart[i].subtotal;
                total = cart[i].subtotal;
              } else {
                itemTotal.innerHTML = (cart[i].subtotalWithDiscount).toFixed(2);
                total = cart[i].subtotalWithDiscount;
      }

      totalCart += total;
      console.log("total_ , totalCart:", total, " ",totalCart.toFixed(2));


  tableRow.appendChild(itemName);
  tableRow.appendChild(itemPrice);
  tableRow.appendChild(itemQuantity);
  tableRow.appendChild(itemTotal);
  modalCart.appendChild(tableRow);

}

const elementPrice = document.getElementById("total_price");
elementPrice.innerHTML = totalCart;//total.toFixed(2);
  
}

// ** Nivell II **

let newCartExo7 = [];
// Exercise 7

function addToCart(id) {

    // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
console.log("cart:", cart);

  productPositionInProducts = products.findIndex(element => element.id == id);
  let selectedProductInCart = cart.find((element) => element.id === id);
  cartIndexOfSelectedProduct = cart.findIndex(e => e.id === products[productPositionInProducts].id);

  for(let i = 0; i < products.length ;i++){
  if (cartIndexOfSelectedProduct < 0){
    products[productPositionInProducts].quantity = 1;
    cart.push(products[productPositionInProducts]);
    break
  } 
  else {
    let productIndex = cart.indexOf(selectedProductInCart);
    cart[productIndex].quantity++; 
    cart[productIndex].subtotal = cart[productIndex].quantity * cart[productIndex].price;
    break
  }
}
  
  
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart

  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
