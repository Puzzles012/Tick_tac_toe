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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const logic = __webpack_require__(/*! ../logic/ttt.js */ \"./src/logic/ttt.js\")\r\n\r\nvar player = \"X\";\r\nvar totalturns = 0;\r\nvar xp = 0, op = 0;\r\n\r\nconst board = document.getElementsByClassName(\"square\");\r\n\r\nArray.prototype.forEach.call(board, square => square.addEventListener(\"click\", addToBoard));\r\n\r\nconst getBoard = () => Array.from(board, cell => cell.innerHTML);\r\n\r\n\r\nfunction addToBoard(b){\r\n    const {id} = b.target;\r\n    trg = b.target.innerHTML;\r\n \r\n    if(trg == \"\" && checkWinner() == null){\r\n        totalturns++;\r\n        document.getElementById(id).innerHTML = logic.pickSquare(id, player);\r\n        //if there is a winner\r\n        if(checkWinner() != null){\r\n            var res = document.getElementsByClassName('winner')[0];\r\n            res.innerHTML = \"the winner is \" + player;\r\n            console.log(checkWinner() + \" is the winner\"); \r\n            remove();         \r\n            return;\r\n\r\n        }\r\n        //if there is a draw\r\n        else if(totalturns == 9 && checkWinner() == null){\r\n            console.log(\"DRAW\");\r\n            var res = document.getElementsByClassName('winner')[0];\r\n            res.innerHTML = \"Draw\";\r\n        }\r\n        else{\r\n            //swaps player and prints to board\r\n            player = logic.playerTurn(player);\r\n            document.getElementById(\"player\").innerHTML = player;\r\n        }\r\n    }\r\n    else{\r\n        console.log(\"Illegal move\");\r\n    }   \r\n}\r\n//makes remaining squares not clickable to be able to click on them after there is a winner\r\nfunction remove(){\r\n    var values = document.getElementsByTagName('span');\r\n    for(let i = 0; i < values.length; i++) {\r\n        if(values[i].innerHTML != \"X\" && values[i].innerHTML != \"O\")\r\n        values[i].innerHTML = \" \";\r\n    }\r\n}\r\n//to reset the board\r\nconst reset = document.getElementById(\"reset\");\r\nreset.addEventListener(\"click\", resetFunc);\r\nfunction resetFunc(){  \r\n    var values = document.getElementsByTagName('span');\r\n    logic.reset();\r\n    for(let i = 0; i < values.length; i++) {\r\n        values[i].innerHTML = \"\";\r\n    }\r\n    player = \"X\";\r\n    totalturns = 0;\r\n    var res = document.getElementsByClassName('winner')[0];\r\n    res.innerHTML = \"\";\r\n    winner = null;\r\n}\r\n//calls to checkwinner function in logic/ttt\r\nfunction checkWinner(){\r\n    return logic.checkWinner();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ }),

/***/ "./src/logic/ttt.js":
/*!**************************!*\
  !*** ./src/logic/ttt.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {exports.playerTurn = function playerTurn(curPlayer){\r\n\r\n\tif(curPlayer == 'X'){\r\n        curPlayer = 'O';\r\n    }\r\n    else{\r\n        curPlayer = 'X'\r\n    }\r\n    return curPlayer;\r\n}\r\n//get the board in the beginning\r\nexports.initializeBoard = function initializeBoard(){\r\n\tvar array = [];\r\n\tfor(var i = 0; i < 9; i++){\r\n\t\tarray[i] = '.';\r\n\t} \r\n\treturn array;\r\n}\r\n\r\nexports.displayBoard = function displayBoard(){\r\n\t//prints the board to console.\r\n\tfor(var i = 0; i < board.length; i++){\r\n\t\tif(i % 3 == 0){\r\n\t\t\tconsole.log();\r\n\t\t\tconsole.log(board[i]);\r\n\t\t\t//document.write(board[i] + \" \");\r\n\t\t}else{\r\n\t\t\t//document.write(board[i] + \" \");\r\n\t\t\tconsole.log(board[i]);\r\n\t\t}\r\n\t}\r\n\r\n\tconsole.log(\"\\n\");\r\n}\r\n//picks the value to put in the array\r\nexports.pickSquare = function pickSquare(squareNumber, player){\r\n\tif(board[squareNumber] == '.'){\r\n\t\tif(player == 'X'){\r\n\t\t\tboard[squareNumber] = 'X';\r\n\t\t}\r\n\r\n\t\tif(player == 'O'){\r\n\t\t\tboard[squareNumber] = 'O';\r\n\t\t}\r\n\t}\r\n\r\n\treturn player;\r\n}\r\n//checks winner\r\nexports.checkWinner = function checkWinner(){\r\n\r\n\tvar winner = null;\r\n\r\n\tfor(var i = 0; i < 3; i++){\r\n\t\tif(board[i] == board[3 + i] && board[i] == board[6 + i] && board[i] != '.'){\r\n\t\t\twinner = board[i];\r\n\t\t}\r\n\t}\r\n\r\n\tfor(var i = 0; i < 7; i += 3){\r\n\t\tif(board[i] == board[i + 1] && board[i] == board[i + 2] && board[i] != '.'){\r\n\t\t\twinner = board[i];\r\n\t\t}\r\n\t}\r\n\r\n\tif(board[0] == board[4] && board[0] == board[8] && board[0] != '.'){\r\n\t\twinner = board[0];\r\n\t}\r\n\r\n\tif(board[2] == board[4] && board[2] == board[6] && board[2] != '.'){\r\n\t\twinner = board[2];\r\n\t}\r\n\r\n\treturn winner;\r\n\r\n}\r\n\r\nfunction readStdInput(){\r\n\tvar input = readline.createInterface({\r\n\t\tinput: process.stdin,\r\n\t\toutput: process.stdout\r\n\t});\r\n\r\n\treturn input.question(\"bleh\", function(answer){\r\n\t\tinput.close();\r\n\t});\r\n}\r\n//reset func\r\nexports.reset = function reset(){\r\n\tboard = exports.initializeBoard();\r\n}\r\n\r\n//the board\r\nlet board = exports.initializeBoard();\r\n//max turns available\r\nconst maxTurns = 9;\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/logic/ttt.js?");

/***/ })

/******/ });