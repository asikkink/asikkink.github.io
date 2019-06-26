

class loadingScene extends Phaser.Scene{
	
	constructor(){
		super("loadGame");
	}
	
	create(){
		this.add.text(20,20, "loading game....", {font: "25px Arial", fill:"yellow"});
		this.background = this.add.image(0,0,"background");
		this.background.setOrigin(0,0);
		
		this.msg1 = this.add.image(config.width/2, config.height/2, "test-msg");
		
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		game.scale.refresh();
	}
	
}
