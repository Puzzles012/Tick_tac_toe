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
/***/ (function(module, exports, __webpack_require__) {

eval("const logic = __webpack_require__(/*! ../logic/ttt.js */ \"./src/logic/ttt.js\")\r\n\r\nvar player = 'X';\r\nvar totalturns = 0;\r\nvar xp = 0, op = 0;\r\n\r\nconst board = document.getElementsByClassName(\"square\");\r\n\r\nArray.prototype.forEach.call(board, square => square.addEventListener(\"click\", addToBoard));\r\n\r\nconst getBoard = () => Array.from(board, cell => cell.innerHTML);\r\n\r\nfunction addToBoard(b){\r\n    const {id} = b.target;\r\n    trg = b.target.innerHTML;\r\n \r\n    if(trg == \"\"){\r\n        totalturns++;\r\n        document.getElementById(id).innerHTML = logic.pickSquare(id, player);\r\n        player = logic.playerTurn(player);\r\n\r\n        logic.displayBoard();\r\n\r\n    \tif(checkWinner() != null){\r\n    \t\tconsole.log(checkWinner() + \" is the winner\");\r\n    \t}\r\n\r\n    \tif(totalturns == 9){\r\n    \t\tconsole.log(\"DRAW\");\r\n    \t}\r\n    }\r\n    else{\r\n        console.log(\"Illegal move\");\r\n    }\r\n}\r\n\r\nfunction writeToboard(cid){\r\n    document.getElementById(cid).innerHTML = player;\r\n}\r\n\r\nfunction displayPlayer(player){\r\n    console.log('it is ' + player + ' turn!');\r\n    document.getElementById('turn').innerHTML = player;\r\n}\r\n\r\nfunction validmoves(cid){\r\n    var bla = document.getElementById(cid).innerHTML;\r\n    //if there's already a winner, to make it impossible to put more stuff on board\r\n    if(checkWinner() == true){\r\n        return 0;\r\n    }\r\n    else if(bla == \"X\" || bla == \"O\"){\r\n        return 0;\r\n    }\r\n    else{\r\n        return 1;\r\n    }\r\n}\r\n\r\nfunction checkWinner(){\r\n    return logic.checkWinner();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ }),

/***/ "./src/logic/ttt.js":
/*!**************************!*\
  !*** ./src/logic/ttt.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.playerTurn = function playerTurn(curPlayer){\r\n\tif(curPlayer == \"X\"){\r\n        curPlayer = \"O\";\r\n    }\r\n    else{\r\n        curPlayer = \"X\"\r\n    }\r\n    return curPlayer;\r\n}\r\n\r\nexports.initializeBoard = function initializeBoard(){\r\n\tvar array = [];\r\n\tfor(var i = 0; i < 9; i++){\r\n\t\tarray[i] = '.';\r\n\t} \r\n\treturn array;\r\n}\r\n\r\nexports.displayBoard = function displayBoard(){\r\n\t//prints the board to console.\r\n\tfor(var i = 0; i < board.length; i++){\r\n\t\tif(i % 3 == 0){\r\n\t\t\tconsole.log();\r\n\t\t\tconsole.log(board[i]);\r\n\t\t\t//document.write(board[i] + \" \");\r\n\t\t}else{\r\n\t\t\t//document.write(board[i] + \" \");\r\n\t\t\tconsole.log(board[i]);\r\n\t\t}\r\n\t}\r\n\r\n\tconsole.log(\"\\n\");\r\n}\r\n\r\nexports.pickSquare = function pickSquare(squareNumber, player){\r\n\tif(board[squareNumber] == '.'){\r\n\t\tif(player == 'X'){\r\n\t\t\tboard[squareNumber] = 'X';\r\n\t\t}\r\n\r\n\t\tif(player == 'O'){\r\n\t\t\tboard[squareNumber] = 'O';\r\n\t\t}\r\n\t}\r\n\r\n\treturn player;\r\n}\r\n\r\nexports.checkWinner = function checkWinner(){\r\n\tvar winner = null;\r\n\tfor(var i = 0; i < 3; i++){\r\n\t\tif(board[i] == board[3 + i] && board[i] == board[6 + i] && board[i] != '.'){\r\n\t\t\twinner = board[i];\r\n\t\t}\r\n\t}\r\n\r\n\tfor(var i = 0; i < 7; i += 3){\r\n\t\tif(board[i] == board[i + 1] && board[i] == board[i + 2] && board[i] != '.'){\r\n\t\t\twinner = board[i];\r\n\t\t}\r\n\t}\r\n\r\n\tif(board[0] == board[4] && board[0] == board[8] && board[0] != '.'){\r\n\t\twinner = board[0];\r\n\t}\r\n\r\n\tif(board[2] == board[4] && board[2] == board[6] && board[2] != '.'){\r\n\t\twinner = board[2];\r\n\t}\r\n\r\n\treturn winner;\r\n}\r\n\r\nconst board = exports.initializeBoard();\r\n\r\nconst maxTurns = 9;\r\n\r\n/*\r\nmodule.exports.displayBoard();\r\nmodule.exports.pickSquare(3, 2);\r\nmodule.exports.pickSquare(5, 2);\r\nmodule.exports.pickSquare(7, 2);\r\nmodule.exports.displayBoard();\r\nmodule.exports.displayBoard();\r\n*/\n\n//# sourceURL=webpack:///./src/logic/ttt.js?");

/***/ })

/******/ });