function addRow(tableID){
	table = document.getElementById(tableID);
	var i=1;
	for(poke_id in dex){
		let new_row = table.insertRow(i++);
		let col_id = new_row.insertCell(0);
		let col_name = new_row.insertCell(1);
		col_id.appendChild(document.createTextNode(dex[poke_id].id));
		col_name.appendChild(document.createTextNode(dex[poke_id].name));
	}
}

const dex = getDex();
addRow("dex");

function getDex(){
	return {
    "1": {
        "id": 1, 
        "name": "Bulbasaur"
    }, 
    "4": {
        "id": 4, 
        "name": "Charmander"
    }, 
    "7": {
        "id": 7, 
        "name": "Squirtle"
    }, 
    "25": {
        "id": 25, 
        "name": "Pikachu"
    }, 
    "35": {
        "id": 35, 
        "name": "Clefairy"
    }, 
    "37": {
        "id": 37, 
        "name": "Vulpix"
    }, 
    "43": {
        "id": 43, 
        "name": "Oddish"
    }, 
    "54": {
        "id": 54, 
        "name": "Psyduck"
    }, 
    "58": {
        "id": 58, 
        "name": "Growlithe"
    }, 
    "60": {
        "id": 60, 
        "name": "Poliwag"
    }, 
    "63": {
        "id": 63, 
        "name": "Abra"
    }, 
    "66": {
        "id": 66, 
        "name": "Machop"
    }, 
    "72": {
        "id": 72, 
        "name": "Tentacool"
    }, 
    "77": {
        "id": 77, 
        "name": "Ponyta"
    }, 
    "81": {
        "id": 81, 
        "name": "Magnemite"
    }, 
    "84": {
        "id": 84, 
        "name": "Doduo"
    }, 
    "86": {
        "id": 86, 
        "name": "Seel"
    }, 
    "90": {
        "id": 90, 
        "name": "Shellder"
    }, 
    "92": {
        "id": 92, 
        "name": "Gastly"
    }, 
    "95": {
        "id": 95, 
        "name": "Onix"
    }, 
    "100": {
        "id": 100, 
        "name": "Voltorb"
    }, 
    "102": {
        "id": 102, 
        "name": "Exeggcute"
    }, 
    "104": {
        "id": 104, 
        "name": "Cubone"
    }, 
    "111": {
        "id": 111, 
        "name": "Rhyhorn"
    }, 
    "116": {
        "id": 116, 
        "name": "Horsea"
    }, 
    "123": {
        "id": 123, 
        "name": "Scyther"
    }, 
    "124": {
        "id": 124, 
        "name": "Jynx"
    }, 
    "125": {
        "id": 125, 
        "name": "Electabuzz"
    }, 
    "126": {
        "id": 126, 
        "name": "Magmar"
    }, 
    "127": {
        "id": 127, 
        "name": "Pinsir"
    }, 
    "129": {
        "id": 129, 
        "name": "Magikarp"
    }, 
    "133": {
        "id": 133, 
        "name": "Eevee"
    }, 
    "138": {
        "id": 138, 
        "name": "Omanyte"
    }, 
    "140": {
        "id": 140, 
        "name": "Kabuto"
    }, 
    "152": {
        "id": 152, 
        "name": "Chikorita"
    }, 
    "155": {
        "id": 155, 
        "name": "Cyndaquil"
    }, 
    "158": {
        "id": 158, 
        "name": "Totodile"
    }, 
    "170": {
        "id": 170, 
        "name": "Chinchou"
    }, 
    "185": {
        "id": 185, 
        "name": "Sudowoodo"
    }, 
    "190": {
        "id": 190, 
        "name": "Aipom"
    }, 
    "193": {
        "id": 193, 
        "name": "Yanma"
    }, 
    "200": {
        "id": 200, 
        "name": "Misdreavus"
    }, 
    "202": {
        "id": 202, 
        "name": "Wobbuffet"
    }, 
    "203": {
        "id": 203, 
        "name": "Girafarig"
    }, 
    "206": {
        "id": 206, 
        "name": "Dunsparce"
    }, 
    "209": {
        "id": 209, 
        "name": "Snubbull"
    }, 
    "211": {
        "id": 211, 
        "name": "Qwilfish"
    }, 
    "213": {
        "id": 213, 
        "name": "Shuckle"
    }, 
    "215": {
        "id": 215, 
        "name": "Sneasel"
    }, 
    "216": {
        "id": 216, 
        "name": "Teddiursa"
    }, 
    "220": {
        "id": 220, 
        "name": "Swinub"
    }, 
    "226": {
        "id": 226, 
        "name": "Mantine"
    }, 
    "227": {
        "id": 227, 
        "name": "Skarmory"
    }, 
    "231": {
        "id": 231, 
        "name": "Phanpy"
    }, 
    "234": {
        "id": 234, 
        "name": "Stantler"
    }, 
    "252": {
        "id": 252, 
        "name": "Treecko"
    }, 
    "255": {
        "id": 255, 
        "name": "Torchic"
    }, 
    "258": {
        "id": 258, 
        "name": "Mudkip"
    }, 
    "261": {
        "id": 261, 
        "name": "Poochyena"
    }, 
    "273": {
        "id": 273, 
        "name": "Seedot"
    }, 
    "278": {
        "id": 278, 
        "name": "Wingull"
    }, 
    "283": {
        "id": 283, 
        "name": "Surskit"
    }, 
    "285": {
        "id": 285, 
        "name": "Shroomish"
    }, 
    "296": {
        "id": 296, 
        "name": "Makuhita"
    }, 
    "299": {
        "id": 299, 
        "name": "Nosepass"
    }, 
    "300": {
        "id": 300, 
        "name": "Skitty"
    }, 
    "302": {
        "id": 302, 
        "name": "Sableye"
    }, 
    "307": {
        "id": 307, 
        "name": "Meditite"
    }, 
    "309": {
        "id": 309, 
        "name": "Electrike"
    }, 
    "311": {
        "id": 311, 
        "name": "Plusle"
    }, 
    "312": {
        "id": 312, 
        "name": "Minun"
    }, 
    "318": {
        "id": 318, 
        "name": "Carvanha"
    }, 
    "320": {
        "id": 320, 
        "name": "Wailmer"
    }, 
    "322": {
        "id": 322, 
        "name": "Numel"
    }, 
    "325": {
        "id": 325, 
        "name": "Spoink"
    }, 
    "333": {
        "id": 333, 
        "name": "Swablu"
    }, 
    "341": {
        "id": 341, 
        "name": "Corphish"
    }, 
    "343": {
        "id": 343, 
        "name": "Baltoy"
    }, 
    "345": {
        "id": 345, 
        "name": "Lileep"
    }, 
    "347": {
        "id": 347, 
        "name": "Anorith"
    }, 
    "353": {
        "id": 353, 
        "name": "Shuppet"
    }, 
    "355": {
        "id": 355, 
        "name": "Duskull"
    }, 
    "370": {
        "id": 370, 
        "name": "Luvdisc"
    }, 
    "387": {
        "id": 387, 
        "name": "Turtwig"
    }, 
    "390": {
        "id": 390, 
        "name": "Chimchar"
    }, 
    "393": {
        "id": 393, 
        "name": "Piplup"
    }, 
    "399": {
        "id": 399, 
        "name": "Bidoof"
    }
};
}