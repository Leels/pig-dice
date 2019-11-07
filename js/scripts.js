//Backend logic for pig-dice--
function Player(name, totalScore, turnScore, roll, turn) {
  this.name= name,
  this.totalScore= 0,
  this.turnScore= 0,
  this.roll= 0,
  this.turn= false

}

var diceRoll = function() {
  return Math.ceil(6 * Math.random());
}

Player.prototype.rollsOne = function() {
  if (this.roll ===1) {
    this.turnScore = 0;
    alert("Sorry...");
    if (player1.turn === false) {
      player1.turn = true;
      player2.turn = false;
    } else {
      player1.turn = false;
      player2.turn = true;
    }
  } else {
     this.turnScore += this.roll;
     return this.roll;
  }
}

Player.prototype.hold = function() {
  alert("Next player's turn");
  this.totalScore += this.turnScore;
  this.turnScore = 0;
}

Player.prototype.oneHunndred = function() {
  if (this.totalScore >= 100) {
    alert("Congratulations! You are the winner!")
  }
}

var player1 = new Player();
var player2 = new Player();

$(document).ready(function() {

  $("form.form").submit(function(event) {
    event.preventDefault();

    player1.turn = true;

    var player1Name= $("input#player1Name").val();
    var player2Name= $("input#player2Name").val();
    $("#player-1-name-display").text(player1Name);
    $("#player-2-name-display").text(player2Name);


    $("#player-1-roll").click(function(event){
      if (player1.turn === true) {
        player1.roll = diceRoll();
        $("#player-1-dice").text(player1.roll);
        player1.rollsOne();
        $("#player1TurnScore").text(player1.turnScore);
      }
    })

    $("#player-1-hold").click(function(){
      if (player1.turn === true) {
        player1.hold();
        $("#player-1-total-score").text(player1.totalScore);
        $("#player-1-dice").text("");
        $("#player1TurnScore").text("");
        player1.turn = false;
        player2.turn = true;
      }
    })


    $("#player-2-roll").click(function(event){
      if (player2.turn === true) {
        player2.roll = diceRoll();
        $("#player-2-dice").text(player2.roll);
        player2.rollsOne();
        $("#player2TurnScore").text(player2.turnScore);
      }
    })

    $("#player-2-hold").click(function(){
      if (player2.turn === true) {
        player2.hold();
        $("#player-2-total-score").text(player2.totalScore);
        $("#player-2-dice").text("");
        $("#player2TurnScore").text("");
        player1.turn = true;
        player2.turn = false;
      }
    })

    if (player1.turn === true) {
      $(".card").addClass("bg-info");
    }

      $(".gameBoard").show();
      $(".name-form").hide();

  });

});
