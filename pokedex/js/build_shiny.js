function addRow(tableID){
	table = document.getElementById(tableID);
	var i=1
	for(poke_id in dex){
		let new_row = table.insertRow(i++);
		let col_id = new_row.insertCell(0);
		let col_name = new_row.insertCell(1);
		col_id.appendChild(document.createTextNode(dex[poke_id].id));
		col_name.appendChild(document.createTextNode(dex[poke_id].name));
		let found_in = "";
		if(dex[poke_id].found_egg){
			found_in += "egg, ";
		}
		if(dex[poke_id].found_evolution){
			found_in += "evolution, ";
		}
		if(dex[poke_id].found_raid){
			found_in += "raid, ";
		}
		if(dex[poke_id].found_research){
			found_in += "research, ";
		}
		if(dex[poke_id].found_wild){
			found_in += "wild, ";
		}
		if(dex[poke_id].alolan_shiny){
			found_in += "alolan";
		}
		if(found_in.slice(-2) === ", "){
			found_in = found_in.substring(0, found_in.length-2)
		}
		let col_found = new_row.insertCell(2);
		col_found.appendChild(document.createTextNode(found_in));
	}
}

const dex = getDex();
addRow("dex");

function getDex(){
	return {
    "1": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 1, 

        "name": "Bulbasaur"

    }, 

    "2": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 2, 

        "name": "Ivysaur"

    }, 

    "3": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 3, 

        "name": "Venusaur"

    }, 

    "4": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 4, 

        "name": "Charmander"

    }, 

    "5": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 5, 

        "name": "Charmeleon"

    }, 

    "6": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 6, 

        "name": "Charizard"

    }, 

    "7": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 7, 

        "name": "Squirtle"

    }, 

    "8": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 8, 

        "name": "Wartortle"

    }, 

    "9": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 9, 

        "name": "Blastoise"

    }, 

    "10": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 10, 

        "name": "Caterpie"

    }, 

    "11": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 11, 

        "name": "Metapod"

    }, 

    "12": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 12, 

        "name": "Butterfree"

    }, 

    "16": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 16, 

        "name": "Pidgey"

    }, 

    "17": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 17, 

        "name": "Pidgeotto"

    }, 

    "18": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 18, 

        "name": "Pidgeot"

    }, 

    "19": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 19, 

        "name": "Rattata"

    }, 

    "20": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 20, 

        "name": "Raticate"

    }, 

    "23": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 23, 

        "name": "Ekans"

    }, 

    "24": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 24, 

        "name": "Arbok"

    }, 

    "25": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 25, 

        "name": "Pikachu"

    }, 

    "26": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 26, 

        "name": "Raichu"

    }, 

    "27": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 27, 

        "name": "Sandshrew"

    }, 

    "28": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 28, 

        "name": "Sandslash"

    }, 

    "29": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 29, 

        "name": "Nidoran\u2640"

    }, 

    "30": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 30, 

        "name": "Nidorina"

    }, 

    "31": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 31, 

        "name": "Nidoqueen"

    }, 

    "32": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 32, 

        "name": "Nidoran\u2642"

    }, 

    "33": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 33, 

        "name": "Nidorino"

    }, 

    "34": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 34, 

        "name": "Nidoking"

    }, 

    "35": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 35, 

        "name": "Clefairy"

    }, 

    "36": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 36, 

        "name": "Clefable"

    }, 

    "37": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 37, 

        "name": "Vulpix"

    }, 

    "38": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 38, 

        "name": "Ninetales"

    }, 

    "39": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 39, 

        "name": "Jigglypuff"

    }, 

    "40": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 40, 

        "name": "Wigglytuff"

    }, 

    "41": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 41, 

        "name": "Zubat"

    }, 

    "42": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 42, 

        "name": "Golbat"

    }, 

    "43": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 43, 

        "name": "Oddish"

    }, 

    "44": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 44, 

        "name": "Gloom"

    }, 

    "45": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 45, 

        "name": "Vileplume"

    }, 

    "50": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 50, 

        "name": "Diglett"

    }, 

    "51": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 51, 

        "name": "Dugtrio"

    }, 

    "52": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 52, 

        "name": "Meowth"

    }, 

    "53": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 53, 

        "name": "Persian"

    }, 

    "54": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 54, 

        "name": "Psyduck"

    }, 

    "55": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 55, 

        "name": "Golduck"

    }, 

    "56": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 56, 

        "name": "Mankey"

    }, 

    "57": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 57, 

        "name": "Primeape"

    }, 

    "58": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 58, 

        "name": "Growlithe"

    }, 

    "59": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 59, 

        "name": "Arcanine"

    }, 

    "60": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 60, 

        "name": "Poliwag"

    }, 

    "61": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 61, 

        "name": "Poliwhirl"

    }, 

    "62": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 62, 

        "name": "Poliwrath"

    }, 

    "66": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 66, 

        "name": "Machop"

    }, 

    "67": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 67, 

        "name": "Machoke"

    }, 

    "68": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 68, 

        "name": "Machamp"

    }, 

    "72": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 72, 

        "name": "Tentacool"

    }, 

    "73": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 73, 

        "name": "Tentacruel"

    }, 

    "74": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 74, 

        "name": "Geodude"

    }, 

    "75": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 75, 

        "name": "Graveler"

    }, 

    "76": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 76, 

        "name": "Golem"

    }, 

    "77": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 77, 

        "name": "Ponyta"

    }, 

    "78": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 78, 

        "name": "Rapidash"

    }, 

    "81": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 81, 

        "name": "Magnemite"

    }, 

    "82": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 82, 

        "name": "Magneton"

    }, 

    "83": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 83, 

        "name": "Farfetch\u2019d"

    }, 

    "86": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 86, 

        "name": "Seel"

    }, 

    "87": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 87, 

        "name": "Dewgong"

    }, 

    "88": {

        "alolan_shiny": true, 

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 88, 

        "name": "Grimer"

    }, 

    "89": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 89, 

        "name": "Muk"

    }, 

    "90": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 90, 

        "name": "Shellder"

    }, 

    "91": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 91, 

        "name": "Cloyster"

    }, 

    "92": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 92, 

        "name": "Gastly"

    }, 

    "93": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 93, 

        "name": "Haunter"

    }, 

    "94": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 94, 

        "name": "Gengar"

    }, 

    "95": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": true, 

        "id": 95, 

        "name": "Onix"

    }, 

    "96": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 96, 

        "name": "Drowzee"

    }, 

    "97": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 97, 

        "name": "Hypno"

    }, 

    "98": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 98, 

        "name": "Krabby"

    }, 

    "99": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 99, 

        "name": "Kingler"

    }, 

    "103": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 103, 

        "name": "Exeggutor"

    }, 

    "104": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 104, 

        "name": "Cubone"

    }, 

    "105": {

        "alolan_shiny": true, 

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 105, 

        "name": "Marowak"

    }, 

    "109": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 109, 

        "name": "Koffing"

    }, 

    "110": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 110, 

        "name": "Weezing"

    }, 

    "115": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 115, 

        "name": "Kangaskhan"

    }, 

    "116": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 116, 

        "name": "Horsea"

    }, 

    "117": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 117, 

        "name": "Seadra"

    }, 

    "122": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 122, 

        "name": "Mr. Mime"

    }, 

    "123": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 123, 

        "name": "Scyther"

    }, 

    "124": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 124, 

        "name": "Jynx"

    }, 

    "125": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 125, 

        "name": "Electabuzz"

    }, 

    "126": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 126, 

        "name": "Magmar"

    }, 

    "127": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 127, 

        "name": "Pinsir"

    }, 

    "128": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 128, 

        "name": "Tauros"

    }, 

    "129": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": true, 

        "id": 129, 

        "name": "Magikarp"

    }, 

    "130": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 130, 

        "name": "Gyarados"

    }, 

    "131": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 131, 

        "name": "Lapras"

    }, 

    "133": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 133, 

        "name": "Eevee"

    }, 

    "134": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 134, 

        "name": "Vaporeon"

    }, 

    "135": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 135, 

        "name": "Jolteon"

    }, 

    "136": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 136, 

        "name": "Flareon"

    }, 

    "138": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 138, 

        "name": "Omanyte"

    }, 

    "139": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 139, 

        "name": "Omastar"

    }, 

    "140": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 140, 

        "name": "Kabuto"

    }, 

    "141": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 141, 

        "name": "Kabutops"

    }, 

    "142": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": true, 

        "id": 142, 

        "name": "Aerodactyl"

    }, 

    "144": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 144, 

        "name": "Articuno"

    }, 

    "145": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 145, 

        "name": "Zapdos"

    }, 

    "146": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 146, 

        "name": "Moltres"

    }, 

    "147": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 147, 

        "name": "Dratini"

    }, 

    "148": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 148, 

        "name": "Dragonair"

    }, 

    "149": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 149, 

        "name": "Dragonite"

    }, 

    "150": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 150, 

        "name": "Mewtwo"

    }, 

    "152": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 152, 

        "name": "Chikorita"

    }, 

    "153": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 153, 

        "name": "Bayleef"

    }, 

    "154": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 154, 

        "name": "Meganium"

    }, 

    "155": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 155, 

        "name": "Cyndaquil"

    }, 

    "156": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 156, 

        "name": "Quilava"

    }, 

    "157": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 157, 

        "name": "Typhlosion"

    }, 

    "158": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 158, 

        "name": "Totodile"

    }, 

    "159": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 159, 

        "name": "Croconaw"

    }, 

    "160": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 160, 

        "name": "Feraligatr"

    }, 

    "161": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 161, 

        "name": "Sentret"

    }, 

    "162": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 162, 

        "name": "Furret"

    }, 

    "169": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 169, 

        "name": "Crobat"

    }, 

    "172": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 172, 

        "name": "Pichu"

    }, 

    "173": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 173, 

        "name": "Cleffa"

    }, 

    "174": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 174, 

        "name": "Igglybuff"

    }, 

    "175": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 175, 

        "name": "Togepi"

    }, 

    "176": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 176, 

        "name": "Togetic"

    }, 

    "177": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 177, 

        "name": "Natu"

    }, 

    "178": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 178, 

        "name": "Xatu"

    }, 

    "179": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 179, 

        "name": "Mareep"

    }, 

    "180": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 180, 

        "name": "Flaaffy"

    }, 

    "181": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 181, 

        "name": "Ampharos"

    }, 

    "183": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 183, 

        "name": "Marill"

    }, 

    "184": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 184, 

        "name": "Azumarill"

    }, 

    "185": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 185, 

        "name": "Sudowoodo"

    }, 

    "186": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 186, 

        "name": "Politoed"

    }, 

    "190": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 190, 

        "name": "Aipom"

    }, 

    "191": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": true, 

        "id": 191, 

        "name": "Sunkern"

    }, 

    "192": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 192, 

        "name": "Sunflora"

    }, 

    "193": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 193, 

        "name": "Yanma"

    }, 

    "196": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 196, 

        "name": "Espeon"

    }, 

    "197": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 197, 

        "name": "Umbreon"

    }, 

    "198": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 198, 

        "name": "Murkrow"

    }, 

    "200": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 200, 

        "name": "Misdreavus"

    }, 

    "202": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 202, 

        "name": "Wobbuffet"

    }, 

    "204": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": true, 

        "id": 204, 

        "name": "Pineco"

    }, 

    "205": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 205, 

        "name": "Forretress"

    }, 

    "207": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 207, 

        "name": "Gligar"

    }, 

    "208": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 208, 

        "name": "Steelix"

    }, 

    "209": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 209, 

        "name": "Snubbull"

    }, 

    "210": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 210, 

        "name": "Granbull"

    }, 

    "212": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 212, 

        "name": "Scizor"

    }, 

    "213": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 213, 

        "name": "Shuckle"

    }, 

    "215": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 215, 

        "name": "Sneasel"

    }, 

    "220": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 220, 

        "name": "Swinub"

    }, 

    "221": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 221, 

        "name": "Piloswine"

    }, 

    "225": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 225, 

        "name": "Delibird"

    }, 

    "227": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 227, 

        "name": "Skarmory"

    }, 

    "228": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 228, 

        "name": "Houndour"

    }, 

    "229": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 229, 

        "name": "Houndoom"

    }, 

    "230": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 230, 

        "name": "Kingdra"

    }, 

    "238": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 238, 

        "name": "Smoochum"

    }, 

    "239": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 239, 

        "name": "Elekid"

    }, 

    "240": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 240, 

        "name": "Magby"

    }, 

    "243": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 243, 

        "name": "Raikou"

    }, 

    "244": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 244, 

        "name": "Entei"

    }, 

    "245": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 245, 

        "name": "Suicune"

    }, 

    "246": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 246, 

        "name": "Larvitar"

    }, 

    "247": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 247, 

        "name": "Pupitar"

    }, 

    "248": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 248, 

        "name": "Tyranitar"

    }, 

    "249": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 249, 

        "name": "Lugia"

    }, 

    "250": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 250, 

        "name": "Ho-Oh"

    }, 

    "252": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 252, 

        "name": "Treecko"

    }, 

    "253": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 253, 

        "name": "Grovyle"

    }, 

    "254": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 254, 

        "name": "Sceptile"

    }, 

    "255": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 255, 

        "name": "Torchic"

    }, 

    "256": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 256, 

        "name": "Combusken"

    }, 

    "257": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 257, 

        "name": "Blaziken"

    }, 

    "258": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 258, 

        "name": "Mudkip"

    }, 

    "259": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 259, 

        "name": "Marshtomp"

    }, 

    "260": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 260, 

        "name": "Swampert"

    }, 

    "261": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 261, 

        "name": "Poochyena"

    }, 

    "262": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 262, 

        "name": "Mightyena"

    }, 

    "263": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 263, 

        "name": "Zigzagoon"

    }, 

    "270": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 270, 

        "name": "Lotad"

    }, 

    "271": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 271, 

        "name": "Lombre"

    }, 

    "272": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 272, 

        "name": "Ludicolo"

    }, 

    "276": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 276, 

        "name": "Taillow"

    }, 

    "277": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 277, 

        "name": "Swellow"

    }, 

    "278": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 278, 

        "name": "Wingull"

    }, 

    "279": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 279, 

        "name": "Pelipper"

    }, 

    "280": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 280, 

        "name": "Ralts"

    }, 

    "281": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 281, 

        "name": "Kirlia"

    }, 

    "282": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 282, 

        "name": "Gardevoir"

    }, 

    "287": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 287, 

        "name": "Slakoth"

    }, 

    "288": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 288, 

        "name": "Vigoroth"

    }, 

    "289": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 289, 

        "name": "Slaking"

    }, 

    "296": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 296, 

        "name": "Makuhita"

    }, 

    "297": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 297, 

        "name": "Hariyama"

    }, 

    "298": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 298, 

        "name": "Azurill"

    }, 

    "302": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": true, 

        "id": 302, 

        "name": "Sableye"

    }, 

    "303": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 303, 

        "name": "Mawile"

    }, 

    "304": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 304, 

        "name": "Aron"

    }, 

    "305": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 305, 

        "name": "Lairon"

    }, 

    "306": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 306, 

        "name": "Aggron"

    }, 

    "307": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 307, 

        "name": "Meditite"

    }, 

    "308": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 308, 

        "name": "Medicham"

    }, 

    "309": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 309, 

        "name": "Electrike"

    }, 

    "310": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 310, 

        "name": "Manectric"

    }, 

    "311": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 311, 

        "name": "Plusle"

    }, 

    "312": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 312, 

        "name": "Minun"

    }, 

    "315": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 315, 

        "name": "Roselia"

    }, 

    "318": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 318, 

        "name": "Carvanha"

    }, 

    "319": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 319, 

        "name": "Sharpedo"

    }, 

    "320": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 320, 

        "name": "Wailmer"

    }, 

    "321": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 321, 

        "name": "Wailord"

    }, 

    "325": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 325, 

        "name": "Spoink"

    }, 

    "326": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 326, 

        "name": "Grumpig"

    }, 

    "327": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": true, 

        "found_wild": false, 

        "id": 327, 

        "name": "Spinda"

    }, 

    "328": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 328, 

        "name": "Trapinch"

    }, 

    "329": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 329, 

        "name": "Vibrava"

    }, 

    "330": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 330, 

        "name": "Flygon"

    }, 

    "333": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": true, 

        "id": 333, 

        "name": "Swablu"

    }, 

    "334": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 334, 

        "name": "Altaria"

    }, 

    "337": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 337, 

        "name": "Lunatone"

    }, 

    "338": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 338, 

        "name": "Solrock"

    }, 

    "339": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 339, 

        "name": "Barboach"

    }, 

    "340": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 340, 

        "name": "Whiscash"

    }, 

    "345": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 345, 

        "name": "Lileep"

    }, 

    "346": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 346, 

        "name": "Cradily"

    }, 

    "347": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 347, 

        "name": "Anorith"

    }, 

    "348": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 348, 

        "name": "Armaldo"

    }, 

    "349": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 349, 

        "name": "Feebas"

    }, 

    "350": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 350, 

        "name": "Milotic"

    }, 

    "351": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 351, 

        "name": "Castform"

    }, 

    "353": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 353, 

        "name": "Shuppet"

    }, 

    "354": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 354, 

        "name": "Banette"

    }, 

    "355": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 355, 

        "name": "Duskull"

    }, 

    "356": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 356, 

        "name": "Dusclops"

    }, 

    "359": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 359, 

        "name": "Absol"

    }, 

    "360": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 360, 

        "name": "Wynaut"

    }, 

    "361": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": true, 

        "id": 361, 

        "name": "Snorunt"

    }, 

    "362": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 362, 

        "name": "Glalie"

    }, 

    "366": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 366, 

        "name": "Clamperl"

    }, 

    "367": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 367, 

        "name": "Huntail"

    }, 

    "368": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 368, 

        "name": "Gorebyss"

    }, 

    "370": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 370, 

        "name": "Luvdisc"

    }, 

    "371": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 371, 

        "name": "Bagon"

    }, 

    "372": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 372, 

        "name": "Shelgon"

    }, 

    "373": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 373, 

        "name": "Salamence"

    }, 

    "374": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 374, 

        "name": "Beldum"

    }, 

    "375": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 375, 

        "name": "Metang"

    }, 

    "376": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 376, 

        "name": "Metagross"

    }, 

    "377": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 377, 

        "name": "Regirock"

    }, 

    "378": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 378, 

        "name": "Regice"

    }, 

    "379": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 379, 

        "name": "Registeel"

    }, 

    "380": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 380, 

        "name": "Latias"

    }, 

    "381": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 381, 

        "name": "Latios"

    }, 

    "382": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 382, 

        "name": "Kyogre"

    }, 

    "383": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 383, 

        "name": "Groudon"

    }, 

    "384": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 384, 

        "name": "Rayquaza"

    }, 

    "387": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 387, 

        "name": "Turtwig"

    }, 

    "388": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 388, 

        "name": "Grotle"

    }, 

    "389": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 389, 

        "name": "Torterra"

    }, 

    "390": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 390, 

        "name": "Chimchar"

    }, 

    "391": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 391, 

        "name": "Monferno"

    }, 

    "392": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 392, 

        "name": "Infernape"

    }, 

    "403": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 403, 

        "name": "Shinx"

    }, 

    "404": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 404, 

        "name": "Luxio"

    }, 

    "405": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 405, 

        "name": "Luxray"

    }, 

    "406": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 406, 

        "name": "Budew"

    }, 

    "407": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 407, 

        "name": "Roserade"

    }, 

    "424": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 424, 

        "name": "Ambipom"

    }, 

    "425": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 425, 

        "name": "Drifloon"

    }, 

    "426": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 426, 

        "name": "Drifblim"

    }, 

    "427": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 427, 

        "name": "Buneary"

    }, 

    "428": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 428, 

        "name": "Lopunny"

    }, 

    "429": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 429, 

        "name": "Mismagius"

    }, 

    "430": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 430, 

        "name": "Honchkrow"

    }, 

    "436": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 436, 

        "name": "Bronzor"

    }, 

    "437": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 437, 

        "name": "Bronzong"

    }, 

    "438": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 438, 

        "name": "Bonsly"

    }, 

    "439": {

        "found_egg": true, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 439, 

        "name": "Mime Jr."

    }, 

    "461": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 461, 

        "name": "Weavile"

    }, 

    "462": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 462, 

        "name": "Magnezone"

    }, 

    "466": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 466, 

        "name": "Electivire"

    }, 

    "467": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 467, 

        "name": "Magmortar"

    }, 

    "468": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 468, 

        "name": "Togekiss"

    }, 

    "469": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 469, 

        "name": "Yanmega"

    }, 

    "470": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 470, 

        "name": "Leafeon"

    }, 

    "471": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 471, 

        "name": "Glaceon"

    }, 

    "472": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 472, 

        "name": "Gliscor"

    }, 

    "473": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 473, 

        "name": "Mamoswine"

    }, 

    "475": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 475, 

        "name": "Gallade"

    }, 

    "477": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 477, 

        "name": "Dusknoir"

    }, 

    "478": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 478, 

        "name": "Froslass"

    }, 

    "487": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 487, 

        "name": "Giratina"

    }, 

    "488": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 488, 

        "name": "Cresselia"

    }, 

    "504": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 504, 

        "name": "Patrat"

    }, 

    "505": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 505, 

        "name": "Watchog"

    }, 

    "506": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 506, 

        "name": "Lillipup"

    }, 

    "507": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 507, 

        "name": "Herdier"

    }, 

    "508": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 508, 

        "name": "Stoutland"

    }, 

    "562": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 562, 

        "name": "Yamask"

    }, 

    "563": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 563, 

        "name": "Cofagrigus"

    }, 

    "599": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": true, 

        "found_research": false, 

        "found_wild": false, 

        "id": 599, 

        "name": "Klink"

    }, 

    "600": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 600, 

        "name": "Klang"

    }, 

    "601": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 601, 

        "name": "Klinklang"

    }, 

    "808": {

        "found_egg": false, 

        "found_evolution": false, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": true, 

        "id": 808, 

        "name": "Meltan"

    }, 

    "809": {

        "found_egg": false, 

        "found_evolution": true, 

        "found_raid": false, 

        "found_research": false, 

        "found_wild": false, 

        "id": 809, 

        "name": "Melmetal"

    }

};
}