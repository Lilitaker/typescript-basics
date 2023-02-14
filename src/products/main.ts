/* Utilizar nuestro programa con programación modular */

import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'Product 1',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
});

addProduct({
  title: 'Product 2',
  createdAt: new Date(1999, 10, 11),
  stock: 125,
});

const total = calcStock();

console.log(products);
console.log(total); //137
