function add(a,b) {
  console.log("Running Add", a, b);
  return a + b;
}

function multiply(a,b) {
  console.log("Multiplying", a, b);
  return a * b;
}

function doMath(a,b) {

  console.log("Mathing ....", a, b);

  const sum  =  add(a,b);
  console.log(`Sum is ${sum}`);

  const product = multiply(a,b);
  console.log(`Product is ${product}`);

  for( let i=1; i<=10; i++) {
    let num = multiply(1, 5);
    console.log(num);
  }

}

doMath(2, 4);
