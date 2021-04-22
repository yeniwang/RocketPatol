class FastStar extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
            super(scene, x, y, texture, frame);

            // add star to existing scene, store point of value
            scene.add.existing(this);
            this.points = pointValue;
    }

    update(speed) {
        

    }
}