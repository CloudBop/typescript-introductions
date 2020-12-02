//
function displayData<TYPE>(someData: TYPE) {
  let someResult: TYPE;

  someResult = someData;

  return someResult
}
// an example of a function where the arg is of TYPE
// similar to any type, but once declared is of generic type
console.log('generics', displayData(656453453));

