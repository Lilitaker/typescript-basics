(() => {
  let userId: string | number;
  userId = 10;
  userId = '10';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string: ${myText.toLowerCase()}`);
    } else {
      console.log(`string: ${myText.toFixed(1)}`);
    }
  }
  greeting('Hola'); //hola
  greeting(12.121212121); //12.1

  function helloUser(id: string | number) {
    console.log(`Hola usuario con el número de id ${id}`);
  }
  helloUser('AA1235'); //Hola usuario con el número de id AA1235
  helloUser(1235); //Hola usuario con el número de id 1235
})();
