function checkPaid(passengers) {
 for (var i = 0; i < passengers.length; i++) {
 if (!passengers[i].paid) {
 return false;
 }
 }
 return true;
}

function checkNoFly(passengers) {
 for (var i = 0; i < passengers.length; i++) {
 if (onNoFlyList(passengers[i].name)) {
 return false;
 }
 }
 return true;
}

function printPassengers(passengers) {
 for (var i = 0; i < passengers.length; i++) {
 console.log(passengers[i].name);
 return false;
 }
 return true;
}
