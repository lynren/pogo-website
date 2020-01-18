function addRow(tableID) {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);
  console.log("dex.length: " + dex.length);
  for(var i = 1; i <= dex.length; ++i){
  	let newRow = tableRef.insertRow(i);
  	let pokemon = dex[i-1];
  	console.log("Row: " + i);
  	for (var j = 0; j < 3; ++j){
  		console.log("Col: "+j);
  		let newCell = newRow.insertCell(j);
  		newCell.setAttribute("align", "center");
  		var text;
  		switch(j){
  			case 0:
  				text = document.createTextNode(pokemon["pokemon_id"]);
  				newCell.appendChild(text);
  				break;
  			case 1:
  				text = document.createTextNode(pokemon["pokemon_name"]);
  				newCell.appendChild(text);
  				break;
			case 2:
				if(pokemon["type"].length > 1){
		  			text = document.createTextNode(pokemon["type"][0]);
		  			newCell.appendChild(text);
		  			let typeCell2 = newRow.insertCell(3);
		  			let type_text2 = document.createTextNode(pokemon["type"][1]);
		  			typeCell2.appendChild(type_text2);
		  			typeCell2.setAttribute("align", "center");
		  		}
		  		else{
		  			text = document.createTextNode(pokemon["type"][0]);
		  			newCell.appendChild(text);
		  			newCell.setAttribute("colSpan", "2");
		  		}
		  		break;
		}
  	}
  }
}

const dex = getDex();
addRow("dex");

