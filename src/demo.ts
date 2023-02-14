/* (() => { */
async () => {
  const myCart: [] = [];
  const products: [] = [];
  const limit: number = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET',
    });
    const data = await rta.json();
    products.concat(data);
  }

  function getTotal(): number {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      //total += products[i].price; //get error
    }
    return total;
  }

  function addProduct(index: number) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);

  const total = getTotal();
  console.log(total);

  const person = {
    name: 'Nicolas',
    lastName: 'Molina',
  };

  //const rta = person + limit.toString();
  //console.log(rta);
};
/* })(); */
