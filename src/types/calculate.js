"use strict";
exports.__esModule = true;
exports.cal = void 0;
// example of function inputs and return been Type properly
function cal(val1, val2) {
    //
    var total = val1 + val2;
    //
    return total;
}
exports.cal = cal;
// this is okay
cal(1, 1);
// this throw TS syntax error
// cal(1,'test');
