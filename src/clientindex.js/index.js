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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/client/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\nconst logic = __webpack_require__(/*! ../logic/ttt.js */ \"./src/logic/ttt.js\");\r\n//require('../../dist/style.css');\r\n//require('../../dist/index.html');\r\n\r\n\r\n\r\nvar totalturns = 0;\r\nlet player = 'X';\r\nvar xp = 0, op = 0;\r\n\r\nconst board = document.getElementsByClassName(\"square\");\r\n\r\nArray.prototype.forEach.call(board, square => square.addEventListener(\"click\", addToBoard));\r\n\r\nconst reset = document.getElementById(\"reset\");\r\nreset.addEventListener(\"click\", resetBoard);\r\n\r\nconst getBoard = () => Array.from(board, cell => cell.innerHTML);\r\n\r\nconsole.log(board);\r\nconsole.log()\r\n\r\nfunction addToBoard(b){\r\n    const {id} = b.target;\r\n    trg = b.target.innerHTML;\r\n    console.log(b.target);\r\n    if(checkWinner == true){\r\n        return;\r\n    }\r\n    if(trg == \" \"){    \r\n            totalturns++;\r\n            document.getElementById(id).innerHTML = player;\r\n            if(checkWinner() == true){\r\n            console.log('the winner is' +player);\r\n            document.getElementById('winner').innerHTML = \"the winner is \" +player;\r\n            \r\n            console.log(totalturns);\r\n            if(checkifdraw() == true){\r\n                document.getElementById('winner').innerHTML = \"Draw!\";\r\n            }\r\n            else{\r\n                console.log('no winner yet');\r\n                player = playerturn(player);\r\n                displayPlayer(player);\r\n               \r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction resetBoard(){\r\n\ttotalturns = 0;\r\n\tplayer = 'X';\r\n\tdocument.getElementsByClassName(\"square\").innerHTML = \" \"\r\n}\r\n\r\nfunction writeToboard(cid){\r\n    document.getElementById(cid).innerHTML = player;\r\n    console.log(player);\r\n}\r\n\r\nfunction displayPlayer(player){\r\n    console.log('it is ' +player+ ' turn!');\r\n    document.getElementById('turn').innerHTML = player;\r\n}\r\n\r\nfunction validmoves(cid){\r\n    var bla = document.getElementById(cid).innerHTML;\r\n    //if there's already a winner, to make it impossible to put more stuff on board\r\n    if(checkWinner() == true){\r\n        return 0;\r\n    }\r\n    else if(bla == \"X\" || bla == \"O\"){\r\n        return 0;\r\n    }\r\n    else{\r\n        return 1;\r\n    }\r\n}\r\nfunction checkWinner(){\r\n    var first = document.getElementById('0').innerHTML;\r\n    var second = document.getElementById('1').innerHTML;\r\n    var third = document.getElementById('2').innerHTML;\r\n    var forth = document.getElementById('3').innerHTML;\r\n    var fifth = document.getElementById('4').innerHTML;\r\n    var sixth = document.getElementById('5').innerHTML;\r\n    var seven = document.getElementById('6').innerHTML;\r\n    var eigth = document.getElementById('7').innerHTML;\r\n    var nine = document.getElementById('8').innerHTML;\r\n}\r\n\r\nfunction checkifdraw(){\r\n    if(totalturns == 9  && checkWinner() == false){\r\n        console.log('it is draw, better luck next time');\r\n        return 1;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ }),

/***/ "./src/client/style.css":
/*!******************************!*\
  !*** ./src/client/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\src\\\\client\\\\style.css: Unexpected token, expected \\\";\\\" (2:4)\\n\\n  1 | html,\\n> 2 | body{\\n    |     ^\\n  3 |     height:100%;\\n  4 |     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\\n  5 | }\\n    at Parser.raise (C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3939:15)\\n    at Parser.unexpected (C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5248:16)\\n    at Parser.semicolon (C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5232:40)\\n    at Parser.parseExpressionStatement (C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7676:10)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7272:19)\\n    at Parser.parseStatement (C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7153:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7707:23)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7694:10)\\n    at Parser.parseTopLevel (C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7118:10)\\n    at Parser.parse (C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8521:17)\\n    at parse (C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10513:38)\\n    at parser (C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:170:34)\\n    at normalizeFile (C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:138:11)\\n    at runSync (C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:44:43)\\n    at runAsync (C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:35:14)\\n    at process.nextTick (C:\\\\Users\\\\Óli\\\\Desktop\\\\Haust 2018\\\\HUGB\\\\Tick_tac_toe\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:34:34)\\n    at _combinedTickCallback (internal/process/next_tick.js:132:7)\\n    at process._tickCallback (internal/process/next_tick.js:181:9)\");\n\n//# sourceURL=webpack:///./src/client/style.css?");

/***/ }),

