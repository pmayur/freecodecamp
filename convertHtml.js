/* 
& &amp:

< &lt;

> &gt;

" &quot;

' &apo
s;
*/

function conv(elem){
    switch(elem){
        case "&": {
            return "&amp;";
        }
        case "<": {
            return "&lt;";
        }
        case ">": {
            return "&gt;";
        }
        case `\"`: {
            return "&quot;";
        }
        case `\'`: {
            return "&apos;";
        }
        default : {
            return elem;
        }
    }
}


function convertHTML(str) {
    // &colon;&rpar;

    let strArr = str.split("");
    let n = [];

    for (let i = 0; i < strArr.length; i++){

        n.push( conv(strArr[i]) );
        
    }

    n = n.join("");

    console.log(n)
    return n;
}
  
convertHTML("Schindler's List")