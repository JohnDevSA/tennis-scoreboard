class TennisGame {
    constructor(player1Name = "Player 1", player2Name = "Player 2") {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.player1Score = 0;
        this.player2Score = 0;
        this.gameComplete = false;
    }

    static scoreMapping(score) {
        const scores = ["Love", "Fifteen", "Thirty", "Forty"];
        return scores[score];
    }

    player1Point() {
        if (!this.isComplete()) {
            this.player1Score++;
        }
    }

    player2Point() {
        if (!this.isComplete()) {
            this.player2Score++;
        }
    }

    setPlayersNames(player1Name, player2Name) {
        // Update the names of the players
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }


    isComplete() {
        if (this.gameComplete) return true;
        if (this.player1Score >= 4 || this.player2Score >= 4) {
            if (Math.abs(this.player1Score - this.player2Score) >= 2) {
                this.gameComplete = true;
            }
        }
        return this.gameComplete;
    }

    scoreboard() {
        if (this.isComplete()) {
            return this.player1Score > this.player2Score
                ? "Won by Player 1"
                : "Won by Player 2";
        }

        if (this.player1Score >= 3 && this.player2Score >= 3) {
            if (this.player1Score === this.player2Score) {
                return "Deuce";
            }
            return this.player1Score > this.player2Score
                ? "Advantage Player 1"
                : "Advantage Player 2";
        }

        if (this.player1Score === this.player2Score) {
            return `${TennisGame.scoreMapping(this.player1Score)} All`;
        }

        return `${TennisGame.scoreMapping(this.player1Score)}-${TennisGame.scoreMapping(this.player2Score)}`;
    }

    getPlayer1Name() {
        return this.player1Name;
    }

    getPlayer2Name() {
        return this.player2Name;
    }
}

export default TennisGame;