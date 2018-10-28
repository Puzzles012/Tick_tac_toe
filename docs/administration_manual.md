# Adminstration manual #

## Introduction ##
The main purpose of this document is to detail the required steps and procedures in order to effectively run the Tic-Tac-Toe game. Mainly to be able to maintain the current version of the game and, by any chance, make fresh updates to current versions and any other future versions.

- - -

## Requirements ##
First thing that needs to do is to clone the repository from *[Github](http://www.github.com/)*. It is possible by running from *[Git Bash/Terminal](https://git-scm.com/downloads)* command window, dependence on what type machine is being used, and copy the line onto the window. Keep it mind that it is required to have a *[ssh (Secure Shell) key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)* to be able to clone and use the tool referenced later. In order to do so, the following link will take you to a site that takes step-by-step way on how to be able to clone from github: help.githelp

The first thing that needs to be done, must first run the following line onto Git bash or Terminal,

> *Git clone https://github.com/Puzzles012/Tick_tac_toe.git*  

The second thing that is needed to have Heroku to run the app.

To do this, the first thing is to get the [Heroku Toolbelt](https://devcenter.heroku.com/articles/heroku-cli) and get a [Heroku](https://dashboard.heroku.com/) account. It is then required to write onto CL (command line) and Git Bash the following lines:

> Heroku login  and  Heroku create <appname>   or  Heroku create 

Where the appname is just a name that can be given . If no name is given, Heroku will generate a random name. This is a step need to be able to run the game onto the browser. 
The third and final step that is required to see the app run is to run the following line to send the repository to run the codes into the app.
  
> git push heroku master

Then by running the line below, the browser with the game should open.
> Heroku open
