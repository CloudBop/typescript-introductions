// defining and using interfaces
interface AutomobileInterface {
  // make nullable
  gear?: number;
  brand?: string;
  speed?: number;
  changeGear(input: number): void
}

const automobile: AutomobileInterface = {
  gear: 0,
  brand: "BMW",
  speed: 100,
  changeGear: function (gearUpdate) {
    this.gear = gearUpdate
  }
}

// 
// doesn't throw syntax error
function car1(automobile) {
  // eseentially automobile is an any type as not typed in fn arg 
  automobile.gear = "string"
}

function car2(automobile: AutomobileInterface): void {
  // throws error as wrong type!
  // automobile.gear = "string"
  automobile.gear = 1
}
// to avoid the unused, declared twice error.
const arrAny: any[] = [car1, car2, automobile]

class AutomobileClass implements AutomobileInterface {
  // implemenet the interface
  brand: string
  speed: number
  gear: number
  changeGear: any

  speedMethod(speed: number): void {
    console.log('speed is ', speed)
  }
}

const car3 = new AutomobileClass()

car3.speedMethod(100);

var test: number = (50 * 50)
//
// extending an interface 
//
interface Auto2 extends AutomobileInterface {
  // undo nullable in extend
  brand: string
  gear: number
}

const automobile2: Auto2 = {
  gear: 0,
  brand: "BMW",
  changeGear: function (gearUpdate) {
    this.gear = gearUpdate
  }
}

// class AutomobileClass2 implements Auto2 {
//   // implemenet the interface
//   brand: string
//   speed: number
//   gear: number
//   changeGear: any

//   speedMethod(speed: number): void {
//     console.log('speed is ', speed)
//   }
// }

// const car3 = new AutomobileClass()

