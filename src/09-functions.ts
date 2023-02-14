(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  //Example 1 - Regular function
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const product1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log(product1);
  console.log(product1.size); //XL

  //Example 2 - Arrow Function
  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const product2 = createProductToJsonV2('P2', new Date(), 100);
  console.log(product2);
  console.log(product2.size); //Undefined
})();
