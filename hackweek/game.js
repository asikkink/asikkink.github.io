
window.onload = function(){
	
	
	var config = {
		width: 1418,
		height: 756,
		backgroundColor: 0x000000,
		scene: [titleScene, loadingScene, gameScene, gameOverScene]
	}
	
	var game = new Phaser.Game(config);
}
