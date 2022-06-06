const ps = require("prompt-sync");
const prompt = ps();
function acck(){
    let acckey = prompt("Enter AWS Access Key ID: ");
    global.acckeyid=acckey;
    return(acckeyid);
}

module.exports={acck};
