//alert("JavaScript works!");
// Derick Mullis
// April 18, 2013
// Project 2
// This script is for completion of project 2.  Heroes are going monster hunting... or are they?


//Variables
var monster = "Baron Nashor"
var potions = "health"
var heroHealthPoints = 100
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
	var update = ( "All hero's health at " + heroHealthPoints + " and we have " + amountOfPotions + " " + potions + " potions we are ready to depart."  );
	return update;
};

var status = readyCheck(100, 5);
console.log(status);



//String Function
var baronAppears = function(travelDistance, monster) {
	var monsterFight = ( "After leaving town and traveling " + travelDistance + ". We encountered " + monster + "!" );
	return monsterFight;
};

var itsTime = baronAppears("a fortnight", "Baron Nashor");
console.log(itsTime);



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
};

baronFight(500);

//Array Function


var chests = function(argArray, number) {
	var chestsLength = argArray.length;
	for ( var i= 0;  i < chestsLength; i++); {
		console.log("Is this working?");
		console.log(argArray);
	} else {
		console.log("You did it!!)
	
	}

};

chests(["Gold", "Diamond", "Emerald"], 5)  



//var chests = ["Gold", "Diamond", "Emerald"],
//	numberOfChests = [ 2, 1, 1];


//var openAllChests = function(chests, numberOfChests) {
//		console.log("I found " + numberOfChests + " of " + chests);
		
//		for (var chestNumber = 0; chestNumber < numberOfChests; chestnumber++) {
//			chestsRemain = numberOfChests - chestNumber;
//			console.log(chestNumber + "Open!" + chestsRemain + ".");
//		}
//};




//var loot = function(array, howMany) {
//	for (var i = 0; i < chests.length; i++) {
//		console.log("Then we saw" + chests[i]);
		
//		if (i < howMany) {
//			console.log("Found another" + chest + "!");
//		} else {
//			console.log("Looks like there is no more loot");
//		};
//	};
//};

//loot = ([chests], 5);







//var loot = function([chests], number1)  {
//	for (var i = 0; i < chests.length; i++){
//		console.log( "The heroes are looting " + chests + " chest." );
//	};

//};






//var spoils =([chests], 5)






//var spoils = function(chests, amount){
//	for (var i = 0; i >= amount; i--){
//		console.log( "" + amount + " of " + chests);
//	};

//};

//spoils(chests, 5)




//spoils(chests, 5)



//var spoils = function(howMuch, total) {

//	for (var i = 0; i = total; i--)
//			console.log("We have discovered " + total + " gold!"
			
//			if (
//};

//for (var i = 0; i < heroes.length; i++) {
//	console.log( "The heroes " + heroes[i] + " will now split the gold " + monster + " was hoarding.");
//}; 







