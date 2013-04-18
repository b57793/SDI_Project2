//alert("JavaScript works!");

var heroes = ["TehKuv", "SquishyDingo", "Vaus"]
var monster = "Baron Nashor"
var potions = "health"
var heroHealthPoints = 100
var monsterHealthPoints = 500
var numberOfPotions = 5


//Procedure
var letsGoAdventuring = function(feelingAdventurous) {
	if ( feelingAdventurous === "yes" ) {
		console.log( "We are feeling adventurous, are there any monsters to fight?" );
	} else {
		console.log( "Let's check our health and potions before we head out." );
	};
};

letsGoAdventuring("yes")



// Boolean Function
var readyCheck = function (health, numberOfPotions) {
	if ( health === 100 && numberOfPotions === 5 ) {
		console.log( "Ready check complete let's go find a monster!" );
	} else {
		console.log( "On 2nd thought we better not go out adventuring today." );
	};
	var status = ( "We are at " + health + " health and have " + numberOfPotions + " " + potions + " potions."  );
	return status;
};

var status = readyCheck(100, 5);
console.log(status);



//String Function











