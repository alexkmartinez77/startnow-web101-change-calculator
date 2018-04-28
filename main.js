// Write your JavaScript here




$('#calculate-change').click(calculateChange);

function calculateChange(){
    var saleAmount = parseFloat($('#amount-due').val());
    var tenderedAmount = parseFloat($('#amount-received').val());
    var changeAmount = tenderedAmount - saleAmount;
    
    
    if (tenderedAmount < saleAmount){
        alert("You don't have enough money!");

     } else if (tenderedAmount === saleAmount){
        alert("No change due.");
    
    } else {
        
        
        var dollarAmount = Math.floor(changeAmount/1);
        $('#dollars-output').text(dollarAmount);
        changeAmount = (changeAmount%1).toFixed(2);
                       
        var quarterAmount = Math.floor(changeAmount/.25);
        $('#quarters-output').text(quarterAmount);
        changeAmount = (changeAmount%.25).toFixed(2);
 
        var dimeAmount = Math.floor(changeAmount/.10);
        $('#dimes-output').text(dimeAmount);
        changeAmount = (changeAmount%.10).toFixed(2);

        var nickelAmount = Math.floor(changeAmount/.05);
        $('#nickels-output').text(nickelAmount);
        changeAmount = (changeAmount%.05).toFixed(2);

        var pennyAmount = Math.floor(changeAmount/.01);
        $('#pennies-output').text(pennyAmount);
        changeAmount = (changeAmount%.01).toFixed(2);
        

    }

        
    

}