addRow("balls", getBalls());
addRow("heals", getHeal());
addRow("berries", getBerry());
addRow("evo", getEvo());
addRow("lures", getLure());
addRow("passes", getPass());
addRow("eggs", getEgg());
addRow("misc", getMiscItems());

function addRow(tableID, items){
	var table = document.getElementById(tableID);
	var i=1; //table row counter
	for(item in items){
		let new_row = table.insertRow(i++);

		let col_icon = new_row.insertCell(0);
		let icon = document.createElement("img");
		icon.setAttribute("src", items[item].icon);
		//set alt text
		icon.setAttribute("alt", items[item].name);
		col_icon.appendChild(icon);

		let col_name = new_row.insertCell(1);
		col_name.appendChild(document.createTextNode(items[item].name));

		let col_drop_rate = new_row.insertCell(2);
		col_drop_rate.appendChild(document.createTextNode(items[item].drop_rate));

		let col_description_ = new_row.insertCell(3);
		col_description_.appendChild(document.createTextNode(items[item].description_));

		let col_level = new_row.insertCell(4);
		col_level.appendChild(document.createTextNode(items[item].unlock_level));
	}
}

function getBalls(){
	return {
		"pokeball":{
			"name": "Pokeball",
			"icon": "images/icons/pokeball.png",
			"drop_rate": "48.36%",
			"description_": "Used to catch wild Pokémon.",
			"unlock_level": "1"
		},
		"great_ball":{
			"name": "Great Ball",
			"icon": "images/icons/great_ball.png",
			"drop_rate": "13.93%",
			"description_": "Used to catch wild pokemon with a greater chance of success.",
			"unlock_level": "12"
		},
		"ultra_ball":{
			"name": "Ultra Ball",
			"icon": "images/icons/ultra_ball.png",
			"drop_rate": "2.36%",
			"description_": "Used to catch wild pokemon with the highest chance of success.",
			"unlock_level": "20"
		},
		"premier_ball":{
			"name": "Premier Ball",
			"icon": "images/icons/premier_ball.webp",
			"drop_rate": "Reward",
			"description_": "A special type of Pokeball for capturing a Raid Boss in the Bonus Challenge after defeating it in a Raid Battle.",
			"unlock_level": "5"
		}
	};
}

function getHeal(){
	return{
		"potion":{
			"name": "Potion",
			"icon": "images/icons/potion.webp",
			"drop_rate": "1.75%",
			"description_": "A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 20 points.",
			"unlock_level": "5"
		},
		"super_potion":{
			"name": "Super Potion",
			"icon": "images/icons/super_potion.webp",
			"drop_rate": "0.88%",
			"description_": "A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 50 points.",
			"unlock_level": "10"
		},
		"hyper_potion":{
			"name": "Hyper Potion",
			"icon": "images/icons/hyper_potion.webp",
			"drop_rate": "0.09%",
			"description_": "A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 200 points.",
			"unlock_level": "15"
		},
		"max_potion":{
			"name": "Max Potion",
			"icon": "images/icons/max_potion.webp",
			"drop_rate": "0.09%",
			"description_": "A spray-type medicine for treating wounds. It will completely restore the max HP of a single Pokémon.",
			"unlock_level": "25"
		},
		"revive":{
			"name": "Revive",
			"icon": "images/icons/revive.webp",
			"drop_rate": "0.53%",
			"description_": "A medicine that can revive fainted Pokémon. It also fully restores half of a fainted Pokémon's maximum HP.",
			"unlock_level": "5"
		},
		"max_revive":{
			"name": "Max Revive",
			"icon": "images/icons/max_revive.webp",
			"drop_rate": "0.09%",
			"description_": "A medicine that can revive fainted Pokémon. It also fully restores a fainted Pokémon's maximum HP.",
			"unlock_level": "30"
		}

	};
}

function getBerry(){
	return {
		"razz_berry":{
			"name": "Razz Berry",
			"icon": "images/icons/razz_berry.png",
			"drop_rate": "7.64%",
			"description_": "Increases catch rate when fed to a wild Pokémon.",
			"unlock_level": "8"
		},
		"nanab_berry":{
			"name": "Nanab Berry",
			"icon": "images/icons/nanab_berry.png",
			"drop_rate": "3.51%",
			"description_": "Slows the Pokémon's movement, making it easier to catch.",
			"unlock_level": "8"
		},
		"pinap_berry":{
			"name": "Pinap Berry",
			"icon": "images/icons/pinap_berry.png",
			"drop_rate": "3.17%",
			"description_": "Doubles the amount of candy you'll receive if your next catch attempt succeeds.",
			"unlock_level": "8"
		},
		"golden_razz_berry":{
			"name": "Razz Berry",
			"icon": "images/icons/golden_razz_berry.png",
			"drop_rate": "Reward",
			"description_": "Greatly increases catch rate when fed to a wild Pokémon.",
			"unlock_level": "20"
		},
		"silver_pinap_berry":{
			"name": "Silver Pinap Berry",
			"icon": "images/icons/silver_pinap.webp",
			"drop_rate": "Reward",
			"description_": "Increases catch rate and doubles the amount of candy you'll receive if your next catch attempt succeeds.",
			"unlock_level": "20"
		}
	};
}

