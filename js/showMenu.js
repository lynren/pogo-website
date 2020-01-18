function showMenu(x){
	menu = document.getElementById("mobile_dropdown");
	x.classList.toggle("change");
	console.log("initial menu style: " + menu.style.display);

	if (menu.style.display === "none"){
		menu.style.display = "block";
		console.log("switched to block");
	}
	else{
		menu.style.display = "none";
		console.log("switched to none");
	}
}