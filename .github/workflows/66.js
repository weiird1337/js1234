function validate(phoneNumber) {
 if (phoneNumber.length !== 8) {
 return false;
 }
 var first = phoneNumber.substring(0,3);
 var second = phoneNumber.substring(4);
 if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) {
 return false;
 }
 return true;
}


//

function validate(phoneNumber) {
 if (phoneNumber.length !== 8) {
 return false;
 }
 for (var i = 0; i < phoneNumber.length; i++) {
 if (i === 3) {
 if (phoneNumber.charAt(i) !== '-') {
 return false;
 }
 } else if (isNaN(phoneNumber.charAt(i))) {
 return false;
 }
 }
 return true;
}
