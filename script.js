
var isActive = true;

function startNewGame (){
    location.reload()
};


function rollDice () {

 dice = Math.floor(Math.random()*6+1);
 
 if(isActive) {
		if (dice == 1) {
			switchPlayer();
		}
		else {
			document.getElementById("current_1").innerHTML = 
            Number(document.getElementById("current_1").innerHTML) + dice;
		}
	}
	else {
		if (dice == 1) {
			switchPlayer()
		}
		else {
			document.getElementById("current_2").innerHTML = 
            Number(document.getElementById("current_2").innerHTML) + dice;
		}

	}

  // if (dice !== 1) {
 // document.getElementById("current_1").innerHTML = 
 // Number(document.getElementById("current_1").innerHTML) + dice;
// }
 // else  {
 	// document.getElementById("current_1").innerHTML = 0

 // }
 document.getElementById("dice").src = `images/dice-${dice}.png`
};






// 	var sumCurrent = Number(document.getElementById("current_1").innerHTML);
 
// document.getElementById("score_1").innerHTML = 
// Number(document.getElementById("score_1").innerHTML) + sumCurrent;
// current_1.innerHTML = 0;

// if (Number(document.getElementById("score_1").innerHTML) >= 100) {
// 	document.getElementById("name_1").innerHTML = "winner!";

// 	document.querySelector(".btn-roll_dice").disabled = true;
// 	document.querySelector(".btn-hold").disabled = true;

// }

function hold() {

if (isActive) {
   var sumCurrent = document.getElementById("current_1");
	document.getElementById("score_1").innerHTML = 
	Number(document.getElementById("score_1").innerHTML) + Number(sumCurrent.innerHTML);
	current_1.innerHTML = 0;

	if (Number(document.getElementById("score_1").innerHTML) >= 100) {
        document.getElementById("name_1").innerHTML = "winner!";
         document.getElementById("name_1").style.color = "red";
    }

switchPlayer();
}

else {
	var sumCurrent = document.getElementById("current_2");
	document.getElementById("score_2").innerHTML = 
	Number(document.getElementById("score_2").innerHTML) + Number(sumCurrent.innerHTML);
	current_2.innerHTML = 0;

	if (Number(document.getElementById("score_2").innerHTML) >= 100) {
      document.getElementById("name_2").innerHTML = "winner!";
      document.getElementById("name_2").style.color = "red";
}
switchPlayer();
}

};




function switchPlayer () {

	if (isActive)
	{	isActive = false;
		document.getElementById('current_1').innerHTML == 0;
		document.querySelector('.player-1-left').classList.remove('isActive');
		document.querySelector('.player-2-right').classList.add('isActive');

}
 else {
 		isActive = true;
 		document.getElementById('current_1').innerHTML == 0;
		document.querySelector('.player-2-right').classList.remove('isActive');
		document.querySelector('.player-1-left').classList.add('isActive');
 }
};


