function validate(phoneNumber) {
 if (phoneNumber.length > 8 ||
 phoneNumber.length < 7) {
 return false;
 }
 for (var i = 0; i < phoneNumber.length; i++) {
 if (i === 3) {
 if (phoneNumber.length === 8 &&
phoneNumber.charAt(i) !== '-') {
 return false;
 } else if (phoneNumber.length === 7 &&
 isNaN(phoneNumber.charAt(i))) {
 return false;
 }
 } else if (isNaN(phoneNumber.charAt(i))) {
 return false;
 }
 }
 return true;
}


//

function validate(phoneNumber) {
 if (phoneNumber.length > 8 ||
 phoneNumber.length < 7) {
 return false;
 }
 var first = phoneNumber.substring(0,3);
 var second = phoneNumber.substring(phoneNumber.length - 4);
 if (isNaN(first) || isNaN(second)) {
 return false;
 }
 if (phoneNumber.length === 8) {
 return (phoneNumber.charAt(3) === "-");
 }
 return true;
}
