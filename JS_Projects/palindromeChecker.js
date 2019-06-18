function stringWithoutSpeChars (str) {
    let retStr = "";
    for ( let i = 0 ; i < str.length ; i++) {
        if (str[i].match(/[A-Za-z1-9]/)) {
            retStr += str[i].toLowerCase();
        }
    }
    return (retStr);
}

function reverseString (str) {
    let revStr = "";

    for ( let i = str.length - 1; i >= 0  ; i --) {
        revStr += str[i];
    }

    return revStr;
}
 

function palindrome(str) {
    return stringWithoutSpeChars(str) == reverseString(stringWithoutSpeChars(str));
}  
  
palindrome("racecar");