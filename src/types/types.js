"use strict";
exports.__esModule = true;
var typeScriptTypeTest = function () {
    // cast these variables to these types
    var car1;
    var engine;
    var isFast;
    // ok
    engine = 3;
    isFast = false;
    // errors
    // isFast="some "
    // isFast=10
    var something;
    // - any type
    something = [];
    something = {};
    something = 'string';
    something = false;
    // arrays 
    // arrays of strings
    var superheros = ['Batman', 'Superman', 'Spiderman'];
    superheros[3] = "Wolverine";
    // errors
    // superheros[4]=007
    var items = ['Batman', 'Superman', 'Spiderman'];
    items[3] = ["Wolverine"];
    var items2 = ['Batman', 1000, false, {}];
    items2[4] = [];
    var x = 0;
};
exports["default"] = typeScriptTypeTest;
