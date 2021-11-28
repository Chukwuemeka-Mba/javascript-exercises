// function repeatString(string, num) {
//     let stringRepeat = "";
//     while(num > 0){
//         stringRepeat += string;
//         num--
//     }
//     return stringRepeat
// };

// repeatString("James", 8)


function repeatString(str, num){
    if(num > 0){
        return str.repeat(num);
    }else{
        return "";
    }
}

repeatString("Jonas", 9);

// Do not edit below this line
module.exports = repeatString;
