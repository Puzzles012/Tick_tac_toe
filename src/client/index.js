const _ = require("lodash");
//const require = 
function component() {  
    let element = document.createElement('div');  
    element.innerHTML = _.join(['Hello', 'there!'], ' ');
    return element;
}
document.body.appendChild(component());