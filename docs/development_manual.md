# Development manual #

## Introduction ##
This is development manual for *Tic-Tac-Toe* browser game by *Puzzle*. This manual  explains everything that was used  to develop this software and will guide you through progress of doing it yourself 
## Main Part ##
The main programs that were used was *Jest(https://jestjs.io/)* as a test environment and *npm (Node Package Manager)(https://www.npmjs.com/)* as a build environment and *Webpack](https://webpack.js.org/)* as service to prepare it for browsers. *Heroku(https://dashboard.heroku.com/)* and *CircleCI(https://circleci.com)* were used for maintaining a server for the application. 

- - -

## Programing languages ##
Mainly is *Tic-Tac-Toe* build on *JavaScript*, the look of the game is achieved with *HTML* and *CSS*. 

> ## Jest ##
> *Jest* is a testing platform for *node.js* building environment that, with *npm* allows us to use *TDD (Test Driven Development)* method to develop and run automated test builder *(WatchAll)* and/or test single tests.  

> ## Npm ##
> *Npm* is an automated build and dependency tool that is used to help developers run with dependency programs without needing to create them on their own. It was the build tool that was utilized for developing the system. Furthermore *npm* was used to run the tests with *Jest* witch was described above. It was also *npm* that was used  to install all the *Webpacks* that were utilized. 

>## Webpack ##
>*[Webpack] at its core, *Webpack* is a static module bundler for modern *JavaScript* applications. When *Webpack* processes the user application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles [^1].

> ## Heroku ##
> *Heroku* is *Automated Continuous Integration Server* that maintains that server of web program is running and is maintained correctly. It was used to deploy *Tic-Tac-Toe* to the server and maintain it in secured environment. 

> ## CircleCI ##
> *CircleCI* maintains *Continuous delivery* of the server and see if the progress of the program is running correctly.
- - -
## Conclusion ##
Without most of these programs, it would not run as it does now. It keeps the project alive and with any future changes, makes the environment work from where it is.

[^1]: Webpack/concepts [ref]: https://webpack.js.org/concepts/
