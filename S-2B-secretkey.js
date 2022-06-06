const ps = require("prompt-sync");
const prompt = ps();
function sec(){
    let seckey = prompt("Enter Secret key: ");
    global.sectkey=seckey
    return(sectkey);
}
module.exports={sec};
