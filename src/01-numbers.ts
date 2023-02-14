(() => {
  /* Forma inferida (tipo)*/
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice:', productPrice);

  /* Forma explícita */
  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('customerAge:', customerAge);

  /* NaN */
  let discount = parseInt('numero');
  console.log('discount:', discount);

  if (discount <= 200) {
    console.log('discount: Apply');
  } else {
    console.log('discount: Not apply');
  }

  /* Hexadecimal - se definen colocando "0x" al inicio del valor */
  let hex = 0xfff;
  console.log('hex:', hex);

  /* Binario - se definen colocando "0b" al inicio del valor */
  let bin = 0b1010; //10
  console.log('bin:', bin);
})();
