function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    let n = [];
    for ( let i = 0; i < str.length; i++){
        
        if( str[i].match(/[a-zA-Z-]/) ){
            
            n.push(str.charAt(i));

        }
        if( str[i].match(" ") && str[i+1].match(/[a-z]/)){

            n.push("-")
        }

    }
    n = n.join("");
   // console.log(n)


    let start = 0;
    let arr = [];
    for ( let i = 1; i < n.length; i++){
        if( n[i].match(/[A-Z]/) ){
            arr.push(n.slice(start, i));
            start = i;
        }
    }

    return (arr.concat(n.slice(start, n.length)).join("-").toLocaleLowerCase())
}
  
spinalCase("The_Andy_Griffith_Show")