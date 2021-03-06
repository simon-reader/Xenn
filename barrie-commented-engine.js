//this creates a character template object which holds generic player information
var characterTemplate = {
	name: "",
	hand: [],
	weapon: 0,
	armour: 0,
	inventory: [],
	stats: {
		str: 0,
		dex: 0,
		agi: 0,
		wis: 0,
		lck: 0,
	}
};

//create a placeholder global variable to hold the "current player"
var player = null;

//this block of code runs as soon as the page is ready to go
$(document).ready(function() {
	
	//set the player variable to be a copy of the character template object
	player = characterTemplate;
	
	//the room cards
	var roomCards = [
		{
			roomType: "Dark Dungeon Room",
			text: "The room is damp dark and smells of decay.",
			someEffect: 30,
			treasureChance: 20,
			randomMonster: 45
		},
		{
			roomType: "Long well lit hallway",
			text: "The hallway is barely long enough to spread your arms out to your sides",
			someEffect: 0,
			treasureChance: 20,
			randonMonster: 45
		},
		{
			roomType: "Dark Hallway",
			text: "This hallway is so dark you cannot see your hand in front of your face",
			someEffect: 40,
			treasureChance: 20,
			randomMonster: 45
		},
	];
	
	//The monster cards
	var monsterCards = [
		{
			monsterType: "Group of Snotlings",
			text: "These small green creatures bare, sharp teeth as they look at you",
			attackDmg: "d4",
			armourRating: 0,
			specialAttack: 20
		},
		{
			monsterType: "goblin scout",
			text: "A goblin spots you",
			attackDmg: "d4",
			armourRating: 1,
			specialAttack: 20
		},
		{
			monsterType: "Reanimated corpse",
			text: "A corpse of a fallen hero reanimates and moves towards you",
			attackDmg: "d4",
			armourRating: 1,
			specialAttack: 20
		},
	];
		
	// click function to fade out intro button&title
	$("#startGame").on("click", function(e) {
		e.preventDefault();
		$("#welcome").fadeOut(500);
		
		//wrapping code in setTimeout will delay the execution by the number at the end
		setTimeout(function() {
			$("#classSelect").fadeIn(500);
		}, 500);
	});
	
	
	//click function to fade out player classes and start game
	$(".playerClass").on("click", function(e) {
		e.preventDefault();
		
		//prompt for player's name
		var myName = prompt("What is your name hero?")
		
		// added new error variable, zero is no error
		var error = 0;
		
		//setting player name
		player.name = myName;
		
		//check if the player.name does NOT exist
		if (!player.name) {
			
			//does not exist, set error to 1
			error = 1;
		} else {
			
			//player.name exists, check the length
			if (player.name.length < 1) {
				
				//length is less than 1 character, set error to 1
				error = 1;
			}
		}

		
		if ($(this).hasClass("warrior")) {
			//warrior stats here
			player.stats.str = 7;
			player.stats.dex = 5;
			player.stats.agi = 4;
			player.stats.wis = 2;
			player.stats.lck = 5;
		} else if ($(this).hasClass("thief")) {
			//thief stats here
			player.stats.str = 4;
			player.stats.dex = 6;
			player.stats.agi = 6;
			player.stats.wis = 3;
			player.stats.lck = 5;
		} else if ($(this).hasClass("rogue")) {
			//rogue stats here
			player.stats.str = 5;
			player.stats.dex = 6;
			player.stats.agi = 5;
			player.stats.wis = 4;
			player.stats.lck = 5;
		}
		
		//we check if error is zero
		//if the error IS zero, then we continue
		//otherwise we alert() - "you didn't enter a name"
		if (error == 0) {
			
			//fade out the player class selection
			$("#classSelect").fadeOut(500);
			
			//set the title of the clicked card to be the player name
			$(this).children(".title").html(player.name);
		
			//clone this card and add it to #theGame element
			$(this).clone().appendTo("#theGame");
		
			//on the new cloned card, remove the playerClass and add a selectedPlayer class
			$("#theGame .playerClass").removeClass("playerClass").addClass("selectedPlayer");
			
			//wait half a second then fade the game in
			setTimeout(function() {
				$("#theGame").fadeIn(500);
			}, 500);
			
		} else {
			
			//the error variable was NOT "1"
			alert("You didn't enter a name...");
		}
	});
	
	//the rolldice click function
	$("#rollDiceButton").on("click", function(e) {
		e.preventDefault();
		var output0 = createRandom("d4");
		$(".dice0").html("<img src='images/dice" + output0 + ".png' />")
	});
	
	//the random creation function
	var rollDice = function(min, max) {
		var randomNumber = Math.floor(Math.random() * max) + min;
		return randomNumber;
	};
	
	//the actual d4,d6,etc dice roller
	var createRandom = function(diceType) {
		if (diceType == "d4") {
			return rollDice(1, 4);
		};
	};
		
	//the healthbar animation
	var runAnimation = function() {
		
		$("#healthBar .inner").animate({
			width: "0%"
		}, 1000, function() {
			$(this).animate({
				width: "100%"
			}, 1000);
		});
		
	};

	//run the animation
	runAnimation();
	
});