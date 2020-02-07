$(document).ready(function() {
	
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
			$("#theGame").fadeIn(500);
		}, 500);
	});
		$("#rollDiceButton").on("click", function(e) {
			e.preventDefault();
			var output0 = createRandom("d4");
			$(".dice0").html(output0);
		});
	
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