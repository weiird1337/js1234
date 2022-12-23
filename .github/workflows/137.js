var oddNumbers = new Array(3);
oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;


oddNumbers.reverse();
var aString = oddNumbers.join(" - ");
var areAllOdd = oddNumbers.every(function(x) {
 return ((x % 2) !== 0);
});
