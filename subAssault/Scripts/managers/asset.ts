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
            [419, 63, 100, 48],             
            [2, 84, 30, 32],
            [34, 84, 30, 32],
            [66, 84, 30, 32],
            [98, 84, 30, 32],
            [130, 84, 30, 32],
            [162, 84, 30, 32],
            [616, 88, 30, 32],
            [648, 88, 30, 32],
            [194, 84, 17, 32],
            [680, 88, 17, 32],
            [699, 88, 17, 32],
            [213, 2, 204, 60],
            [213, 64, 204, 59],
            [419, 2, 204, 59],
            [625, 2, 93, 41],
            [625, 45, 93, 41],
            [521, 63, 93, 41],
            [2, 2, 209, 80]
        ],
        "animations": {
            "Submarine": [0],
            "coin": {
                frames: [1, 2, 3, 4, 5, 6, 7, 8],
                speed: 0.5
            },
            "crystal": {
                frames: [9, 10, 11],
                speed: 0.1
            },
            "instructionButton": [12],
            "playButton": [13],
            "tryAgainButton": [14],
            "whale": {
                frames: [16, 17, 16, 15],
                speed: 0.2
            },
            "backButton": [18]          
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