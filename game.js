class Game {
    constructor(){
        this.player1 = new Player('player1', shark, 0);
        this.player2 = new Player('player2', dino, 0);
        this.gameboard = ["dino", "dino", "dino", "", "", "", "", "", ""];
        this.turn = player1;
        this.winConditions = [[0, 1, 2], [0, 3, 6], ];
        
    }
checkForWin(){

   for (var i = 0; i < this.gameboard.winConditions.length; i ++) {
    var first = this.winConditions[i][0];
    var second = this.winConditions[i][1];
    var third = this.winConditions[i][2];

    if (this.gameboard[first] === this.gameboard[second] && this.gameboard[second] === this.gameboard[third]){
        
        return `${this.turn} wins!`
        // update turn value, last turn wins
    }
   }
}

// method: clear board somehow
}


// need method for rotating turns

// if not win, else is DRAW!

// a Game should include:
// two player instances w/ tokens, starting player
// way to keep track of data for game board
// way to check Game's board data for win conditions
// way to detect when game is a draw
// way to reset the Game's board to begin a new game


// need 9 box elements, win patterns, draw patterns 