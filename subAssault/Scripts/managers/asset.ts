module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "ocean", src: "assets/images/ocean.png" },
        { id: "startMusic", src: "assets/sounds/startScreen.wav" },
        { id: "playMusic", src: "assets/sounds/playScreen.wav" },
        { id: "gameOverMusic", src: "assets/sounds/gameOverScreen.wav" },
        { id: "bossMusic", src: "assets/sounds/bossScreen.wav" },
        { id: "coinSound", src: "assets/sounds/coin.wav" },
        { id: "explosionSound", src: "assets/sounds/Explosion.wav" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [620, 2, 100, 48],
            [1007, 2, 30, 32],
            [1039, 2, 30, 32],
            [1071, 2, 30, 32],
            [1103, 2, 30, 32],
            [1135, 2, 30, 32],
            [1167, 2, 30, 32],
            [1199, 2, 30, 32],
            [1231, 2, 30, 32],
            [1263, 2, 17, 32],
            [1282, 2, 17, 32],
            [1301, 2, 17, 32],
            [2, 2, 204, 60],
            [208, 2, 204, 59],
            [414, 2, 204, 59],
            [722, 2, 93, 41],
            [817, 2, 93, 41],
            [912, 2, 93, 41]
        ],
        "animations": {
            "Submarine": [0],
            "coin": {
                frames: [1, 2, 3, 4, 5, 6, 7, 8],
                speed: 0.5
            },
            "x": {
                frames: [9, 10, 11],
                speed: 0.1
            },
            "instructionButton": [12],
            "playButton": [13],
            "tryAgainButton": [14],
            "whale": {
                frames: [16, 17, 16, 15],
                speed: 0.2
            }            
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