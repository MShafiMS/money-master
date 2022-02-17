function getInputValue(product){
    const productInput = document.getElementById(product);
    const productNumber = parseFloat(productInput.value);
    const card = document.getElementById('card');
    if(productNumber == 'number' || productNumber > 0){
        card.style.display = 'none';
        return productNumber;
    }
    else{
        card.style.display = 'block';
    }
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
//-------------------------income and expenses part start ------------------------

document.getElementById('calculate').addEventListener('click', function calculateTotal(){
    const income = getInputValue('income');
    const foodExpenses = getInputValue('food');
    const rentExpenses = getInputValue('rent');
    const clothesExpenses = getInputValue('clothes');

    const expensesTotal = foodExpenses + rentExpenses + clothesExpenses;

    document.getElementById('expenses').innerText = expensesTotal;

    const balance = income - expensesTotal;
    document.getElementById('balance').innerText = balance;

})

// -----------------------income and expenses part end-------------------------

//-----------------------------savings part start-----------------------

document.getElementById('save').addEventListener('click', function(){
    const income = getInputValue('income');
    const saving = getInputValue('saving');

    

    
    const savingAmount = saving * income / 100;
    document.getElementById('savings').innerText = savingAmount;

    const myRemainBalance = document.getElementById('remain');
    const myBalance= getCurrentBalance();

    const remainBalance = myBalance - savingAmount;

    myRemainBalance.innerText = remainBalance;

    
})


//------------------------------savings part end--------------------------