/***/ "./src/logic/ttt.js":
/*!**************************!*\
  !*** ./src/logic/ttt.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {exports.playerTurn = function playerTurn(curPlayer){\r\n\tif((curPlayer != \"X\" && curPlayer != \"O\") && (curPlayer != \"x\" && curPlayer != \"o\")){\r\n\t\treturn \"X and O only\"\r\n\t}\r\n\tif(curPlayer == \"X\"){\r\n        curPlayer = \"O\";\r\n    }\r\n    else{\r\n        curPlayer = \"X\"\r\n    }\r\n    return curPlayer;\r\n}\r\n\r\nexports.initializeBoard = function initializeBoard(){\r\n\tvar array = [];\r\n\tfor(var i = 0; i < 9; i++){\r\n\t\tarray[i] = '.';\r\n\t} \r\n\treturn array;\r\n}\r\n/*\r\nexports.displayBoard = function displayBoard(){\r\n\t//prints the board to console.\r\n\tfor(var i = 0; i < board.length; i++){\r\n\t\tif(i % 3 == 0){\r\n\t\t\tconsole.log();\r\n\t\t\tdocument.write(board[i] + \" \");\r\n\t\t}else{\r\n\t\t\tdocument.write(board[i] + \" \");\r\n\t\t}\r\n\t}\r\n\r\n\tconsole.log(\"\\n\");\r\n}\r\n*/\r\nexports.pickSquare = function pickSquare(squareNumber, player){\r\n\tif(board[squareNumber - 1] == '.'){\r\n\t\tif(player == 'X'){\r\n\t\t\tboard[squareNumber - 1] = 'X';\r\n\t\t}\r\n\r\n\t\tif(player == 'O'){\r\n\t\t\tboard[squareNumber - 1] = 'O';\r\n\t\t}\r\n\t}\r\n\r\n\treturn board;\r\n}\r\n\r\nexports.checkWinner = function checkWinner(){\r\n\r\n\tfor(var i = 0; i < 3; i++){\r\n\t\tif(board[i] == board[3 + i] && board[i] == board[6 + i] && board[i] != '.'){\r\n\t\t\treturn board[i];\r\n\t\t}\r\n\t}\r\n\r\n\tfor(var i = 0; i < 7; i += 3){\r\n\t\tif(board[i] == board[i + 1] && board[i] == board[i + 2] && board[i] != '.'){\r\n\t\t\twinner = board[i];\r\n\t\t}\r\n\t}\r\n\r\n\tif(board[0] == board[4] && board[0] == board[8] && board[0] != '.'){\r\n\t\treturn board[0];\r\n\t}\r\n\r\n\tif(board[2] == board[4] && board[2] == board[6] && board[2] != '.'){\r\n\t\treturn board[2];\r\n\t}\r\n\r\n\treturn null;\r\n}\r\n\r\nfunction readStdInput(){\r\n\tvar input = readline.createInterface({\r\n\t\tinput: process.stdin,\r\n\t\toutput: process.stdout\r\n\t});\r\n\r\n\treturn input.question(\"bleh\", function(answer){\r\n\t\tinput.close();\r\n\t});\r\n}\r\n\r\n\r\n\r\nconst board = exports.initializeBoard();\r\n\r\nconst maxTurns = 9;\r\n\r\n/*\r\nmodule.exports.displayBoard();\r\nmodule.exports.pickSquare(3, 2);\r\nmodule.exports.pickSquare(5, 2);\r\nmodule.exports.pickSquare(7, 2);\r\nmodule.exports.displayBoard();\r\nmodule.exports.displayBoard();\r\n*/\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/logic/ttt.js?");

/***/ })

/******/ });