(() => {
  // Forma inferida
  let productTitle = 'My amazing product';
  productTitle = 'My incredible product';
  console.log('productTitle:', productTitle);

  let price = 100;
  let isNew = true;

  const summary = `
    title: ${productTitle}
    price: ${price}
    isNew: ${isNew}
  `;

  console.log(summary);
})();
