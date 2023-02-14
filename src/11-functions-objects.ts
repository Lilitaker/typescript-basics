(() => {
  //Example 1
  const login = (data: { email: string; password: string }) => {
    console.log(
      `Your login email is ${data.email} and the password is ${data.password}`
    );
  };

  login({ email: 'test@email.com', password: '85632' });

  //Example 2
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({
    title: 'Product 1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
  });

  addProduct({
    title: 'Product 2',
    createdAt: new Date(1946, 8, 1),
    stock: 100,
    size: 'M',
  });

  console.log(products);
})();
