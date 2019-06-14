function fearNotLetter(str) {
    let set = "abcdefghijklmnopqrstuvwxyz";

    let n = set.slice(set.search(str[0]), set.search(str[str.length - 1]) + 1 );

    n = n.split("");
    str = str.split("");

    let retArr = n.filter( function(item){
        for (let i = 0; i < str.length; i++){
            if(item == str[i]){
                
            }
        }
    })

}
  
fearNotLetter("abce");