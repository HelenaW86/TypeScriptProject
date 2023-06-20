"use strict";
var _a;
let numberArray = [1, 2, 3];
let differentValues = [3, "år"];
console.log(differentValues);
;
let mySize = 3 /* Size.Large */;
console.log(mySize);
//Functions   utan return = void
const calculateTax = (income, year = 2022) => {
    return 1;
};
// objects + readOnly = kan inte skrivas om
let employee = { id: 1, name: "no name", retire: (date) => { console.log(date); } };
employee.name = "Moch";
console.log(employee);
let employee1 = {
    id: 1,
    name: "Ola",
    retire: (date) => { console.log(date); }
};
let kgToLbs = (weight) => {
    //narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
};
kgToLbs(10);
kgToLbs("10kg");
// intersection
let weight;
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quality = 100;
// null
let greet = (name) => {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hola!");
    }
};
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthDay: new Date() };
}
let customer = getCustomer(0);
let customer2 = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthDay, (_a = customer2 === null || customer2 === void 0 ? void 0 : customer2.birthDay) === null || _a === void 0 ? void 0 : _a.getFullYear());