const _ = require("lodash");
const board = require('../logic/ttt');
//const table = require('./index.html');

function component() {  
    let element = document.createElement('table');  
   // let board = board.displayBoard;
    var values = '<tr><td>.</td><td>.</td><td>.<td></td></tr><tr><td>.</td><td>.</td><td>.</td></tr><tr><td>.</td><td>.</td><td>.<td></td></tr>';
    //element.innerText = markup;
    element.innerHTML = values;
    return element;
}
document.body.appendChild(component());