const _ = require("lodash");
const board = require('../logic/ttt.js');
function component() {  
    let element = document.createElement('div');  
   // let markup = '<tr><td>element[0]</td><td>element[1]</td><td>element[2]<td></td><tr>';
    
    element.innerHTML = _.join('It is x turn');
    return element;
}
document.body.appendChild(component());