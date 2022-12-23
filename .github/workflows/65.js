//substring

var data = "name|phone|address";
var val = data.substring(5, 10);
console.log("Substring is " + val);


//

val = data.substring(5);
console.log("Substring is now " + val);

//split 

var data = "name|phone|address";
var vals = data.split("|");
console.log("Split array is ", vals);
