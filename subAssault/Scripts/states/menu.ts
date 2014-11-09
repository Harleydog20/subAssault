/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/sub.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/whale.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {    
    export function playButtonClicked(event: MouseEvent) {
        //this.music.stop();
        stage.removeChild(game);        
        for (var count = 0; count < constants.WHALE_NUM; count++) {
            whales[count].destroy();
        }        
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function menuState() {
        ocean.update();
        for (var count = 0; count < constants.WHALE_NUM; count++) {
            whales[count].update();
        }
    }

    export function menu() {
        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        //Add background music
        music: createjs.SoundInstance;
        this.music = createjs.Sound.play('startMusic', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        for (var count = 0; count < constants.WHALE_NUM; count++) {
            whales[count] = new objects.Whale(stage, game);
        }

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "SUB ASSAULT");
        game.addChild(gameNameLabel);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 300, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
} 