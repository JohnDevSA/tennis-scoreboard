import { describe, beforeEach, expect, test } from 'vitest'

describe('TennisGame Class', () => {
    let game;

    beforeEach(() => {
        game = new TennisGame('Player 1', 'Player 2');
    });

    test('should initialize with player names and zero scores', () => {
        expect(game.getPlayer1Name()).toBe('Player 1');
        expect(game.getPlayer2Name()).toBe('Player 2');
        expect(game.player1Score).toBe(0);
        expect(game.player2Score).toBe(0);
        expect(game.isComplete()).toBe(false);
    });

    test('should increment player1 score', () => {
        game.player1Point();
        expect(game.player1Score).toBe(1);
        expect(game.scoreboard()).toBe('Fifteen-Love');
    });

    test('should increment player2 score', () => {
        game.player2Point();
        expect(game.player2Score).toBe(1);
        expect(game.scoreboard()).toBe('Love-Fifteen');
    });

    test('should display Deuce when both players have 3 points', () => {
        for (let i = 0; i < 3; i++) {
            game.player1Point();
            game.player2Point();
        }
        expect(game.scoreboard()).toBe('Deuce');
    });

    test('should display Advantage for player1 when they have one more point than player2 after Deuce', () => {
        for (let i = 0; i < 3; i++) {
            game.player1Point();
            game.player2Point();
        }
        game.player1Point();
        expect(game.scoreboard()).toBe('Advantage Player 1');
    });

    test('should mark game as complete when a player wins with at least 2 points lead', () => {
        for (let i = 0; i < 4; i++) {
            game.player1Point();
        }
        expect(game.scoreboard()).toBe('Won by Player 1');
        expect(game.isComplete()).toBe(true);
    });

    test('should not allow more points to be scored after the game is complete', () => {
        for (let i = 0; i < 4; i++) {
            game.player1Point();
        }
        game.player1Point();
        expect(game.player1Score).toBe(4);
        expect(game.isComplete()).toBe(true);
    });
});
