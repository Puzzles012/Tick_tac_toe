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

eval("const logic = __webpack_require__(/*! ../logic/ttt.js */ \"./src/logic/ttt.js\")\n\nvar player = 'X';\nvar totalturns = 0;\nvar xp = 0, op = 0;\n\nconst board = document.getElementsByClassName(\"square\");\n\nArray.prototype.forEach.call(board, square => square.addEventListener(\"click\", addToBoard));\n\nconst getBoard = () => Array.from(board, cell => cell.innerHTML);\n\nfunction addToBoard(b){\n    const {id} = b.target;\n    trg = b.target.innerHTML;\n \n    if(trg == \"\"){\n        totalturns++;\n        document.getElementById(id).innerHTML = logic.pickSquare(id, player);\n        \n\n        logic.displayBoard();\n        if(checkWinner() != null){\n            var res = document.getElementsByClassName('winner')[0];\n            res.innerHTML = \"the winner is \" + player;\n            console.log(checkWinner() + \" is the winner\");\n        }\n        else if(totalturns == 9 && checkWinner() == null){\n            console.log(\"DRAW\");\n        }\n        else{\n            player = logic.playerTurn(player);\n        }\n\n       // displayPlayer(player);\n        }\n        else{\n            console.log(\"Illegal move\");\n        }\n    \n}\n\nfunction writeToboard(cid){\n    document.getElementById(cid).innerHTML = player;\n}\n\n/*\nhelpme\nfunction displayPlayer(player){\n    console.log('it is ' + player + ' turn!');\n    document.getElementById('turn').innerHTML = player;\n}\n*/\nfunction checkBoard(){\n    //let boardArray = () Array.from(getBoard, values =>values.)\n    var winner = logic.checkWinner();\n    if(winner == 'X' || winner == 'O'){\n        return true;\n    }\n\n    else if(bla == \"X\" || bla == \"O\"){\n        return 0;\n    }\n    else{\n        return 1;\n    }\n}\n\nfunction checkWinner(){\n    return logic.checkWinner();\n}\n\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ }),

/***/ "./src/logic/ttt.js":
/*!**************************!*\
  !*** ./src/logic/ttt.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {exports.playerTurn = function playerTurn(curPlayer){\n\n\tif(curPlayer == \"X\"){\n        curPlayer = \"O\";\n    }\n    else{\n        curPlayer = \"X\"\n    }\n    return curPlayer;\n}\n\nexports.initializeBoard = function initializeBoard(){\n\tvar array = [];\n\tfor(var i = 0; i < 9; i++){\n\t\tarray[i] = '.';\n\t} \n\treturn array;\n}\n\nexports.displayBoard = function displayBoard(){\n\t//prints the board to console.\n\tfor(var i = 0; i < board.length; i++){\n\t\tif(i % 3 == 0){\n\t\t\tconsole.log();\n\t\t\tconsole.log(board[i]);\n\t\t\t//document.write(board[i] + \" \");\n\t\t}else{\n\t\t\t//document.write(board[i] + \" \");\n\t\t\tconsole.log(board[i]);\n\t\t}\n\t}\n\n\tconsole.log(\"\\n\");\n}\n\nexports.pickSquare = function pickSquare(squareNumber, player){\n\tif(board[squareNumber] == '.'){\n\t\tif(player == 'X'){\n\t\t\tboard[squareNumber] = 'X';\n\t\t}\n\n\t\tif(player == 'O'){\n\t\t\tboard[squareNumber] = 'O';\n\t\t}\n\t}\n\n\treturn player;\n}\n\nexports.checkWinner = function checkWinner(){\n\n\tvar winner = null;\n\n\tfor(var i = 0; i < 3; i++){\n\t\tif(board[i] == board[3 + i] && board[i] == board[6 + i] && board[i] != '.'){\n\t\t\twinner = board[i];\n\t\t}\n\t}\n\n\tfor(var i = 0; i < 7; i += 3){\n\t\tif(board[i] == board[i + 1] && board[i] == board[i + 2] && board[i] != '.'){\n\t\t\twinner = board[i];\n\t\t}\n\t}\n\n\tif(board[0] == board[4] && board[0] == board[8] && board[0] != '.'){\n\t\twinner = board[0];\n\t}\n\n\tif(board[2] == board[4] && board[2] == board[6] && board[2] != '.'){\n\t\twinner = board[2];\n\t}\n\n\treturn winner;\n\n}\n\nfunction readStdInput(){\n\tvar input = readline.createInterface({\n\t\tinput: process.stdin,\n\t\toutput: process.stdout\n\t});\n\n\treturn input.question(\"bleh\", function(answer){\n\t\tinput.close();\n\t});\n}\n\nconst board = exports.initializeBoard();\n\nconst maxTurns = 9;\n\n/*\nmodule.exports.displayBoard();\nmodule.exports.pickSquare(3, 2);\nmodule.exports.pickSquare(5, 2);\nmodule.exports.pickSquare(7, 2);\nmodule.exports.displayBoard();\nmodule.exports.displayBoard();\n*/\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/logic/ttt.js?");

/***/ })

/******/ });