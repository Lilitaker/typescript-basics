(() => {
  //Function with a defined type return (old way)
  /* const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  }; */

  //Function with a defined type return (modern way)
  const calcTotal = (prices: number[]): string =>
    prices.reduce((sum, price) => sum + price).toString();

  const rta = calcTotal([5, 5, 5, 5]);
  console.log(rta); //20 as string

  //Void --> No function return
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  };

  printTotal([5, 5, 5, 5, 5, 5]);

  const newClousure = (a: number): ((b: number, c: string) => number) => {
    return (b, c) => {
      return 5;
    };
  };

  newClousure(2);
})();