function getDex(){
	return [
  {
    "form": "Normal",
    "pokemon_id": 1,
    "pokemon_name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 2,
    "pokemon_name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 3,
    "pokemon_name": "Venusaur",
    "type": [
      "Grass",
      "Poison"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 4,
    "pokemon_name": "Charmander",
    "type": [
      "Fire"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 5,
    "pokemon_name": "Charmeleon",
    "type": [
      "Fire"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 6,
    "pokemon_name": "Charizard",
    "type": [
      "Fire",
      "Flying"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 7,
    "pokemon_name": "Squirtle",
    "type": [
      "Water"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 8,
    "pokemon_name": "Wartortle",
    "type": [
      "Water"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 9,
    "pokemon_name": "Blastoise",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 10,
    "pokemon_name": "Caterpie",
    "type": [
      "Bug"
    ]
  },
  {
    "pokemon_id": 11,
    "pokemon_name": "Metapod",
    "type": [
      "Bug"
    ]
  },
  {
    "pokemon_id": 12,
    "pokemon_name": "Butterfree",
    "type": [
      "Bug",
      "Flying"
    ]
  },
  {
    "pokemon_id": 13,
    "pokemon_name": "Weedle",
    "type": [
      "Bug",
      "Poison"
    ]
  },
  {
    "pokemon_id": 14,
    "pokemon_name": "Kakuna",
    "type": [
      "Bug",
      "Poison"
    ]
  },
  {
    "pokemon_id": 15,
    "pokemon_name": "Beedrill",
    "type": [
      "Bug",
      "Poison"
    ]
  },
  {
    "pokemon_id": 16,
    "pokemon_name": "Pidgey",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "pokemon_id": 17,
    "pokemon_name": "Pidgeotto",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "pokemon_id": 18,
    "pokemon_name": "Pidgeot",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 19,
    "pokemon_name": "Rattata",
    "type": [
      "Normal"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 20,
    "pokemon_name": "Raticate",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 21,
    "pokemon_name": "Spearow",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "pokemon_id": 22,
    "pokemon_name": "Fearow",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "pokemon_id": 23,
    "pokemon_name": "Ekans",
    "type": [
      "Poison"
    ]
  },
  {
    "pokemon_id": 24,
    "pokemon_name": "Arbok",
    "type": [
      "Poison"
    ]
  },
  {
    "pokemon_id": 25,
    "pokemon_name": "Pikachu",
    "type": [
      "Electric"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 26,
    "pokemon_name": "Raichu",
    "type": [
      "Electric"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 27,
    "pokemon_name": "Sandshrew",
    "type": [
      "Ground"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 28,
    "pokemon_name": "Sandslash",
    "type": [
      "Ground"
    ]
  },
  {
    "pokemon_id": 29,
    "pokemon_name": "Nidoran♀",
    "type": [
      "Poison"
    ]
  },
  {
    "pokemon_id": 30,
    "pokemon_name": "Nidorina",
    "type": [
      "Poison"
    ]
  },
  {
    "pokemon_id": 31,
    "pokemon_name": "Nidoqueen",
    "type": [
      "Poison",
      "Ground"
    ]
  },
  {
    "pokemon_id": 32,
    "pokemon_name": "Nidoran♂",
    "type": [
      "Poison"
    ]
  },
  {
    "pokemon_id": 33,
    "pokemon_name": "Nidorino",
    "type": [
      "Poison"
    ]
  },
  {
    "pokemon_id": 34,
    "pokemon_name": "Nidoking",
    "type": [
      "Poison",
      "Ground"
    ]
  },
  {
    "pokemon_id": 35,
    "pokemon_name": "Clefairy",
    "type": [
      "Fairy"
    ]
  },
  {
    "pokemon_id": 36,
    "pokemon_name": "Clefable",
    "type": [
      "Fairy"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 37,
    "pokemon_name": "Vulpix",
    "type": [
      "Fire"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 38,
    "pokemon_name": "Ninetales",
    "type": [
      "Fire"
    ]
  },
  {
    "pokemon_id": 39,
    "pokemon_name": "Jigglypuff",
    "type": [
      "Normal",
      "Fairy"
    ]
  },
  {
    "pokemon_id": 40,
    "pokemon_name": "Wigglytuff",
    "type": [
      "Normal",
      "Fairy"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 41,
    "pokemon_name": "Zubat",
    "type": [
      "Poison",
      "Flying"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 42,
    "pokemon_name": "Golbat",
    "type": [
      "Poison",
      "Flying"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 43,
    "pokemon_name": "Oddish",
    "type": [
      "Grass",
      "Poison"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 44,
    "pokemon_name": "Gloom",
    "type": [
      "Grass",
      "Poison"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 45,
    "pokemon_name": "Vileplume",
    "type": [
      "Grass",
      "Poison"
    ]
  },
  {
    "pokemon_id": 46,
    "pokemon_name": "Paras",
    "type": [
      "Bug",
      "Grass"
    ]
  },
  {
    "pokemon_id": 47,
    "pokemon_name": "Parasect",
    "type": [
      "Bug",
      "Grass"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 48,
    "pokemon_name": "Venonat",
    "type": [
      "Bug",
      "Poison"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 49,
    "pokemon_name": "Venomoth",
    "type": [
      "Bug",
      "Poison"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 50,
    "pokemon_name": "Diglett",
    "type": [
      "Ground"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 51,
    "pokemon_name": "Dugtrio",
    "type": [
      "Ground"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 52,
    "pokemon_name": "Meowth",
    "type": [
      "Normal"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 53,
    "pokemon_name": "Persian",
    "type": [
      "Normal"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 54,
    "pokemon_name": "Psyduck",
    "type": [
      "Water"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 55,
    "pokemon_name": "Golduck",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 56,
    "pokemon_name": "Mankey",
    "type": [
      "Fighting"
    ]
  },
  {
    "pokemon_id": 57,
    "pokemon_name": "Primeape",
    "type": [
      "Fighting"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 58,
    "pokemon_name": "Growlithe",
    "type": [
      "Fire"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 59,
    "pokemon_name": "Arcanine",
    "type": [
      "Fire"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 60,
    "pokemon_name": "Poliwag",
    "type": [
      "Water"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 61,
    "pokemon_name": "Poliwhirl",
    "type": [
      "Water"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 62,
    "pokemon_name": "Poliwrath",
    "type": [
      "Water",
      "Fighting"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 63,
    "pokemon_name": "Abra",
    "type": [
      "Psychic"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 64,
    "pokemon_name": "Kadabra",
    "type": [
      "Psychic"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 65,
    "pokemon_name": "Alakazam",
    "type": [
      "Psychic"
    ]
  },
  {
    "pokemon_id": 66,
    "pokemon_name": "Machop",
    "type": [
      "Fighting"
    ]
  },
  {
    "pokemon_id": 67,
    "pokemon_name": "Machoke",
    "type": [
      "Fighting"
    ]
  },
  {
    "pokemon_id": 68,
    "pokemon_name": "Machamp",
    "type": [
      "Fighting"
    ]
  },
  {
    "pokemon_id": 69,
    "pokemon_name": "Bellsprout",
    "type": [
      "Grass",
      "Poison"
    ]
  },
  {
    "pokemon_id": 70,
    "pokemon_name": "Weepinbell",
    "type": [
      "Grass",
      "Poison"
    ]
  },
  {
    "pokemon_id": 71,
    "pokemon_name": "Victreebel",
    "type": [
      "Grass",
      "Poison"
    ]
  },
  {
    "pokemon_id": 72,
    "pokemon_name": "Tentacool",
    "type": [
      "Water",
      "Poison"
    ]
  },
  {
    "pokemon_id": 73,
    "pokemon_name": "Tentacruel",
    "type": [
      "Water",
      "Poison"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 74,
    "pokemon_name": "Geodude",
    "type": [
      "Rock",
      "Ground"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 75,
    "pokemon_name": "Graveler",
    "type": [
      "Rock",
      "Ground"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 76,
    "pokemon_name": "Golem",
    "type": [
      "Rock",
      "Ground"
    ]
  },
  {
    "pokemon_id": 77,
    "pokemon_name": "Ponyta",
    "type": [
      "Fire"
    ]
  },
  {
    "pokemon_id": 78,
    "pokemon_name": "Rapidash",
    "type": [
      "Fire"
    ]
  },
  {
    "pokemon_id": 79,
    "pokemon_name": "Slowpoke",
    "type": [
      "Water",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 80,
    "pokemon_name": "Slowbro",
    "type": [
      "Water",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 81,
    "pokemon_name": "Magnemite",
    "type": [
      "Electric",
      "Steel"
    ]
  },
  {
    "pokemon_id": 82,
    "pokemon_name": "Magneton",
    "type": [
      "Electric",
      "Steel"
    ]
  },
  {
    "pokemon_id": 83,
    "pokemon_name": "Farfetch’d",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "pokemon_id": 84,
    "pokemon_name": "Doduo",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "pokemon_id": 85,
    "pokemon_name": "Dodrio",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "pokemon_id": 86,
    "pokemon_name": "Seel",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 87,
    "pokemon_name": "Dewgong",
    "type": [
      "Water",
      "Ice"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 88,
    "pokemon_name": "Grimer",
    "type": [
      "Poison"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 89,
    "pokemon_name": "Muk",
    "type": [
      "Poison"
    ]
  },
  {
    "pokemon_id": 90,
    "pokemon_name": "Shellder",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 91,
    "pokemon_name": "Cloyster",
    "type": [
      "Water",
      "Ice"
    ]
  },
  {
    "pokemon_id": 92,
    "pokemon_name": "Gastly",
    "type": [
      "Ghost",
      "Poison"
    ]
  },
  {
    "pokemon_id": 93,
    "pokemon_name": "Haunter",
    "type": [
      "Ghost",
      "Poison"
    ]
  },
  {
    "pokemon_id": 94,
    "pokemon_name": "Gengar",
    "type": [
      "Ghost",
      "Poison"
    ]
  },
  {
    "pokemon_id": 95,
    "pokemon_name": "Onix",
    "type": [
      "Rock",
      "Ground"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 96,
    "pokemon_name": "Drowzee",
    "type": [
      "Psychic"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 97,
    "pokemon_name": "Hypno",
    "type": [
      "Psychic"
    ]
  },
  {
    "pokemon_id": 98,
    "pokemon_name": "Krabby",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 99,
    "pokemon_name": "Kingler",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 100,
    "pokemon_name": "Voltorb",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 101,
    "pokemon_name": "Electrode",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 102,
    "pokemon_name": "Exeggcute",
    "type": [
      "Grass",
      "Psychic"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 103,
    "pokemon_name": "Exeggutor",
    "type": [
      "Grass",
      "Psychic"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 104,
    "pokemon_name": "Cubone",
    "type": [
      "Ground"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 105,
    "pokemon_name": "Marowak",
    "type": [
      "Ground"
    ]
  },
  {
    "pokemon_id": 106,
    "pokemon_name": "Hitmonlee",
    "type": [
      "Fighting"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 107,
    "pokemon_name": "Hitmonchan",
    "type": [
      "Fighting"
    ]
  },
  {
    "pokemon_id": 108,
    "pokemon_name": "Lickitung",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 109,
    "pokemon_name": "Koffing",
    "type": [
      "Poison"
    ]
  },
  {
    "pokemon_id": 110,
    "pokemon_name": "Weezing",
    "type": [
      "Poison"
    ]
  },
  {
    "pokemon_id": 111,
    "pokemon_name": "Rhyhorn",
    "type": [
      "Ground",
      "Rock"
    ]
  },
  {
    "pokemon_id": 112,
    "pokemon_name": "Rhydon",
    "type": [
      "Ground",
      "Rock"
    ]
  },
  {
    "pokemon_id": 113,
    "pokemon_name": "Chansey",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 114,
    "pokemon_name": "Tangela",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 115,
    "pokemon_name": "Kangaskhan",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 116,
    "pokemon_name": "Horsea",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 117,
    "pokemon_name": "Seadra",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 118,
    "pokemon_name": "Goldeen",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 119,
    "pokemon_name": "Seaking",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 120,
    "pokemon_name": "Staryu",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 121,
    "pokemon_name": "Starmie",
    "type": [
      "Water",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 122,
    "pokemon_name": "Mr. Mime",
    "type": [
      "Psychic",
      "Fairy"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 123,
    "pokemon_name": "Scyther",
    "type": [
      "Bug",
      "Flying"
    ]
  },
  {
    "pokemon_id": 124,
    "pokemon_name": "Jynx",
    "type": [
      "Ice",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 125,
    "pokemon_name": "Electabuzz",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 126,
    "pokemon_name": "Magmar",
    "type": [
      "Fire"
    ]
  },
  {
    "pokemon_id": 127,
    "pokemon_name": "Pinsir",
    "type": [
      "Bug"
    ]
  },
  {
    "pokemon_id": 128,
    "pokemon_name": "Tauros",
    "type": [
      "Normal"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 129,
    "pokemon_name": "Magikarp",
    "type": [
      "Water"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 130,
    "pokemon_name": "Gyarados",
    "type": [
      "Water",
      "Flying"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 131,
    "pokemon_name": "Lapras",
    "type": [
      "Water",
      "Ice"
    ]
  },
  {
    "pokemon_id": 132,
    "pokemon_name": "Ditto",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 133,
    "pokemon_name": "Eevee",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 134,
    "pokemon_name": "Vaporeon",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 135,
    "pokemon_name": "Jolteon",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 136,
    "pokemon_name": "Flareon",
    "type": [
      "Fire"
    ]
  },
  {
    "pokemon_id": 137,
    "pokemon_name": "Porygon",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 138,
    "pokemon_name": "Omanyte",
    "type": [
      "Rock",
      "Water"
    ]
  },
  {
    "pokemon_id": 139,
    "pokemon_name": "Omastar",
    "type": [
      "Rock",
      "Water"
    ]
  },
  {
    "pokemon_id": 140,
    "pokemon_name": "Kabuto",
    "type": [
      "Rock",
      "Water"
    ]
  },
  {
    "pokemon_id": 141,
    "pokemon_name": "Kabutops",
    "type": [
      "Rock",
      "Water"
    ]
  },
  {
    "pokemon_id": 142,
    "pokemon_name": "Aerodactyl",
    "type": [
      "Rock",
      "Flying"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 143,
    "pokemon_name": "Snorlax",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 144,
    "pokemon_name": "Articuno",
    "type": [
      "Ice",
      "Flying"
    ]
  },
  {
    "pokemon_id": 145,
    "pokemon_name": "Zapdos",
    "type": [
      "Electric",
      "Flying"
    ]
  },
  {
    "pokemon_id": 146,
    "pokemon_name": "Moltres",
    "type": [
      "Fire",
      "Flying"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 147,
    "pokemon_name": "Dratini",
    "type": [
      "Dragon"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 148,
    "pokemon_name": "Dragonair",
    "type": [
      "Dragon"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 149,
    "pokemon_name": "Dragonite",
    "type": [
      "Dragon",
      "Flying"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 150,
    "pokemon_name": "Mewtwo",
    "type": [
      "Psychic"
    ]
  },
  {
    "pokemon_id": 151,
    "pokemon_name": "Mew",
    "type": [
      "Psychic"
    ]
  },
  {
    "pokemon_id": 152,
    "pokemon_name": "Chikorita",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 153,
    "pokemon_name": "Bayleef",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 154,
    "pokemon_name": "Meganium",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 155,
    "pokemon_name": "Cyndaquil",
    "type": [
      "Fire"
    ]
  },
  {
    "pokemon_id": 156,
    "pokemon_name": "Quilava",
    "type": [
      "Fire"
    ]
  },
  {
    "pokemon_id": 157,
    "pokemon_name": "Typhlosion",
    "type": [
      "Fire"
    ]
  },
  {
    "pokemon_id": 158,
    "pokemon_name": "Totodile",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 159,
    "pokemon_name": "Croconaw",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 160,
    "pokemon_name": "Feraligatr",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 161,
    "pokemon_name": "Sentret",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 162,
    "pokemon_name": "Furret",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 163,
    "pokemon_name": "Hoothoot",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "pokemon_id": 164,
    "pokemon_name": "Noctowl",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "pokemon_id": 165,
    "pokemon_name": "Ledyba",
    "type": [
      "Bug",
      "Flying"
    ]
  },
  {
    "pokemon_id": 166,
    "pokemon_name": "Ledian",
    "type": [
      "Bug",
      "Flying"
    ]
  },
  {
    "pokemon_id": 167,
    "pokemon_name": "Spinarak",
    "type": [
      "Bug",
      "Poison"
    ]
  },
  {
    "pokemon_id": 168,
    "pokemon_name": "Ariados",
    "type": [
      "Bug",
      "Poison"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 169,
    "pokemon_name": "Crobat",
    "type": [
      "Poison",
      "Flying"
    ]
  },
  {
    "pokemon_id": 170,
    "pokemon_name": "Chinchou",
    "type": [
      "Water",
      "Electric"
    ]
  },
  {
    "pokemon_id": 171,
    "pokemon_name": "Lanturn",
    "type": [
      "Water",
      "Electric"
    ]
  },
  {
    "pokemon_id": 172,
    "pokemon_name": "Pichu",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 173,
    "pokemon_name": "Cleffa",
    "type": [
      "Fairy"
    ]
  },
  {
    "pokemon_id": 174,
    "pokemon_name": "Igglybuff",
    "type": [
      "Normal",
      "Fairy"
    ]
  },
  {
    "pokemon_id": 175,
    "pokemon_name": "Togepi",
    "type": [
      "Fairy"
    ]
  },
  {
    "pokemon_id": 176,
    "pokemon_name": "Togetic",
    "type": [
      "Fairy",
      "Flying"
    ]
  },
  {
    "pokemon_id": 177,
    "pokemon_name": "Natu",
    "type": [
      "Psychic",
      "Flying"
    ]
  },
  {
    "pokemon_id": 178,
    "pokemon_name": "Xatu",
    "type": [
      "Psychic",
      "Flying"
    ]
  },
  {
    "pokemon_id": 179,
    "pokemon_name": "Mareep",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 180,
    "pokemon_name": "Flaaffy",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 181,
    "pokemon_name": "Ampharos",
    "type": [
      "Electric"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 182,
    "pokemon_name": "Bellossom",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 183,
    "pokemon_name": "Marill",
    "type": [
      "Water",
      "Fairy"
    ]
  },
  {
    "pokemon_id": 184,
    "pokemon_name": "Azumarill",
    "type": [
      "Water",
      "Fairy"
    ]
  },
  {
    "pokemon_id": 185,
    "pokemon_name": "Sudowoodo",
    "type": [
      "Rock"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 186,
    "pokemon_name": "Politoed",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 187,
    "pokemon_name": "Hoppip",
    "type": [
      "Grass",
      "Flying"
    ]
  },
  {
    "pokemon_id": 188,
    "pokemon_name": "Skiploom",
    "type": [
      "Grass",
      "Flying"
    ]
  },
  {
    "pokemon_id": 189,
    "pokemon_name": "Jumpluff",
    "type": [
      "Grass",
      "Flying"
    ]
  },
  {
    "pokemon_id": 190,
    "pokemon_name": "Aipom",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 191,
    "pokemon_name": "Sunkern",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 192,
    "pokemon_name": "Sunflora",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 193,
    "pokemon_name": "Yanma",
    "type": [
      "Bug",
      "Flying"
    ]
  },
  {
    "pokemon_id": 194,
    "pokemon_name": "Wooper",
    "type": [
      "Water",
      "Ground"
    ]
  },
  {
    "pokemon_id": 195,
    "pokemon_name": "Quagsire",
    "type": [
      "Water",
      "Ground"
    ]
  },
  {
    "pokemon_id": 196,
    "pokemon_name": "Espeon",
    "type": [
      "Psychic"
    ]
  },
  {
    "pokemon_id": 197,
    "pokemon_name": "Umbreon",
    "type": [
      "Dark"
    ]
  },
  {
    "pokemon_id": 198,
    "pokemon_name": "Murkrow",
    "type": [
      "Dark",
      "Flying"
    ]
  },
  {
    "pokemon_id": 199,
    "pokemon_name": "Slowking",
    "type": [
      "Water",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 200,
    "pokemon_name": "Misdreavus",
    "type": [
      "Ghost"
    ]
  },
  {
    "pokemon_id": 201,
    "pokemon_name": "Unown",
    "type": [
      "Psychic"
    ]
  },
  {
    "pokemon_id": 202,
    "pokemon_name": "Wobbuffet",
    "type": [
      "Psychic"
    ]
  },
  {
    "pokemon_id": 203,
    "pokemon_name": "Girafarig",
    "type": [
      "Normal",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 204,
    "pokemon_name": "Pineco",
    "type": [
      "Bug"
    ]
  },
  {
    "pokemon_id": 205,
    "pokemon_name": "Forretress",
    "type": [
      "Bug",
      "Steel"
    ]
  },
  {
    "pokemon_id": 206,
    "pokemon_name": "Dunsparce",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 207,
    "pokemon_name": "Gligar",
    "type": [
      "Ground",
      "Flying"
    ]
  },
  {
    "pokemon_id": 208,
    "pokemon_name": "Steelix",
    "type": [
      "Steel",
      "Ground"
    ]
  },
  {
    "pokemon_id": 209,
    "pokemon_name": "Snubbull",
    "type": [
      "Fairy"
    ]
  },
  {
    "pokemon_id": 210,
    "pokemon_name": "Granbull",
    "type": [
      "Fairy"
    ]
  },
  {
    "pokemon_id": 211,
    "pokemon_name": "Qwilfish",
    "type": [
      "Water",
      "Poison"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 212,
    "pokemon_name": "Scizor",
    "type": [
      "Bug",
      "Steel"
    ]
  },
  {
    "pokemon_id": 213,
    "pokemon_name": "Shuckle",
    "type": [
      "Bug",
      "Rock"
    ]
  },
  {
    "pokemon_id": 214,
    "pokemon_name": "Heracross",
    "type": [
      "Bug",
      "Fighting"
    ]
  },
  {
    "pokemon_id": 215,
    "pokemon_name": "Sneasel",
    "type": [
      "Dark",
      "Ice"
    ]
  },
  {
    "pokemon_id": 216,
    "pokemon_name": "Teddiursa",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 217,
    "pokemon_name": "Ursaring",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 218,
    "pokemon_name": "Slugma",
    "type": [
      "Fire"
    ]
  },
  {
    "pokemon_id": 219,
    "pokemon_name": "Magcargo",
    "type": [
      "Fire",
      "Rock"
    ]
  },
  {
    "pokemon_id": 220,
    "pokemon_name": "Swinub",
    "type": [
      "Ice",
      "Ground"
    ]
  },
  {
    "pokemon_id": 221,
    "pokemon_name": "Piloswine",
    "type": [
      "Ice",
      "Ground"
    ]
  },
  {
    "pokemon_id": 222,
    "pokemon_name": "Corsola",
    "type": [
      "Water",
      "Rock"
    ]
  },
  {
    "pokemon_id": 223,
    "pokemon_name": "Remoraid",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 224,
    "pokemon_name": "Octillery",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 225,
    "pokemon_name": "Delibird",
    "type": [
      "Ice",
      "Flying"
    ]
  },
  {
    "pokemon_id": 226,
    "pokemon_name": "Mantine",
    "type": [
      "Water",
      "Flying"
    ]
  },
  {
    "pokemon_id": 227,
    "pokemon_name": "Skarmory",
    "type": [
      "Steel",
      "Flying"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 228,
    "pokemon_name": "Houndour",
    "type": [
      "Dark",
      "Fire"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 229,
    "pokemon_name": "Houndoom",
    "type": [
      "Dark",
      "Fire"
    ]
  },
  {
    "pokemon_id": 230,
    "pokemon_name": "Kingdra",
    "type": [
      "Water",
      "Dragon"
    ]
  },
  {
    "pokemon_id": 231,
    "pokemon_name": "Phanpy",
    "type": [
      "Ground"
    ]
  },
  {
    "pokemon_id": 232,
    "pokemon_name": "Donphan",
    "type": [
      "Ground"
    ]
  },
  {
    "pokemon_id": 233,
    "pokemon_name": "Porygon2",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 234,
    "pokemon_name": "Stantler",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 235,
    "pokemon_name": "Smeargle",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 236,
    "pokemon_name": "Tyrogue",
    "type": [
      "Fighting"
    ]
  },
  {
    "pokemon_id": 237,
    "pokemon_name": "Hitmontop",
    "type": [
      "Fighting"
    ]
  },
  {
    "pokemon_id": 238,
    "pokemon_name": "Smoochum",
    "type": [
      "Ice",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 239,
    "pokemon_name": "Elekid",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 240,
    "pokemon_name": "Magby",
    "type": [
      "Fire"
    ]
  },
  {
    "pokemon_id": 241,
    "pokemon_name": "Miltank",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 242,
    "pokemon_name": "Blissey",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 243,
    "pokemon_name": "Raikou",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 244,
    "pokemon_name": "Entei",
    "type": [
      "Fire"
    ]
  },
  {
    "pokemon_id": 245,
    "pokemon_name": "Suicune",
    "type": [
      "Water"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 246,
    "pokemon_name": "Larvitar",
    "type": [
      "Rock",
      "Ground"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 247,
    "pokemon_name": "Pupitar",
    "type": [
      "Rock",
      "Ground"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 248,
    "pokemon_name": "Tyranitar",
    "type": [
      "Rock",
      "Dark"
    ]
  },
  {
    "pokemon_id": 249,
    "pokemon_name": "Lugia",
    "type": [
      "Psychic",
      "Flying"
    ]
  },
  {
    "pokemon_id": 250,
    "pokemon_name": "Ho-Oh",
    "type": [
      "Fire",
      "Flying"
    ]
  },
  {
    "pokemon_id": 251,
    "pokemon_name": "Celebi",
    "type": [
      "Psychic",
      "Grass"
    ]
  },
  {
    "pokemon_id": 252,
    "pokemon_name": "Treecko",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 253,
    "pokemon_name": "Grovyle",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 254,
    "pokemon_name": "Sceptile",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 255,
    "pokemon_name": "Torchic",
    "type": [
      "Fire"
    ]
  },
  {
    "pokemon_id": 256,
    "pokemon_name": "Combusken",
    "type": [
      "Fire",
      "Fighting"
    ]
  },
  {
    "pokemon_id": 257,
    "pokemon_name": "Blaziken",
    "type": [
      "Fire",
      "Fighting"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 258,
    "pokemon_name": "Mudkip",
    "type": [
      "Water"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 259,
    "pokemon_name": "Marshtomp",
    "type": [
      "Water",
      "Ground"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 260,
    "pokemon_name": "Swampert",
    "type": [
      "Water",
      "Ground"
    ]
  },
  {
    "pokemon_id": 261,
    "pokemon_name": "Poochyena",
    "type": [
      "Dark"
    ]
  },
  {
    "pokemon_id": 262,
    "pokemon_name": "Mightyena",
    "type": [
      "Dark"
    ]
  },
  {
    "pokemon_id": 263,
    "pokemon_name": "Zigzagoon",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 264,
    "pokemon_name": "Linoone",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 265,
    "pokemon_name": "Wurmple",
    "type": [
      "Bug"
    ]
  },
  {
    "pokemon_id": 266,
    "pokemon_name": "Silcoon",
    "type": [
      "Bug"
    ]
  },
  {
    "pokemon_id": 267,
    "pokemon_name": "Beautifly",
    "type": [
      "Bug",
      "Flying"
    ]
  },
  {
    "pokemon_id": 268,
    "pokemon_name": "Cascoon",
    "type": [
      "Bug"
    ]
  },
  {
    "pokemon_id": 269,
    "pokemon_name": "Dustox",
    "type": [
      "Bug",
      "Poison"
    ]
  },
  {
    "pokemon_id": 270,
    "pokemon_name": "Lotad",
    "type": [
      "Water",
      "Grass"
    ]
  },
  {
    "pokemon_id": 271,
    "pokemon_name": "Lombre",
    "type": [
      "Water",
      "Grass"
    ]
  },
  {
    "pokemon_id": 272,
    "pokemon_name": "Ludicolo",
    "type": [
      "Water",
      "Grass"
    ]
  },
  {
    "pokemon_id": 273,
    "pokemon_name": "Seedot",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 274,
    "pokemon_name": "Nuzleaf",
    "type": [
      "Grass",
      "Dark"
    ]
  },
  {
    "pokemon_id": 275,
    "pokemon_name": "Shiftry",
    "type": [
      "Grass",
      "Dark"
    ]
  },
  {
    "pokemon_id": 276,
    "pokemon_name": "Taillow",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "pokemon_id": 277,
    "pokemon_name": "Swellow",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "pokemon_id": 278,
    "pokemon_name": "Wingull",
    "type": [
      "Water",
      "Flying"
    ]
  },
  {
    "pokemon_id": 279,
    "pokemon_name": "Pelipper",
    "type": [
      "Water",
      "Flying"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 280,
    "pokemon_name": "Ralts",
    "type": [
      "Psychic",
      "Fairy"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 281,
    "pokemon_name": "Kirlia",
    "type": [
      "Psychic",
      "Fairy"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 282,
    "pokemon_name": "Gardevoir",
    "type": [
      "Psychic",
      "Fairy"
    ]
  },
  {
    "pokemon_id": 283,
    "pokemon_name": "Surskit",
    "type": [
      "Bug",
      "Water"
    ]
  },
  {
    "pokemon_id": 284,
    "pokemon_name": "Masquerain",
    "type": [
      "Bug",
      "Flying"
    ]
  },
  {
    "pokemon_id": 285,
    "pokemon_name": "Shroomish",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 286,
    "pokemon_name": "Breloom",
    "type": [
      "Grass",
      "Fighting"
    ]
  },
  {
    "pokemon_id": 287,
    "pokemon_name": "Slakoth",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 288,
    "pokemon_name": "Vigoroth",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 289,
    "pokemon_name": "Slaking",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 290,
    "pokemon_name": "Nincada",
    "type": [
      "Bug",
      "Ground"
    ]
  },
  {
    "pokemon_id": 291,
    "pokemon_name": "Ninjask",
    "type": [
      "Bug",
      "Flying"
    ]
  },
  {
    "pokemon_id": 292,
    "pokemon_name": "Shedinja",
    "type": [
      "Bug",
      "Ghost"
    ]
  },
  {
    "pokemon_id": 293,
    "pokemon_name": "Whismur",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 294,
    "pokemon_name": "Loudred",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 295,
    "pokemon_name": "Exploud",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 296,
    "pokemon_name": "Makuhita",
    "type": [
      "Fighting"
    ]
  },
  {
    "pokemon_id": 297,
    "pokemon_name": "Hariyama",
    "type": [
      "Fighting"
    ]
  },
  {
    "pokemon_id": 298,
    "pokemon_name": "Azurill",
    "type": [
      "Normal",
      "Fairy"
    ]
  },
  {
    "pokemon_id": 299,
    "pokemon_name": "Nosepass",
    "type": [
      "Rock"
    ]
  },
  {
    "pokemon_id": 300,
    "pokemon_name": "Skitty",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 301,
    "pokemon_name": "Delcatty",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 302,
    "pokemon_name": "Sableye",
    "type": [
      "Dark",
      "Ghost"
    ]
  },
  {
    "pokemon_id": 303,
    "pokemon_name": "Mawile",
    "type": [
      "Steel",
      "Fairy"
    ]
  },
  {
    "pokemon_id": 304,
    "pokemon_name": "Aron",
    "type": [
      "Steel",
      "Rock"
    ]
  },
  {
    "pokemon_id": 305,
    "pokemon_name": "Lairon",
    "type": [
      "Steel",
      "Rock"
    ]
  },
  {
    "pokemon_id": 306,
    "pokemon_name": "Aggron",
    "type": [
      "Steel",
      "Rock"
    ]
  },
  {
    "pokemon_id": 307,
    "pokemon_name": "Meditite",
    "type": [
      "Fighting",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 308,
    "pokemon_name": "Medicham",
    "type": [
      "Fighting",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 309,
    "pokemon_name": "Electrike",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 310,
    "pokemon_name": "Manectric",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 311,
    "pokemon_name": "Plusle",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 312,
    "pokemon_name": "Minun",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 313,
    "pokemon_name": "Volbeat",
    "type": [
      "Bug"
    ]
  },
  {
    "pokemon_id": 314,
    "pokemon_name": "Illumise",
    "type": [
      "Bug"
    ]
  },
  {
    "pokemon_id": 315,
    "pokemon_name": "Roselia",
    "type": [
      "Grass",
      "Poison"
    ]
  },
  {
    "pokemon_id": 316,
    "pokemon_name": "Gulpin",
    "type": [
      "Poison"
    ]
  },
  {
    "pokemon_id": 317,
    "pokemon_name": "Swalot",
    "type": [
      "Poison"
    ]
  },
  {
    "pokemon_id": 318,
    "pokemon_name": "Carvanha",
    "type": [
      "Water",
      "Dark"
    ]
  },
  {
    "pokemon_id": 319,
    "pokemon_name": "Sharpedo",
    "type": [
      "Water",
      "Dark"
    ]
  },
  {
    "pokemon_id": 320,
    "pokemon_name": "Wailmer",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 321,
    "pokemon_name": "Wailord",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 322,
    "pokemon_name": "Numel",
    "type": [
      "Fire",
      "Ground"
    ]
  },
  {
    "pokemon_id": 323,
    "pokemon_name": "Camerupt",
    "type": [
      "Fire",
      "Ground"
    ]
  },
  {
    "pokemon_id": 324,
    "pokemon_name": "Torkoal",
    "type": [
      "Fire"
    ]
  },
  {
    "pokemon_id": 325,
    "pokemon_name": "Spoink",
    "type": [
      "Psychic"
    ]
  },
  {
    "pokemon_id": 326,
    "pokemon_name": "Grumpig",
    "type": [
      "Psychic"
    ]
  },
  {
    "pokemon_id": 327,
    "pokemon_name": "Spinda",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 328,
    "pokemon_name": "Trapinch",
    "type": [
      "Ground"
    ]
  },
  {
    "pokemon_id": 329,
    "pokemon_name": "Vibrava",
    "type": [
      "Ground",
      "Dragon"
    ]
  },
  {
    "pokemon_id": 330,
    "pokemon_name": "Flygon",
    "type": [
      "Ground",
      "Dragon"
    ]
  },
  {
    "pokemon_id": 331,
    "pokemon_name": "Cacnea",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 332,
    "pokemon_name": "Cacturne",
    "type": [
      "Grass",
      "Dark"
    ]
  },
  {
    "pokemon_id": 333,
    "pokemon_name": "Swablu",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "pokemon_id": 334,
    "pokemon_name": "Altaria",
    "type": [
      "Dragon",
      "Flying"
    ]
  },
  {
    "pokemon_id": 335,
    "pokemon_name": "Zangoose",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 336,
    "pokemon_name": "Seviper",
    "type": [
      "Poison"
    ]
  },
  {
    "pokemon_id": 337,
    "pokemon_name": "Lunatone",
    "type": [
      "Rock",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 338,
    "pokemon_name": "Solrock",
    "type": [
      "Rock",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 339,
    "pokemon_name": "Barboach",
    "type": [
      "Water",
      "Ground"
    ]
  },
  {
    "pokemon_id": 340,
    "pokemon_name": "Whiscash",
    "type": [
      "Water",
      "Ground"
    ]
  },
  {
    "pokemon_id": 341,
    "pokemon_name": "Corphish",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 342,
    "pokemon_name": "Crawdaunt",
    "type": [
      "Water",
      "Dark"
    ]
  },
  {
    "pokemon_id": 343,
    "pokemon_name": "Baltoy",
    "type": [
      "Ground",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 344,
    "pokemon_name": "Claydol",
    "type": [
      "Ground",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 345,
    "pokemon_name": "Lileep",
    "type": [
      "Rock",
      "Grass"
    ]
  },
  {
    "pokemon_id": 346,
    "pokemon_name": "Cradily",
    "type": [
      "Rock",
      "Grass"
    ]
  },
  {
    "pokemon_id": 347,
    "pokemon_name": "Anorith",
    "type": [
      "Rock",
      "Bug"
    ]
  },
  {
    "pokemon_id": 348,
    "pokemon_name": "Armaldo",
    "type": [
      "Rock",
      "Bug"
    ]
  },
  {
    "pokemon_id": 349,
    "pokemon_name": "Feebas",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 350,
    "pokemon_name": "Milotic",
    "type": [
      "Water"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 351,
    "pokemon_name": "Castform",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 352,
    "pokemon_name": "Kecleon",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 353,
    "pokemon_name": "Shuppet",
    "type": [
      "Ghost"
    ]
  },
  {
    "pokemon_id": 354,
    "pokemon_name": "Banette",
    "type": [
      "Ghost"
    ]
  },
  {
    "pokemon_id": 355,
    "pokemon_name": "Duskull",
    "type": [
      "Ghost"
    ]
  },
  {
    "pokemon_id": 356,
    "pokemon_name": "Dusclops",
    "type": [
      "Ghost"
    ]
  },
  {
    "pokemon_id": 357,
    "pokemon_name": "Tropius",
    "type": [
      "Grass",
      "Flying"
    ]
  },
  {
    "pokemon_id": 358,
    "pokemon_name": "Chimecho",
    "type": [
      "Psychic"
    ]
  },
  {
    "pokemon_id": 359,
    "pokemon_name": "Absol",
    "type": [
      "Dark"
    ]
  },
  {
    "pokemon_id": 360,
    "pokemon_name": "Wynaut",
    "type": [
      "Psychic"
    ]
  },
  {
    "pokemon_id": 361,
    "pokemon_name": "Snorunt",
    "type": [
      "Ice"
    ]
  },
  {
    "pokemon_id": 362,
    "pokemon_name": "Glalie",
    "type": [
      "Ice"
    ]
  },
  {
    "pokemon_id": 363,
    "pokemon_name": "Spheal",
    "type": [
      "Ice",
      "Water"
    ]
  },
  {
    "pokemon_id": 364,
    "pokemon_name": "Sealeo",
    "type": [
      "Ice",
      "Water"
    ]
  },
  {
    "pokemon_id": 365,
    "pokemon_name": "Walrein",
    "type": [
      "Ice",
      "Water"
    ]
  },
  {
    "pokemon_id": 366,
    "pokemon_name": "Clamperl",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 367,
    "pokemon_name": "Huntail",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 368,
    "pokemon_name": "Gorebyss",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 369,
    "pokemon_name": "Relicanth",
    "type": [
      "Water",
      "Rock"
    ]
  },
  {
    "pokemon_id": 370,
    "pokemon_name": "Luvdisc",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 371,
    "pokemon_name": "Bagon",
    "type": [
      "Dragon"
    ]
  },
  {
    "pokemon_id": 372,
    "pokemon_name": "Shelgon",
    "type": [
      "Dragon"
    ]
  },
  {
    "pokemon_id": 373,
    "pokemon_name": "Salamence",
    "type": [
      "Dragon",
      "Flying"
    ]
  },
  {
    "pokemon_id": 374,
    "pokemon_name": "Beldum",
    "type": [
      "Steel",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 375,
    "pokemon_name": "Metang",
    "type": [
      "Steel",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 376,
    "pokemon_name": "Metagross",
    "type": [
      "Steel",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 377,
    "pokemon_name": "Regirock",
    "type": [
      "Rock"
    ]
  },
  {
    "pokemon_id": 378,
    "pokemon_name": "Regice",
    "type": [
      "Ice"
    ]
  },
  {
    "pokemon_id": 379,
    "pokemon_name": "Registeel",
    "type": [
      "Steel"
    ]
  },
  {
    "pokemon_id": 380,
    "pokemon_name": "Latias",
    "type": [
      "Dragon",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 381,
    "pokemon_name": "Latios",
    "type": [
      "Dragon",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 382,
    "pokemon_name": "Kyogre",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 383,
    "pokemon_name": "Groudon",
    "type": [
      "Ground"
    ]
  },
  {
    "pokemon_id": 384,
    "pokemon_name": "Rayquaza",
    "type": [
      "Dragon",
      "Flying"
    ]
  },
  {
    "pokemon_id": 385,
    "pokemon_name": "Jirachi",
    "type": [
      "Steel",
      "Psychic"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 386,
    "pokemon_name": "Deoxys",
    "type": [
      "Psychic"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 387,
    "pokemon_name": "Turtwig",
    "type": [
      "Grass"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 388,
    "pokemon_name": "Grotle",
    "type": [
      "Grass"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 389,
    "pokemon_name": "Torterra",
    "type": [
      "Grass",
      "Ground"
    ]
  },
  {
    "pokemon_id": 390,
    "pokemon_name": "Chimchar",
    "type": [
      "Fire"
    ]
  },
  {
    "pokemon_id": 391,
    "pokemon_name": "Monferno",
    "type": [
      "Fire",
      "Fighting"
    ]
  },
  {
    "pokemon_id": 392,
    "pokemon_name": "Infernape",
    "type": [
      "Fire",
      "Fighting"
    ]
  },
  {
    "pokemon_id": 393,
    "pokemon_name": "Piplup",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 394,
    "pokemon_name": "Prinplup",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 395,
    "pokemon_name": "Empoleon",
    "type": [
      "Water",
      "Steel"
    ]
  },
  {
    "pokemon_id": 396,
    "pokemon_name": "Starly",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "pokemon_id": 397,
    "pokemon_name": "Staravia",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "pokemon_id": 398,
    "pokemon_name": "Staraptor",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "pokemon_id": 399,
    "pokemon_name": "Bidoof",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 400,
    "pokemon_name": "Bibarel",
    "type": [
      "Normal",
      "Water"
    ]
  },
  {
    "pokemon_id": 401,
    "pokemon_name": "Kricketot",
    "type": [
      "Bug"
    ]
  },
  {
    "pokemon_id": 402,
    "pokemon_name": "Kricketune",
    "type": [
      "Bug"
    ]
  },
  {
    "pokemon_id": 403,
    "pokemon_name": "Shinx",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 404,
    "pokemon_name": "Luxio",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 405,
    "pokemon_name": "Luxray",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 406,
    "pokemon_name": "Budew",
    "type": [
      "Grass",
      "Poison"
    ]
  },
  {
    "pokemon_id": 407,
    "pokemon_name": "Roserade",
    "type": [
      "Grass",
      "Poison"
    ]
  },
  {
    "pokemon_id": 408,
    "pokemon_name": "Cranidos",
    "type": [
      "Rock"
    ]
  },
  {
    "pokemon_id": 409,
    "pokemon_name": "Rampardos",
    "type": [
      "Rock"
    ]
  },
  {
    "pokemon_id": 410,
    "pokemon_name": "Shieldon",
    "type": [
      "Rock",
      "Steel"
    ]
  },
  {
    "pokemon_id": 411,
    "pokemon_name": "Bastiodon",
    "type": [
      "Rock",
      "Steel"
    ]
  },
  {
    "pokemon_id": 414,
    "pokemon_name": "Mothim",
    "type": [
      "Bug",
      "Flying"
    ]
  },
  {
    "pokemon_id": 415,
    "pokemon_name": "Combee",
    "type": [
      "Bug",
      "Flying"
    ]
  },
  {
    "pokemon_id": 416,
    "pokemon_name": "Vespiquen",
    "type": [
      "Bug",
      "Flying"
    ]
  },
  {
    "pokemon_id": 417,
    "pokemon_name": "Pachirisu",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 418,
    "pokemon_name": "Buizel",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 419,
    "pokemon_name": "Floatzel",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 420,
    "pokemon_name": "Cherubi",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 424,
    "pokemon_name": "Ambipom",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 425,
    "pokemon_name": "Drifloon",
    "type": [
      "Ghost",
      "Flying"
    ]
  },
  {
    "pokemon_id": 426,
    "pokemon_name": "Drifblim",
    "type": [
      "Ghost",
      "Flying"
    ]
  },
  {
    "pokemon_id": 427,
    "pokemon_name": "Buneary",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 428,
    "pokemon_name": "Lopunny",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 429,
    "pokemon_name": "Mismagius",
    "type": [
      "Ghost"
    ]
  },
  {
    "pokemon_id": 430,
    "pokemon_name": "Honchkrow",
    "type": [
      "Dark",
      "Flying"
    ]
  },
  {
    "pokemon_id": 431,
    "pokemon_name": "Glameow",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 432,
    "pokemon_name": "Purugly",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 433,
    "pokemon_name": "Chingling",
    "type": [
      "Psychic"
    ]
  },
  {
    "pokemon_id": 434,
    "pokemon_name": "Stunky",
    "type": [
      "Poison",
      "Dark"
    ]
  },
  {
    "pokemon_id": 435,
    "pokemon_name": "Skuntank",
    "type": [
      "Poison",
      "Dark"
    ]
  },
  {
    "pokemon_id": 436,
    "pokemon_name": "Bronzor",
    "type": [
      "Steel",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 437,
    "pokemon_name": "Bronzong",
    "type": [
      "Steel",
      "Psychic"
    ]
  },
  {
    "pokemon_id": 438,
    "pokemon_name": "Bonsly",
    "type": [
      "Rock"
    ]
  },
  {
    "pokemon_id": 439,
    "pokemon_name": "Mime Jr.",
    "type": [
      "Psychic",
      "Fairy"
    ]
  },
  {
    "pokemon_id": 440,
    "pokemon_name": "Happiny",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 441,
    "pokemon_name": "Chatot",
    "type": [
      "Normal",
      "Flying"
    ]
  },
  {
    "pokemon_id": 442,
    "pokemon_name": "Spiritomb",
    "type": [
      "Ghost",
      "Dark"
    ]
  },
  {
    "pokemon_id": 443,
    "pokemon_name": "Gible",
    "type": [
      "Dragon",
      "Ground"
    ]
  },
  {
    "pokemon_id": 444,
    "pokemon_name": "Gabite",
    "type": [
      "Dragon",
      "Ground"
    ]
  },
  {
    "pokemon_id": 445,
    "pokemon_name": "Garchomp",
    "type": [
      "Dragon",
      "Ground"
    ]
  },
  {
    "pokemon_id": 446,
    "pokemon_name": "Munchlax",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 447,
    "pokemon_name": "Riolu",
    "type": [
      "Fighting"
    ]
  },
  {
    "pokemon_id": 448,
    "pokemon_name": "Lucario",
    "type": [
      "Fighting",
      "Steel"
    ]
  },
  {
    "pokemon_id": 449,
    "pokemon_name": "Hippopotas",
    "type": [
      "Ground"
    ]
  },
  {
    "pokemon_id": 450,
    "pokemon_name": "Hippowdon",
    "type": [
      "Ground"
    ]
  },
  {
    "pokemon_id": 451,
    "pokemon_name": "Skorupi",
    "type": [
      "Poison",
      "Bug"
    ]
  },
  {
    "pokemon_id": 452,
    "pokemon_name": "Drapion",
    "type": [
      "Poison",
      "Dark"
    ]
  },
  {
    "pokemon_id": 453,
    "pokemon_name": "Croagunk",
    "type": [
      "Poison",
      "Fighting"
    ]
  },
  {
    "pokemon_id": 454,
    "pokemon_name": "Toxicroak",
    "type": [
      "Poison",
      "Fighting"
    ]
  },
  {
    "pokemon_id": 455,
    "pokemon_name": "Carnivine",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 456,
    "pokemon_name": "Finneon",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 457,
    "pokemon_name": "Lumineon",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 458,
    "pokemon_name": "Mantyke",
    "type": [
      "Water",
      "Flying"
    ]
  },
  {
    "pokemon_id": 459,
    "pokemon_name": "Snover",
    "type": [
      "Grass",
      "Ice"
    ]
  },
  {
    "pokemon_id": 460,
    "pokemon_name": "Abomasnow",
    "type": [
      "Grass",
      "Ice"
    ]
  },
  {
    "pokemon_id": 461,
    "pokemon_name": "Weavile",
    "type": [
      "Dark",
      "Ice"
    ]
  },
  {
    "pokemon_id": 462,
    "pokemon_name": "Magnezone",
    "type": [
      "Electric",
      "Steel"
    ]
  },
  {
    "pokemon_id": 463,
    "pokemon_name": "Lickilicky",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 464,
    "pokemon_name": "Rhyperior",
    "type": [
      "Ground",
      "Rock"
    ]
  },
  {
    "pokemon_id": 465,
    "pokemon_name": "Tangrowth",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 466,
    "pokemon_name": "Electivire",
    "type": [
      "Electric"
    ]
  },
  {
    "pokemon_id": 467,
    "pokemon_name": "Magmortar",
    "type": [
      "Fire"
    ]
  },
  {
    "pokemon_id": 468,
    "pokemon_name": "Togekiss",
    "type": [
      "Fairy",
      "Flying"
    ]
  },
  {
    "pokemon_id": 469,
    "pokemon_name": "Yanmega",
    "type": [
      "Bug",
      "Flying"
    ]
  },
  {
    "pokemon_id": 470,
    "pokemon_name": "Leafeon",
    "type": [
      "Grass"
    ]
  },
  {
    "pokemon_id": 471,
    "pokemon_name": "Glaceon",
    "type": [
      "Ice"
    ]
  },
  {
    "pokemon_id": 472,
    "pokemon_name": "Gliscor",
    "type": [
      "Ground",
      "Flying"
    ]
  },
  {
    "pokemon_id": 473,
    "pokemon_name": "Mamoswine",
    "type": [
      "Ice",
      "Ground"
    ]
  },
  {
    "pokemon_id": 474,
    "pokemon_name": "Porygon-Z",
    "type": [
      "Normal"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 475,
    "pokemon_name": "Gallade",
    "type": [
      "Psychic",
      "Fighting"
    ]
  },
  {
    "pokemon_id": 476,
    "pokemon_name": "Probopass",
    "type": [
      "Rock",
      "Steel"
    ]
  },
  {
    "pokemon_id": 477,
    "pokemon_name": "Dusknoir",
    "type": [
      "Ghost"
    ]
  },
  {
    "pokemon_id": 478,
    "pokemon_name": "Froslass",
    "type": [
      "Ice",
      "Ghost"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 479,
    "pokemon_name": "Rotom",
    "type": [
      "Electric",
      "Ghost"
    ]
  },
  {
    "pokemon_id": 480,
    "pokemon_name": "Uxie",
    "type": [
      "Psychic"
    ]
  },
  {
    "pokemon_id": 481,
    "pokemon_name": "Mesprit",
    "type": [
      "Psychic"
    ]
  },
  {
    "pokemon_id": 482,
    "pokemon_name": "Azelf",
    "type": [
      "Psychic"
    ]
  },
  {
    "pokemon_id": 483,
    "pokemon_name": "Dialga",
    "type": [
      "Steel",
      "Dragon"
    ]
  },
  {
    "pokemon_id": 484,
    "pokemon_name": "Palkia",
    "type": [
      "Water",
      "Dragon"
    ]
  },
  {
    "pokemon_id": 485,
    "pokemon_name": "Heatran",
    "type": [
      "Fire",
      "Steel"
    ]
  },
  {
    "pokemon_id": 486,
    "pokemon_name": "Regigigas",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 488,
    "pokemon_name": "Cresselia",
    "type": [
      "Psychic"
    ]
  },
  {
    "pokemon_id": 489,
    "pokemon_name": "Phione",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 490,
    "pokemon_name": "Manaphy",
    "type": [
      "Water"
    ]
  },
  {
    "pokemon_id": 491,
    "pokemon_name": "Darkrai",
    "type": [
      "Dark"
    ]
  },
  {
    "form": "Normal",
    "pokemon_id": 493,
    "pokemon_name": "Arceus",
    "type": [
      "Normal"
    ]
  },
  {
    "pokemon_id": 808,
    "pokemon_name": "Meltan",
    "type": [
      "Steel"
    ]
  },
  {
    "pokemon_id": 809,
    "pokemon_name": "Melmetal",
    "type": [
      "Steel"
    ]
  }
];
}