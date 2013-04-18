//alert("JavaScript works!");
// Derick Mullis
// April 18, 2013
// Project 2
// This script is for completion of project 2.  Heroes are going monster hunting... or are they?


//Variables
var heroes = ["TehKuv", "SquishyDingo", "Vaus"]
var monster = "Baron Nashor"
var potions = "health"
var heroHealthPoints = 100
var monsterHealthPoints = 500
var amountOfPotions = 5
var heroDamage = 50
var weaponsReady = true


//Procedure
var letsGoAdventuring = function(feelingAdventurous) {
	if ( feelingAdventurous === "yes" ) {
		console.log( "We are feeling adventurous, let's check our gear." );
	} else {
		console.log( "Let's check our health and potions before we head out." );
	};
};

letsGoAdventuring("yes")


// Boolean Function
var readyCheck = function(health, numberOfPotions) {
	if ( health === 100 && numberOfPotions >= 5 ) {
		console.log( "Ready check complete. We should be good to go." );
		if ( weaponsReady === true ) {
			console.log ( "Our weapons are ready and yearn for battle!" );
		} else {
			console.log ( "Well actually we need to condition our weapons before heading out." );	
		};
	} else {
		console.log( "We should rest up to 100 health and make sure we have at least 5 " + potions + " potions before we head out." );
	};
	var update = ( "Our current status and inventory is " + health + " health and we have " + numberOfPotions + " " + potions + " potions."  );
	return update;
};

var status = readyCheck(100, 5);
console.log(status);


//String Function
var baronAppears = function(travelDistance, monster) {
	var monsterFight = ( "After traveling " + travelDistance + ". We encountered " + monster + "!" );
	return monsterFight;
};

var itsTime = baronAppears("a fortnight", "Baron Nashor");
console.log(itsTime);



