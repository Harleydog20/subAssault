﻿module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "ocean", src: "assets/images/ocean.png" },
        { id: "engine1", src: "assets/sounds/engine.ogg" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [620, 2, 100, 48],
            [2, 2, 204, 60],
            [208, 2, 204, 59],
            [414, 2, 204, 59],
            [722, 31, 62, 27],
            [722, 2, 63, 27],
            [786, 31, 62, 27]
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
        /*"frames": [
            [2, 2, 226, 178],
            [230, 2, 211, 69],
            [443, 69, 62, 63],
            [443, 2, 65, 65],
            [230, 73, 211, 69],
            [230, 144, 211, 69]
        ],
        "animations": {
            "cloud": [0],
            "instructionsButton": [1],
            "island": [2],
            "plane": [3],
            "playButton": [4],
            "tryAgainButton": [5]
        }
        */
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