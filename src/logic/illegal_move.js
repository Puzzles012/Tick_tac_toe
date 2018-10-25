function icon(ID)
	{
		if (game.currPlayer == 'user')
		{
			$('#' ID).html(game.user);
			$('#' ID).removeAttr('onClick')
			gameStatus();
			setCurrPlayer('computer');
		}
		else if (game.currPlayer == 'computer')
		{
			$('#' ID).html(game.computer);
			$('#' ID).removeAttr('onClick')
			gameStatus();
			setCurrPlayer('user');
		}
		game.move;
		draw();
		
		if(game.currPlayer == 'computer')
		{
			comp();
		}
	}