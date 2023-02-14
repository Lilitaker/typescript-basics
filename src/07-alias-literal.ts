(() => {
  //Alias

  /* Crear un tipo */
  type UserID = string | number | boolean;
  let userId: UserID;

  //Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'L';
  shirtSize = 'M';
  shirtSize = 'S';
  shirtSize = 'XL';

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string: ${userId.toLowerCase()}`);
      console.log(`size: ${size}`);
    }
  }

  greeting(123, 'M');
  greeting('N123', 'M');
})();
