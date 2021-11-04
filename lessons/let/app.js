/* The let keyword was introduced in ES6 (2015).

Variables defined with let cannot be Redeclared.

Variables defined with let must be Declared before use.

Variables defined with let have Block Scope. */

// 1
/* 
let x = 'Mohammad Tasib';

let x = 10;

// SyntaxError: 'x' has already been declared */

// 2
/* let x = 'Global scope';
{
	let x = 'Block scope';
	console.log(x);
}
console.log(x);
 */

// 3
/* var x = 'Global scope';
{
	var x = 'Block scope';
	console.log(x);
}
console.log(x);
 */

// 4
/* 
let x = 2;
var x = 3;
// SyntaxError: Identifier 'x' has already been declared */
