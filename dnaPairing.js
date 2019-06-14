

function pairElement(str) {
    let st = [];
    let m = (str.split(""));
   
    function pair(element){
        let n = [];

        n.push(element);
        
       switch(element){
            case "G":{
                n.push("C");
                return n;
            }
            case "C":{
                n.push("G");
                return n;
            }
            case "A":{
                n.push("T");
                return n;
            }
            case "T":{
                n.push("A");
                return n;
            }
        }
    }

    
    for( let i = 0; i < str.length; i++){
        st.push(pair(m[i]));
    }
    
    console.log(st);
    return st;
  }
  
  pairElement("GCG");