const whoWon = require("../RPS.js");

describe("whoWon", function(){

    test("Testing if both players choose the same thing the game is a tie.", function() {
        let result = whoWon("paper","paper");
        expect(result).toBe("TIE!");
    });
    test("If P1 chooses rock and P2 chooses paper, P2 wins.", function() {
        let result = whoWon("rock","paper");
        expect(result).toBe("Player 2 wins!");
    });
    test("If P1 chooses paper and P2 chooses scissors, P2 wins.", function() {
        let result = whoWon("paper","scissors");
        expect(result).toBe("Player 2 wins!");
    });
    test("If P1 chooses scissors and P2 chooses paper, P2 wins.", function() {
        let result = whoWon("scissors","rock");
        expect(result).toBe("Player 2 wins!");
    });

})