function getEvo(){
	return {
		"dragon_scale":{
			"name": "Dragon Scale",
			"icon": "images/icons/dragon_scale.webp",
			"drop_rate": "0.01%",
			"description_": "A scale that can make certain species of Pokémon evolve. It is very tough and inflexible.",
			"unlock_level": "1"
		},
		"sun_stone":{
			"name": "Sun Stone",
			"icon": "images/icons/sun_stone.webp",
			"drop_rate": "0.02%",
			"description_": "A peculiar stone that can make certain species of Pokémon evolve. It burns as red as the evening sun.",
			"unlock_level": "1"
		},
		"kings_rock":{
			"name": "King's Rock",
			"icon": "images/icons/kings_rock.webp",
			"drop_rate": "0.02%",
			"description_": "A rock that can make certain species of Pokémon evolve. It looks like a crown.",
			"unlock_level": "1"
		},
		"metal_coat":{
			"name": "Metal Coat",
			"icon": "images/icons/metal_coat.webp",
			"drop_rate": "0.02%",
			"description_": "A coating that can make certain species of Pokémon evolve. It is a special metallic film.",
			"unlock_level": "1"
		},
		"upgrade":{
			"name": "Up-Grade",
			"icon": "images/icons/upgrade.webp",
			"drop_rate": "0.01%",
			"description_": "A transparent device that can make certain species of Pokémon evolve. It was produced by Silph Co.",
			"unlock_level": "1"
		},
		"sinnoh_stone":{
			"name": "Sinnoh Stone",
			"icon": "images/icons/sinnoh_stone.webp",
			"drop_rate": "Reward",
			"description_": "A special stone originally found in the Sinnoh region that can make certain species of Pokémon evolve. It is very tough and has a beautiful sheen.",
			"unlock_level": "1"
		},
		"unova_stone":{
			"name": "Unova Stone",
			"icon": "images/icons/unova_stone.webp",
			"drop_rate": "Reward",
			"description_": "A rare stone that originates from the Unova region that can make certain species of pokemon evolve. It is known for its intertwined black-and-white appearance.",
			"unlock_level": "1"
		}
	};
}

function getEgg(){
	return{
		"unlimited_incubator":{
			"name": "Unlimited Incubator",
			"icon": "images/icons/unlimited_incubator.webp",
			"drop_rate": "Default item",
			"description_": "Default incubator of orange color. This incubator has unlimited uses.",
			"unlock_level": "1"
		},
		"limited_incubator":{
			"name": "Limited Incubator",
			"icon": "images/icons/limited_incubator.webp",
			"drop_rate": "Reward",
			"description_": "An incubator of blue color. This incubator has 3 uses.",
			"unlock_level": "1"
		},
		"super_incubator":{
			"name": "Super Incubator",
			"icon": "images/icons/super_incubator.webp",
			"drop_rate": "Reward",
			"description_": "An incubator with a purple appearance. This incubator has 3 uses and hatches an Egg much faster.",
			"unlock_level": "1"
		}
	};
}

function getPass(){
	return{
		"raid_pass":{
			"name": "Raid Pass",
			"icon": "images/icons/raid_pass.webp",
			"drop_rate": "1/day",
			"description_": "Used to participate in a Raid Battle.",
			"unlock_level": "20"
		},
		"praid_pass":{
			"name": "Premium Raid Pass",
			"icon": "images/icons/praid_pass.webp",
			"drop_rate": "Item Shop",
			"description_": "Used to participate in a Raid Battle.",
			"unlock_level": "20"
		},
		"ex_raid_pass":{
			"name": "EX Raid Pass",
			"icon": "images/icons/ex_raid_pass.webp",
			"drop_rate": "Random",
			"description_": "Used to participate in an EX Raid Battle.",
			"unlock_level": "20"
		}
	};
}

