const capitalize = function(string){
    let newString = "";
    let i = 0;
    while(i < string.length){
        if(newString.length === 0){
            newString += string[i].toUpperCase();
        } else {
            newString += string[i].toLowerCase();
        }
        i++
    }
    return newString;
}
// Do not edit below this line
module.exports = capitalize;