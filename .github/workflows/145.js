Dog.prototype.sitting = false;
Dog.prototype.sit = function() {
 if (this.sitting) {
 console.log(this.name + " is already sitting");
 } else {
 this.sitting = true;
 console.log(this.name + " is now sitting");
 }
};
