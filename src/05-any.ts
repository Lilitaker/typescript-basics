(() => {
  /* Any permite cambiar el valor de la variable por cualquier tipo */
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log('rta:', rta);

  myDynamicVar = 1212;
  const rta1 = (<number>myDynamicVar).toFixed();
  console.log('rta1:', rta1);
})();
