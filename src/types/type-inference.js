var car = {
    brand: "Ford",
    engine: 1.1,
    run: function () {
        console.log('engine started');
    }
};
//  this will error has the type has been infered to a string.
// car.brand = 90;
// will work as type is === typeof 'string'
car.brand = "BMW";
//
//
//
