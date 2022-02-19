function calculateTip(){

    var billAmount = document.getElementById("Billamount").value;
    var perTip = document.getElementById("Pertip").value/100;
    var tipAmount = document.getElementById("Tipamount").value;
    var totAmount = document.getElementById("Totamount").value;

    //validate input
    if(billAmount == "" || perTip == ""){
        alert("Please enter the values");
        return;
    }

    //calculate tip amount
    var tipAmount = (billAmount * perTip);
    //next line allows us to always have two digits after decimal point
    tipAmount = parseFloat(tipAmount).toFixed(2);
    //display the tip
    document.getElementById("Tipamount").style.display = "block";
    document.getElementById("Tipamount").value = tipAmount;

    //calculate total
    var totAmount = Number(billAmount) + Number(tipAmount);
    //next line allows us to always have two digits after decimal point
    totAmount = parseFloat(totAmount).toFixed(2);
    //dispaly the total amount
    document.getElementById("Totamount").style.display = "block";
    document.getElementById("Totamount").innerHTML = totAmount;
    document.getElementById("Totamount").value = totAmount;
}
function clearFields(){
    document.getElementById("Billamount").value = "";
    document.getElementById("Pertip").value = "";
    document.getElementById("Tipamount").value = "";
    document.getElementById("Totamount").value = "";
}