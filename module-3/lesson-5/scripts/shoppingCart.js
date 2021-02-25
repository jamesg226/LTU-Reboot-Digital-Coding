let objShoppingCart = [ //decare variable shopping cart
  {
    name:"loaf of bread",
    type:"food",
    quantity:1,
    price:.85
  },//curly brackets and comma split each object
  { 
    name:"multipack beans",
    type:"food",
    quantity:1,
    price:1
},
{ 
  name:"mushrooms",
  type:"food",
  quantity:10,
  price:.1
},
{
  name:"can of beer",
  type:"alcohol",
  quantity:4,
  price:1.1
},
{
  name:"prosecco",
  type:"alcohol",
  quantity:1,
  price:8.99
},
{
  name:"steak",
  type:"food",
  quantity:2,
  price:3.99
},
{
  name:"blue cheese",
  type:"food",
  quantity:1,
  price:2.99
},
{
  name:"candles",
  type:"home",
  quantity:3,
  price:1.99
},
{ 
  name:"cheesecake",
  type:"food",
  quantity:1,
  price:4.99
},
{ 
  name:"onions",
  type:"food",
  quantity:3,
  price:.4
}];


function getTotalPrice(arrShoppingCart=[],objCoupon={}){ //name function
  var total = 0; //set starting total of cart before the loop starts
  let itemPrice = 0; //set item price to start at 0 - also ensures it isnt redeclared in the loop
  
  
  for(var counter=0;counter<arrShoppingCart.length;counter++){ 
    //loop through items in array- set value of counter, start at 1, run for array cart length keep running until more than the length of the array, then add one each time to counter
    //loops through each item in the shopping cart array
    //select the current cart item using the counter as the array key
    var objItem = arrShoppingCart[counter];
    //console.log(objItem);
    //multiply the cost of the quantity of the item by the price of the item
    itemPrice = parseFloat(objItem.quantity) * parseFloat(objItem.price);
    if(objCoupon && objCoupon.type == 'percent'){ //if coupon exists(passed as an argument) and is of type percent, run this code
      if(objCoupon.category == objItem.type || objCoupon.category == 'all'){ //if object category the same as type or coupon category is all, run this code
        itemPrice = (itemPrice/100) * (100 - objCoupon.value); //calculate new value using percentage, find 1 percent than take away coupon value from 100 to calc percentage decrease
      }
    }

    //console.log(itemPrice);
    total = total + itemPrice;    //generate new total by adding recent item price from for loop (old total + current item price)
  }
  if(objCoupon && objCoupon.type == 'total'){ //if coupon exists/passed through AND is of type total, run this code
    total = total - objCoupon.value; //take coupon value off total
  }
  return total.toFixed(2); //return total price of the cart with discount applied (where applicable) and round to 2 decimal places
}
let objCoupon = { //pass through object coupon as a second item
  name:'200FF',
  value:20,
  category:'food',
  type:'percent',
};

let cartTotal = getTotalPrice(objShoppingCart,objCoupon); //define cart total variable
console.log(cartTotal);