function getLure(){
	return{
		"lure_module":{
			"name": "Lure Module",
			"icon": "images/icons/lure_module.webp",
			"drop_rate": "Reward",
			"description_": "A module that attracts Pokémon to a Pokéstop for 30 minutes. The effect benefits other people nearby.",
			"unlock_level": "1"
		},
		"glacial_lure_module":{
			"name": "Lure Module",
			"icon": "images/icons/glacial_lure_module.webp",
			"drop_rate": "Reward",
			"description_": "A module that attracts Ice and Water type Pokémon to a Pokéstop for 30 minutes. It allows Eevee to evolve into Glaceon. The effect benefits other people nearby.",
			"unlock_level": "1"
		},
		"magnetic_lure_module":{
			"name": "Lure Module",
			"icon": "images/icons/magnetic_lure_module.webp",
			"drop_rate": "Reward",
			"description_": "A module that attracts Electric, Rock, and Steel type Pokémon to a Pokéstop for 30 minutes. It allows Magneton and Nosepass to evolve into Magnezone and Probopass respectively. The effect benefits other people nearby.",
			"unlock_level": "1"
		},
		"mossy_lure_module":{
			"name": "Lure Module",
			"icon": "images/icons/mossy_lure_module.webp",
			"drop_rate": "Reward",
			"description_": "A module that attracts Bug, Grass, and Poison type Pokémon to a Pokéstop for 30 minutes. It allows Eevee to evolve into Leafeon. The effect benefits other people nearby.",
			"unlock_level": "1"
		},
	};
}

function getMiscItems(){
	return{
		"fast_tm":{
			"name": "Fast TM",
			"icon": "images/icons/fast_tm.webp",
			"drop_rate": "Reward",
			"description_": "This Technical Machine teaches the Pokémon a new fast attack.",
			"unlock_level": "1"
		},
		"charged_tm":{
			"name": "Charged TM",
			"icon": "images/icons/charged_tm.webp",
			"drop_rate": "Reward",
			"description_": "This Technical Machine teaches the Pokémon a new charged attack.",
			"unlock_level": "1"
		},
		"rare_candy":{
			"name": "Rare Candy",
			"icon": "images/icons/rare_candy.webp",
			"drop_rate": "Reward",
			"description_": "A mysterious candy. When used on a Pokémon, it turns into the Pokémon's candy.",
			"unlock_level": "1"
		},
		"gift":{
			"name": "Gift",
			"icon": "images/icons/gift.webp",
			"drop_rate": "Reward",
			"description_": "A box that can be sent to a friend. Contains a variety of useful items.",
			"unlock_level": "1"
		},
		"incense":{
			"name": "Incense",
			"icon": "images/icons/incense.webp",
			"drop_rate": "Reward",
			"description_": "Incense with a mysterious fragrance that lures wild Pokémon to your location for 30 minutes.",
			"unlock_level": "1"
		},
		"lucky_egg":{
			"name": "Lucky Egg",
			"icon": "images/icons/lucky_egg.webp",
			"drop_rate": "Reward",
			"description_": "A Lucky Egg that's filled with happiness! Earns double XP for 30 minutes.",
			"unlock_level": "1"
		},
		"star_piece":{
			"name": "Star Piece",
			"icon": "images/icons/star_piece.webp",
			"drop_rate": "Reward",
			"description_": "A small shard of a beautiful gem. Earns 50% more stardust for 30 minutes.",
			"unlock_level": "1"
		},
		"camera":{
			"name": "Camera",
			"icon": "images/icons/camera.webp",
			"drop_rate": "Default item",
			"description_": "A device to capture photos of Pokémon. Photos can be shared with others.",
			"unlock_level": "1"
		},
		"mystery_box":{
			"name": "Mystery Box",
			"icon": "images/icons/mystery_box.webp",
			"drop_rate": "Reward",
			"description_": "A mysterious old box. Opening it causes a certain Pokémon to appear for a limited time. Trainers will receive a Mystery Box upon transferring a Pokémon to Pokémon: Let's Go on Nintendo Switch.",
			"unlock_level": "1"
		},
		"team_medallion":{
			"name": "Team Medallion",
			"icon": "images/icons/team_medallion.webp",
			"drop_rate": "Shop",
			"description_": "A unique coin that enables a Trainer to change teams. It can only be purchased from the shop once per 365 days.",
			"unlock_level": "1"
		},
		"ticket":{
			"name": "Ticket",
			"icon": "images/icons/ticket.webp",
			"drop_rate": "Purchasable",
			"description_": "This ticket will automatically activate to give you access to a special event on $FUTURE_DATE, wherever you are in the world.",
			"unlock_level": "1"
		}
	};
}