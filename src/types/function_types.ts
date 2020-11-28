function stringFunction(): string {

  console.log('Hello, I\'m a string')

  return 'Hello, I\'m a string'
}

function stringFunction2(): string {

  console.log('Hello, I\'m a string')

  return 'Hello, I\'m a string'
}

function cal(val1: number, val2: number): number {
  //
  let total: number = val1 + val2;
  //
  return total;
}

cal(2, 2);
// let universe = stringFunction
let universe = cal;
universe(2, 2)

// set to func that returns string
let uni2: () => string;

uni2 = stringFunction;
uni2 = stringFunction2
// causes syntax error
// uni2 = cal;



