/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/sub.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/whale.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function backButtonClicked(event: MouseEvent) {
        stage.removeChild(game);        
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }

    export function instructionState() {
        ocean.update();        
    }

    export function instructions() {
        var nameLabel: objects.Label;
        var instructionLabel: objects.text;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Title
        nameLabel = new objects.Label(stage.canvas.width / 2, 40, "Instructions");
        game.addChild(nameLabel);

        // Display Instructions
        instructionLabel = new objects.text(stage.canvas.width / 2, 100, "v");
        game.addChild(instructionLabel);

        // Display back Button
        backButton = new objects.Button(stage.canvas.width / 2, 375, "backButton");
        game.addChild(backButton);
        backButton.addEventListener("click", backButtonClicked);

        stage.addChild(game);
    }
} 