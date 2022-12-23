var limoParams = {make: "Webville Motors",
 model: "limo",
 year: 1983,
 color: "black",
 passengers: 12,
 convertible: true,
 mileage: 21120};
var limo = new Car(limoParams);
var limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);
console.log(limo.make + " " + limo.model + " is a " + typeof limo);
console.log(limoDog.name + " is a " + typeof limoDog);
