module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "ocean", src: "assets/images/ocean.png" },
        { id: "startMusic", src: "assets/sounds/startScreen.wav" },
        { id: "playMusic", src: "assets/sounds/playScreen.wav" },
        { id: "gameOverMusic", src: "assets/sounds/gameOverScreen.wav" },
        { id: "bossMusic", src: "assets/sounds/bossScreen.wav" },
        { id: "coinSound", src: "assets/sounds/coin.wav" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [620, 2, 100, 48],
            [2, 2, 204, 60],
            [208, 2, 204, 59],
            [414, 2, 204, 59],
            [722, 2, 93, 41],
            [817, 2, 93, 41],
            [912, 2, 93, 41]
        ],
        "animations": {
            "sub": [0],
            "whale": {
                frames: [5, 6, 5, 4],
                speed: 0.2
            },
            "island": [0],
            "instructionsButton": [1],
            "playButton": [2],
            "tryAgainButton": [3]
        }
       
    }

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        }

    }
} 