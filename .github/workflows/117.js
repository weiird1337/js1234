function multN(n) {
 return function multBy(m) {
 return n*m;
 };
}
var multBy3 = multN(3);
console.log("Multiplying 2: " + multBy3(2));
console.log("Multiplying 3: " + multBy3(3));
