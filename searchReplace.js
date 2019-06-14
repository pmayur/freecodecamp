function myReplace(str, before, after) {
    
    if(str.match(before)){
        let m = str.slice(0, str.search(before));
        let n = str.slice(str.search(before) + before.length);
    

        if(before[0].match(/[A-Z]/)){
            
            after = after[0].toUpperCase().concat(after.slice(1));
           
        }

        return m.concat(after).concat(n)
    }
    

  }
  
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");