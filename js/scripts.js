//Backend logic for pig-dice--
var player1 = "";
var player2 = "";

function Game() {
  this.players = []
}

function Player(name, totalScore, turnScore, roll, turn) {
  this.name= name,
  this.totalScore= totalScore,
  this.turnScore= 0,
  this.roll= 0,
  this.turn= turn

}

var diceRoll = function() {
  return Math.ceil(6 * Math.random());
}

Player.prototype.rollsOne = function() {
  if (this.roll ===1) {
    this.turnScore = 0;
    alert("Sorry...");
  } else {
    return this.turnScore += this.roll;
  }
}

Player.prototype.hold = function() {
  return this.turnScore += this.totalScore
  alert("Next player's turn");
}

Player.prototype.oneHunndred = function() {
  if (this.totalScore >= 100) {
    alert("Congratulations! You are the winner!")
  }
  }

var game = new Game();


// Math.ceil(6 * Math.random())
// current-player-turn
// player-1-score
// player-1-button
// player-1-last-roll
// player-2-score
// player-2-button
// player-2-last-roll

$(document).ready(function() {

  $("form.form").submit(function(event) {
    event.preventDefault();
    var player1Name= $("input#player1Name").val();
    var player1Name= $("input#player2Name").val();

    $("#player-1-roll").click(function(){
      player1.roll = diceRoll
    })




  });

});
