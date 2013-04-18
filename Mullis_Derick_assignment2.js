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
var readyCheck = function (health, numberOfPotions) {
	if ( health === 100 && numberOfPotions >= 5 ) {
		console.log( "Ready check complete." );
		if ( weaponsReady === true ) {
			console.log ( "Our weapons are ready and yearn for battle!" );
		} else {
			console.log ( "We need to condition our weapons before heading out." );	
		};
	} else {
		console.log( "On 2nd thought we better not go out adventuring today." );
	};
	var status = ( "We are at " + health + " health and have " + numberOfPotions + " " + potions + " potions."  );
	return status;
};

var status = readyCheck(100, 4);
console.log(status);



//String Function











