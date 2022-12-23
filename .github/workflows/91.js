var passengers = [ { name: "Jane Doloop", paid: true, ticket: "coach" },
 { name: "Dr. Evel", paid: true, ticket: "firstclass" },
 { name: "Sue Property", paid: false, ticket: "firstclass" },
 { name: "John Funcall", paid: true, ticket: "coach" } ];

function serveCustomer(passenger) {
 var getDrinkOrderFunction = createDrinkOrder(passenger);
 getDrinkOrderFunction();

 getDrinkOrderFunction();
 getDrinkOrderFunction();

 getDrinkOrderFunction();

}

function createDrinkOrder(passenger) {
 var orderFunction;
 if (passenger.ticket === "firstclass") {
 orderFunction = function() {
 alert("Would you like a cocktail or wine?");
 };
 } else {
 orderFunction = function() {
 alert("Your choice is cola or water.");
 };
 }
 return orderFunction;
}

function servePassengers(passengers) {
 for (var i = 0; i < passengers.length; i++) {
 serveCustomer(passengers[i]);
 }
}

