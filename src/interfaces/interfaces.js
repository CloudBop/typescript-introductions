var automobile = {
    gear: 0,
    brand: "BMW",
    speed: 100,
    changeGear: function (gearUpdate) {
        this.gear = gearUpdate;
    }
};
// 
// doesn't throw syntax error
function car1(automobile) {
    // eseentially automobile is an any type as not typed in fn arg 
    automobile.gear = "string";
}
function car2(automobile) {
    // throws error as wrong type!
    // automobile.gear = "string"
    automobile.gear = 1;
}
// to avoid the unused, declared twice error.
var arrAny = [car1, car2, automobile];
var AutomobileClass = /** @class */ (function () {
    function AutomobileClass() {
    }
    AutomobileClass.prototype.speedMethod = function (speed) {
        console.log('speed is ', speed);
    };
    return AutomobileClass;
}());
var car3 = new AutomobileClass();
car3.speedMethod(100);
var test = (50 * 50);
var automobile2 = {
    gear: 0,
    brand: "BMW",
    changeGear: function (gearUpdate) {
        this.gear = gearUpdate;
    }
};
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
