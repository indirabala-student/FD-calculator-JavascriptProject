function calculateMaturityAmount(){
    //get the inputs
    
    const principle=parseFloat(document.getElementById('principle').value);
    const interestRate=parseFloat(document.getElementById('interestRate').value);
    const tenure=parseFloat(document.getElementById('tenure').value);

    //calculation 

    const maturityAmount= principle + (principle * interestRate * tenure)/100;

    //display result

    document.getElementById('result').innerText=`maturity Amount: ${maturityAmount.toFixed(2)}`;
}

//add the event listner from calculate button

document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);