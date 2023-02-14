(() => {
  /* Forma inferida */
  let isEnable = true;
  console.log('isEnable:', isEnable);
  isEnable = false;
  console.log('isEnable:', isEnable);

  /* Forma explícita */
  let isNew: boolean = false;
  console.log('isNew:', isNew);

  const random = Math.random();
  console.log('random:', random);
  isNew = random >= 0.5;
  console.log('isNew:', isNew);
})();
