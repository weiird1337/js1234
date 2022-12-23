var fiat = {
 make: "Fiat",
 // Здесь перечисляются другие свойства (экономим место)
 started: false,
 start: function() {
 this.started = true;
 },
 stop: function() {
 this.started = false;
 },
 drive: function() {
 if (this.started) {
 alert("Zoom zoom!");
 } else {
 alert("You need to start the engine first.");
 }
 }
};
