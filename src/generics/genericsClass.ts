
// types are defined on instance
class objectGenericsClass<TYPE1, TYPE2> {

  constructor(public value1: TYPE1, public value2: TYPE2) {

  }
}
// both have different tupes set as fn args
let newInstance = new objectGenericsClass<string, number>("Test", 100);
let newInstance1 = new objectGenericsClass<number, string>(2, 'string');

// array of nums
let arry1: number[] = [1, 2, 3, 4, 5];
// generic arrays of umbers
let arry2: Array<number> = [1, 2, 3, 4, 5];
let arry3: Array<string> = ['1', '2', '3'];


//
// constrain class constructor args
//
// types are defined on instance
class constrainGenericsClass<TYPE1, TYPE2 extends string> {

  constructor(public value1: TYPE1, public value2: TYPE2) {

  }
}
// meets the constraints
let b = new constrainGenericsClass<number, string>(2, 'string')
// ... fails to meet the constrains as TYPE2 is a string
// let a = new constrainGenericsClass<string, number>("Test", 100);