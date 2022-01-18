function reverseString(str) {
    var strSplit = str.split("");
    var strReverse = strSplit.reverse();
    var strJoin = strReverse.join("");

    return strJoin
};

reverseString('Captain');
// Do not edit below this line
module.exports = reverseString;
