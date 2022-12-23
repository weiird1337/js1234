function printPassenger(passenger) {
 var message = passenger.name;
 if (passenger.paid === true) {
 message = message + " has paid";
 } else {
 message = message + " has not paid";
 }
 console.log(message);
 return false;
}
processPassengers(passengers, printPassenger);
