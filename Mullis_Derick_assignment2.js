//alert("JavaScript works!");
// Derick Mullis
// April 18, 2013
// Project 2
// This script is for completion of project 2.  Heroes are going monster hunting... or are they?


//Variables
var monster = "Baron Nashor"
var potions = "health"
var amountOfPotions = 5
var weaponsReady = true

//Procedure
var letsGoAdventuring = function(feelingAdventurous) {
	if ( feelingAdventurous === "yes" ) {
		console.log( "We are feeling adventurous, let's check our gear." );
	} else {
		console.log( "Let's check our health and potions before we head out." );
	};
};

// Boolean Function
var readyCheck = function(health, numberOfPotions) {
	if ( health === 100 && numberOfPotions >= 5 ) {
		console.log( "Ready check complete. We should be good to go." )
		if ( weaponsReady === true ) {
			console.log ( "Our weapons are ready and yearn for battle!" );
		} else {
			console.log ( "Well actually we need to condition our weapons before heading out." );
		};
	} else {
		console.log( "We should rest up to 100 health and make sure we have at least " + amountOfPotions+ " " + potions + " potions before we head out." );
	};
		if ( health === 100 && numberOfPotions === 5 ) {
			return (true);
		} else {
			return (false);
		};
};

//String Function
var baronAppears = function(travelDistance, monster) {
	var monsterFight = ( "After leaving town and traveling " + travelDistance + ". We encountered " + monster + "!" );
	return monsterFight;
};

//Number Function
var baronFight = function(baronHP) {
		while (baronHP > 0) {
		
			console.log( monster + "'s health is " + baronHP);
			baronHP = baronHP - 50
		
			if (baronHP > 0) {
				console.log( monster + " has been attacked by our heroes for 50 damage" );
			} else {
				console.log( monster + " has been slain.");
			};
		};
		var BaronLife = baronHP
		return BaronLife		
};

//Array Function
var chests = function(argArray, number) {
	var chestTypes = argArray.length;
	var timedTreasureHunt = number - chestTypes
		argArray.push("Sapphire")
		
	for ( var time = 0; time < timedTreasureHunt; time ++) {
	var timeRemain = (timedTreasureHunt - time);
		console.log("Look around for treasure, " + timeRemain + " minutes remain before we have to depart.");	
	};
	for ( var i= 0;  i <= chestTypes; i++) {
		console.log("Huzzah! Look at all the loot! " + argArray[i] + " chests for everyone!");
	};
	var updatedArray = argArray
	return updatedArray
};




//Main Code
letsGoAdventuring("yes")
var status = readyCheck(100, 5);
var itsTime = baronAppears("a fortnight", "Baron Nashor");
var baronLife = baronFight(500);
var updatedChests = chests (["Gold", "Diamond", "Emerald"], 10);  


//Returned Values
console.log( " " );
console.log("Return Values:");
//Return for Boolean
	console.log(status);
//Return for String
	console.log(itsTime);
//Return for Number
	console.log(baronLife);
//Return for Array
	console.log(updatedChests);