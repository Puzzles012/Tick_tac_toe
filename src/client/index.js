const _ = require("lodash");
function component() {  
    let element = document.createElement('span');  
    
    element.innerHTML = _.join('It is x turn');
    return element;
}
document.body.appendChild(component());