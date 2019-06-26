
class titleScene extends Phaser.Scene{
	
	constructor(){
		super("bootGame");
	}
	
	create(){
		
		this.add.text(20, 20, "TESTING");
		this.scene.start("loadGame");
		
	}
	
}