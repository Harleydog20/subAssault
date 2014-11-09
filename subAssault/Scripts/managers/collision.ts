/// <reference path="../objects/whale.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/sub.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private sub: objects.Sub;
        private island: objects.Island;
        private whales = [];
        private scoreboard: objects.Scoreboard;

        constructor(sub: objects.Sub, island: objects.Island, whales, scoreboard: objects.Scoreboard) {
            this.sub = sub;
            this.island = island;
            this.whales = whales;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between sub and any whale object
        private subAndWhale(whale: objects.Whale) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.sub.image.x;
            p1.y = this.sub.image.y;
            p2.x = whale.image.x;
            p2.y = whale.image.y;
            if (this.distance(p1, p2) < ((this.sub.height / 2) + (whale.height / 2))) {
                createjs.Sound.play("thunder");
                this.scoreboard.lives -= 1;
                whale.reset();
            }
        }

        // check collision between plane and island
        private subAndIsland() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.sub.image.x;
            p1.y = this.sub.image.y;
            p1.y = this.sub.image.y;
            p2.x = this.island.image.x;
            p2.y = this.island.image.y;
            if (this.distance(p1, p2) < ((this.sub.height / 2) + (this.island.height / 2))) {
                createjs.Sound.play("yay");
                this.scoreboard.score += 100;
                this.island.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.WHALE_NUM; count++) {
                this.subAndWhale(this.whales[count]);
            }
            this.subAndIsland();
        }
    }
} 