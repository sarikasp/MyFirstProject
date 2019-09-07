//  var newGame = document.querySelector('[class=btn-new]');
//  console.log(newGame);
//  var rollDice = document.querySelector('[class=btn-roll]');
//  var hold = document.querySelector('[class=btn-hold]');
// var scores = [0,1];
// var img = document.querySelector('[class=dice]');


// var scoreBox1 = document.getElementById("score-0");
// //console.log(scoreBox1);
// scoreBox1.textContent = " ";


// var scoreBox2 = document.getElementById("score-1");
// //console.log(scoreBox2);
// scoreBox2.textContent = " ";


// var scoreBox3 = document.getElementById("current-0");
// //console.log(scoreBox3);
// scoreBox3.textContent = " ";

var scores,roundScore,activePlayer,gamePlaying;
init();

document.querySelector('.btn-roll').addEventListener('click' , () =>
{
	//if(gamePlaying)
		//{
			var dice = Math.floor(Math.random() * 6 )+1;
			console.log(dice);
			var diceDom = document.querySelector('.dice');
			diceDom.style.display ='block';
			diceDom.src = 'dice-' + dice + '.png' ;
		//}

});














function init()
{
	scores = [0,0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none'; //<img>
	document.getElementById('score-0').textContent = "0";// <div> 43
	document.getElementById('score-1').textContent = "0"; // <div> 72
	document.getElementById('current-0').textContent = "0"; // <div> 11
	document.getElementById('current-1').textContent = "0"; // <div> 0
	document.getElementById('current-0').textContent = "0"; // <div> 11
	document.getElementById('name-0').textContent = "Player1"; //player1
	document.getElementById('name-1').textContent = "Player2"; //player2
	document.querySelector('.player-0-panel').classList.remove('winner');//
	document.querySelector('.player-1-panel').classList.remove('winner');//
	document.querySelector('.player-0-panel').classList.remove('active');//
	document.querySelector('.player-1-panel').classList.remove('active');//
	document.querySelector('.player-0-panel').classList.add('active');//


}






















