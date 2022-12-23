var fiat = {
 make: "Fiat",
 model: "500",
 // Здесь идут другие свойства...
 started: false,
 fuel: 0,
 start: function() {
 this.started = true;
 },
 stop: function() {
 this.started = false;
 },
 drive: function() {
 if (this.started) {
 alert(this.make + " " + this.model + " goes zoom zoom!");
 } else {
 alert("You need to start the engine first.");
 }
 },
 addFuel: function(amount) {
 this.fuel = this.fuel + amount;
 }
};
