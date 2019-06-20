function checkInventory ( arr ) {
  switch ( arr [0] ) {
    case "ONE HUNDRED" : return [ 100, arr[1] ];
    case "TWENTY" : return [ 20, arr[1] ];
    case "TEN" : return [ 10, arr[1] ];
    case "FIVE" : return [ 5, arr[1] ];
    case "ONE" : return [ 1, arr[1] ];
    case "QUARTER" : return [ 0.25, arr[1] ];
    case "DIME" : return [ 0.1, arr[1] ];
    case "NICKEL" : return [ 0.05, arr[1] ];
    case "PENNY" : return [ 0.01, arr[1] ];

    case 100: return [ "ONE HUNDRED", arr[1] ];
    case 20: return [ "TWENTY", arr[1] ];
    case 10: return [ "TEN", arr[1] ];
    case 5: return [ "FIVE", arr[1] ];
    case 1: return [ "ONE", arr[1] ];
    case 0.25: return [ "QUARTER", arr[1] ];
    case 0.1: return [ "DIME", arr[1] ];
    case 0.05: return [ "NICKEL", arr[1] ];
    case 0.01: return [ "PENNY", arr[1] ];
  }
}
function roundToTwo(num) {    
  return +(Math.round(num + "e+2")  + "e-2");
}

function checkCashRegister(price, cash, cid) {
    
  let changeToBeGiven = cash - price ;
  let totalCID = 0;
  let inventory = [];
  let toReturn = [];

  for ( let i = (cid.length - 1) ; i >= 0  ; i--) {
    
    inventory.push ( checkInventory (cid[i]));
    toReturn.push ( [ cid[i][0] , 0 ] );
    totalCID += cid[i][1];

  }
  

  if ( changeToBeGiven > totalCID){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  if ( changeToBeGiven == totalCID){
    return {status: "CLOSED", change: cid}
  }

  
  let i = 0; 
  while ( changeToBeGiven != 0) {


    if ( changeToBeGiven - inventory[i][0] < 0 ) {

      i++ ;
    
    } else {

      if ( inventory[i][1] <= 0) {
        
        i++ ;

      } else {

        changeToBeGiven = roundToTwo( changeToBeGiven - inventory[i][0] );
        inventory[i][1] = roundToTwo( inventory[i][1] - inventory[i][0] );
        toReturn[i][1] = toReturn[i][1] + inventory[i][0];

      }    

    }


    if( i == (inventory.length - 1) && inventory[i][1] == 0) {

      return {status: "INSUFFICIENT_FUNDS", change: []};

    }


  }


  let toReturnChange = [];
  for (let i = 0 ; i < toReturn.length ; i++) {
    
    if ( toReturn[i][1] != 0 )
      toReturnChange.push(toReturn[i]);

  }

  return {status: "OPEN", change: toReturnChange};

  
}
  
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
