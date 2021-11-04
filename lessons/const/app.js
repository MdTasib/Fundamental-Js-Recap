/* The const keyword was introduced in ES6 (2015).

Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope. */

// 1
/* let x = 5;
x = 7;
console.log(x);
 */

// 2
/* const x = 5;
x = 6;
console.log(x);
// TypeError: Assignment to constant variable. */

// 3
/* const x;
x = 5;
SyntaxError: Missing initializer in const declaration */

// 4
/* // You can create a constant array:
const cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars);

// You can change an element:
cars[0] = 'Toyota';

// You can add an element:
cars.push('Audi');
console.log(cars);
 */

// 5
/* const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR */

// 6
/* // You can create a const object:
const car = { type: 'Fiat', model: '500', color: 'white' };
console.log(car);

// You can change a property:
car.color = 'red';

// You can add a property:
car.owner = 'Johnson';
console.log(car);
 */

// 7
/* const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR */
