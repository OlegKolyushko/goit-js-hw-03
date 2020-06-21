const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];
let totalPrice = 0;
const calculateTotalPrice = function(allProdcuts, productName) {
    for(let i = 0; i < products.length; i ++){
      if(productName === products[i]['name']){ 
      totalPrice = products[i]['price'] * products[i]['quantity'];
    }
    }
  return totalPrice;    
  };
console.log(calculateTotalPrice(products, 'Дроид'));