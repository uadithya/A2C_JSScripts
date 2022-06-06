const ps = require("prompt-sync");
const prompt = ps();
function out(){
    let outpform = prompt("Enter default outpuut format: "); 
    return(outpform);
}
module.exports={out};