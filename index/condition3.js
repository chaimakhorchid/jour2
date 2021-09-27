var limit = 50
var score = 64
var password = "azerty"

if (score >= limit &&  password.length > 5) {
	console.log("everything is good");
}
else if(score >= limit || password.length > 5) 
	console.log("something is good");


else 
{console.log("nothing is good")}
