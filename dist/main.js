/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//const logic = require(\"../logic/ttt.js\")\r\n//require('style.css');\r\n//require('index.html');\r\n\r\nvar totalturns = 0;\r\nlet player = 'X';\r\nvar xp = 0, op = 0;\r\n\r\nconst board = document.getElementsByClassName(\"square\");\r\n\r\nArray.prototype.forEach.call(board, square => square.addEventListener(\"click\", addToBoard));\r\n\r\nconst reset = document.getElementById(\"reset\");\r\nreset.addEventListener(\"click\", resetBoard);\r\n\r\nconst getBoard = () => Array.from(board, cell => cell.innerHTML);\r\n\r\nconsole.log(board);\r\nconsole.log()\r\n\r\nfunction addToBoard(b){\r\n    const {id} = b.target;\r\n    trg = b.target.innerHTML;\r\n    console.log(b.target);\r\n    if(checkWinner() == true){\r\n            console.log('the winner is' +player);\r\n            document.getElementById('winner').innerHTML = \"the winner is \" +player;\r\n    }\r\n    else{\r\n    if(trg == \" \"){    \r\n            totalturns++;\r\n            document.getElementById(id).innerHTML = player;\r\n            \r\n            console.log(totalturns);\r\n            if(checkifdraw() == true){\r\n                document.getElementById('winner').innerHTML = \"Draw!\";\r\n            }\r\n            else{\r\n                console.log('no winner yet');\r\n                player = playerturn(player);\r\n                 checkWinner();\r\n                displayPlayer(player);\r\n               \r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction resetBoard(){\r\n\ttotalturns = 0;\r\n\tplayer = 'X';\r\n\tdocument.getElementsByClassName(\"square\").innerHTML = \" \"\r\n}\r\n\r\nfunction playerturn(player){\r\n    if(player == 'X'){\r\n        return player = 'O';\r\n    }\r\n    else{\r\n        return player = 'X';\r\n    }\r\n}\r\n\r\nfunction writeToboard(cid){\r\n    document.getElementById(cid).innerHTML = player;\r\n    console.log(player);\r\n}\r\n\r\nfunction displayPlayer(player){\r\n    console.log('it is ' +player+ ' turn!');\r\n    document.getElementById('turn').innerHTML = player;\r\n}\r\n\r\nfunction validmoves(cid){\r\n    var bla = document.getElementById(cid).innerHTML;\r\n    //if there's already a winner, to make it impossible to put more stuff on board\r\n    if(checkWinner() == true){\r\n        return 0;\r\n    }\r\n    else if(bla == \"X\" || bla == \"O\"){\r\n        return 0;\r\n    }\r\n    else{\r\n        return 1;\r\n    }\r\n}\r\nfunction checkWinner(){\r\n    var first = document.getElementById('0').innerHTML;\r\n    var second = document.getElementById('1').innerHTML;\r\n    var third = document.getElementById('2').innerHTML;\r\n    var forth = document.getElementById('3').innerHTML;\r\n    var fifth = document.getElementById('4').innerHTML;\r\n    var sixth = document.getElementById('5').innerHTML;\r\n    var seven = document.getElementById('6').innerHTML;\r\n    var eigth = document.getElementById('7').innerHTML;\r\n    var nine = document.getElementById('8').innerHTML;\r\n\r\n    if((first == player && second == player && third == player) || (forth == player && fifth == player && sixth == player)||\r\n    (seven == player && eigth == player && nine == player) || (third == player && fifth == player && seven == player) ||\r\n    (first == player && forth == player && seven == player) || (second == player && fifth == player && eigth == player)||\r\n    (third == player && sixth == player && nine == player) || (first == player && fifth == player && nine == player)) {\r\n        return 1;\r\n    }\r\n    else{\r\n        return 0;\r\n    }\r\n}\r\n\r\nfunction checkifdraw(){\r\n    if(totalturns == 9  && checkWinner() == false){\r\n        console.log('it is draw, better luck next time');\r\n        return 1;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ })

/******/ });