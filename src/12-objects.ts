(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: 'Product 1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
  });

  products.push({
    title: 'Product 2',
    createdAt: new Date(2022, 4, 12),
    stock: 52,
  });

  console.log(products);
})();
