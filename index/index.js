var integer = 102
var float = 13.9
console.log(integer)


var basic = 34
var stringifield = basic
stringifield = stringifield.toString()
console.log(stringifield)


var num = 1.5
Math.round(1.5)
var rounded = 1.5
console.log(rounded)

var test = 12
var bis = 5
console.log(test+bis)
console.log(test-bis)
console.log(test*bis)
console.log(test/bis)
console.log(test**bis)
console.log(test%bis)


var test = 143
var bis = 219

console.log(test<bis)
console.log(test>bis)
console.log(test<=bis)
console.log(test>=bis)
console.log(test==bis)
console.log(test===bis)
console.log(test!=bis)
console.log(test!==bis)


var limit = 50
var score = 64

if(score>=limit){
console.log("ok!Good")}
else{
    console.log("oh!Noooooo...")
}

var password = "azerty"
if(password.length > 5){
    console.log("The password is secure")
}


if (score >= limit &&  password.length > 5) {
	console.log("everything is good");
}
else if(score >= limit || password.length > 5) 
	console.log("something is good");


else 
{console.log("nothing is good")}


var month = "January";

switch (month) {
	case "January": 
		console.log("winter");
		break;
	case "june": 
		console.log("spring");
		break;
	case "juillet": 
		console.log("summer");
		break;
	default: 
		console.log("fall");
}
