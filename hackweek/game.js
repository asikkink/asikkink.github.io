
window.onload = function(){
	
	
	var config = {
		width: 1189,
		height: 861,
		backgroundColor: 0x000000,
		scene: [titleScene, loadingScene, gameScene, gameOverScene]
	}
	
	var game = new Phaser.Game(config);
}
