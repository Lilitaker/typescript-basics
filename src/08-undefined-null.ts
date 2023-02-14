(() => {
  let myNumber: number;
  let myString: string;
  let myNull = null; //type any
  let myUndefined = undefined; //type any

  //Cuando un componente dinámico se está cargando puede ser nulo y luego ser del tipo que le asignemos
  let myNumberTwo: number | null = null;
  myNumberTwo = 12;

  let myStringTwo: string | undefined = undefined;
  myStringTwo = 'Hello';

  //Using if/else
  function hello(name: string | null) {
    let hello: string = 'Hello ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  hello('Nicolas');
  hello(null);

  function hello2(name: string | null) {
    let hello: string = 'Hello ';
    //Refactor the if block using optional chaining
    hello += name?.toLowerCase() || 'no one';
    console.log(hello);
  }

  hello2('Laura');
  hello2(null);
})();
