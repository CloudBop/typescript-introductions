// example of function inputs and return been Type properly
export function cal(val1: number, val2: number): number {
  //
  let total: number = val1 + val2;
  //
  return total;
}
// this is okay
cal(1, 1);

// this throw TS syntax error
// cal(1,'test');