const ps = require("prompt-sync");
const prompt = ps();
function loc(){
    let locat = prompt("Enter location: ");
    global.location=locat
    return(locat);
}
module.exports={loc};
