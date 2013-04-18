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

// Boolean Function
var readyCheck = function (health, potions) {
	if ( health === 100 && potions === 5 ) {
		console.log( "Ready check complete let's go find a monster to fight!" );
	} else {
		console.log( "On 2nd thought we better not go out adventuring today." );
	};
	noAdventure = ( health <= 99 || potions <= 4 );
	return noAdventure;
};

//String Function











letsGoAdventuring("yes")
readyCheck(100, 5);
