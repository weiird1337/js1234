function ShowDog(name, breed, weight, handler) {
 this.name = name;
 this.breed = breed;
 this.weight = weight;
 this.handler = handler;
}
ShowDog.prototype = new Dog();
Showdog.prototype.league = "Webville";
ShowDog.prototype.stack = function() {
console.log("Stack");
};
ShowDog.prototype.bait = function() {
console.log("Bait");
};
ShowDog.prototype.gait = function(kind) {
console.log(kind + "ing");
};
ShowDog.prototype.groom = function() {
console.log("Groom");
};
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");


scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);
