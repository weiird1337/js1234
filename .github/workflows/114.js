var secret = "007";
function getSecret() {
 var secret = "008";
 function getValue() {
 return secret;
 }
 return getValue();
}
getSecret();

function getSecret2() {
 var secret = "008";
 function getValue2() {
 return secret;
 }
 return getValue2;
}
var getValueFun = getSecret2();
getValueFun();
