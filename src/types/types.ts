const typeScriptTypeTest: any = () => {
  // cast these variables to these types
  let car1: string;
  let engine: number;
  let isFast: boolean;

  // ok
  engine = 3
  isFast = false
  // errors
  // isFast="some "
  // isFast=10


  let something: any;
  // - any type
  something = [];
  something = {}
  something = 'string';
  something = false

  // arrays 

  // arrays of strings
  let superheros: string[] = ['Batman', 'Superman', 'Spiderman']
  superheros[3] = "Wolverine"
  // errors
  // superheros[4]=007

  let items: any = ['Batman', 'Superman', 'Spiderman']
  items[3] = ["Wolverine"]

  let items2: any[] = ['Batman', 1000, false, {}]
  items2[4] = []

  let x = 0;
}

export default typeScriptTypeTest