(() => {
  // Forma inferida
  const prices = [1, 2, 2, 1, 1, 212, 'hola', true];
  prices.push(21);
  console.log('prices:', prices);

  let numbers = [23, 7, 34, 6, 19];
  let mult = numbers.map((item) => item * 2);
  console.log('mult:', mult);

  /* Forma explícita */
  let mixed: (number | string | boolean)[] = ['hola', true];
  mixed.push(12);
  console.log('mixed:', mixed);
})();
