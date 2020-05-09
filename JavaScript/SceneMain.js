class SceneMain extends Phaser.Scene {
    constructor() {
        super({key: "SceneMain"});
    }

    init(data) {
        this.passingData = data;
    }

    preload() {
        this.load.image("sprPlayer", "Content/sprPlayer.png");
        this.load.spritesheet("sprEnemy0", "Content/sprEnemy0.png", {
            frameWidth: 8,
            frameHeight: 8
        });
        this.load.image("sprShieldTile", "Content/sprShieldTile.png");
        this.load.image("sprLaserEnemy", "Content/sprLaserEnemy.png");
        this.load.image("sprLaserPlayer", "Content/sprLaserPlayer.png");
        this.load.spritesheet("sprExplosion", "Content/sprExplosion.png", {
            frameWidth: 8,
            frameHeight: 8
        });
        this.load.audio("sndExplode", "Content/sndExplode.wav");
        this.load.audio("sndLaserPlayer", "Content/sndLaserPlayer.wav");
        this.load.audio("sndLaserEnemy", "Content/sndLaserEnemy.wav");
    }

    create() {
    }
}