function Car(make, model, year, color, passengers, convertible, mileage) {
 this.make = make;
 this.model = model;
 this.year = year;
 this.color = color;
 this.passengers = passengers;
 this.convertible = convertible;
 this.mileage = mileage;
 this.started = false;
 this.start = function() {
 this.started = true;
 };
 this.stop = function() {
 this.started = false;
 };
 this.drive = function() {
 if (this.started) {
 alert("Zoom zoom!");
 } else {
 alert("You need to start the engine first.");
 }
 };
}
