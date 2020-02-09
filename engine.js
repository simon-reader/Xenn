var map = [
	[0,0,2],
	[1,2,2],
	[0,2,0]
];

var characterTemplate = {
	name: "",
	hand: [],
	lives: 3,
	weapon: 0,
	armour: 0,
	stats: {
		str: 0,
		dex: 0,
		agi: 0,
		wis: 0,
		lck: 0,
	},
	position: {
		x: 0,
		y: 0
	},
};

var player = null;

$(document).ready(function() {
	
	player = characterTemplate;
	
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
	
	$(".playerClass").on("click", function(e) {
		e.preventDefault();
		
		var myName = prompt("What is your name hero?")
		// added new error variable, zero is no error
		var error = 0;
		//setting player name
		player.name = myName;
		//check if the player.name length is under one characterSet
		//if it IS under one character, then set "error to "1"
		if (!player.name) {
			error = 1;
		} else {
			if (player.name.length < 1) {
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
			
			$("#classSelect").fadeOut(500);
			
			$(this).children(".title").html(player.name);
		
			$(this).clone().appendTo("#theGame");
		
			$("#theGame .playerClass").removeClass("playerClass").addClass("selectedPlayer");
			
			setTimeout(function() {
				$("#theGame").fadeIn(500);
			}, 500);
		} else {
			alert("You didn't enter a name...");
		}
	});
	
		$("#rollDiceButton").on("click", function(e) {
			e.preventDefault();
			
			var output0 = createRandom("d4");
			$(".dice0").html("<img src='images/dice" + output0 + ".png' />")
			
			var output2 = createRandom("d4");
			$(".dice2").html("<img src='images/dice" + output2 + ".png' />")
			
			var output1 = rollCombatDice();
			$(".dice1").html(output1);
			
			var output3 = rollCombatDice();
			$(".dice3").html(output3);
			
		});
		
		var rollCombatDice = function() {
			var sides = "🛡🛡💢💢   ";
			var whichSide = Math.floor(Math.random() * sides.length);
			return sides[whichSide];
			
		};
	
	var rollDice = function(min, max) {
		var randomNumber = Math.floor(Math.random() * max) + min;
		return randomNumber;
	};
	
	var createRandom = function(diceType) {
		if (diceType == "d4") {
			return rollDice(1, 4);
		};
	};
		
	var runAnimation = function() {
		
		$("#healthBar .inner").animate({
			width: "0%"
		}, 1000, function() {
			$(this).animate({
				width: "100%"
			}, 1000);
		});
		
	};
	
	//merp
	
	runAnimation();
	
});