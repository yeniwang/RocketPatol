let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;

/*Points Breakdown:
Display the time remaining (in seconds) on the screen (10)
Add your own (copyright-free) background music to the Play scene (5)
Create 4 new explosion SFX and randomize which one plays on impact (10)
Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
*/