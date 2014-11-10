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
            [832, 2, 100, 48],
            [1219, 2, 30, 32],
            [1251, 2, 30, 32],
            [1283, 2, 30, 32],
            [1315, 2, 30, 32],
            [1347, 2, 30, 32],
            [1379, 2, 30, 32],
            [1411, 2, 30, 32],
            [1443, 2, 30, 32],
            [620, 2, 51, 51],
            [673, 2, 51, 51],
            [726, 2, 51, 51],
            [779, 2, 51, 51],
            [2, 2, 204, 60],
            [208, 2, 204, 59],
            [414, 2, 204, 59],
            [934, 2, 93, 41],
            [1029, 2, 93, 41],
            [1124, 2, 93, 41]
        ],
        "animations": {
            "Submarine": [0],
            "coin": {
                frames: [1, 2, 3, 4, 5, 6, 7, 8],
                speed: 0.5
            },
            "explosion": {
                frames: [9, 10, 11, 12],
                speed: 1
            },
            "instructionButton": [13],
            "playButton": [14],
            "tryAgainButton": [15],
            "whale": {
                frames: [17, 18, 17, 16],
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