function icon(ID)
	{
		if (game.curPlayer == 'playerX')
		{
			$('#' ID).html(game.playerX);
			$('#' ID).removeAttr('onClick')
			gameStatus();
			setCurPlayer('playerO');
		}
		else if (game.curPlayer == 'playerO')
		{
			$('#' ID).html(game.playerO);
			$('#' ID).removeAttr('onClick')
			gameStatus();
			setCurPlayer('playerX');
		}
		game.move;
		draw();
		
		if(game.curPlayer == 'playerO')
		{
			comp();
		}
	}