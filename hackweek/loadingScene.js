

class loadingScene extends Phaser.Scene{
	
	constructor(){
		super("loadGame");
	}
	
	create(){
		this.add.test.(20,20, "loading game....", {font: "25px Arial", fill:"yellow"});
	}
	
}
