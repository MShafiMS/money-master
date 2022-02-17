document.getElementById('calculate').addEventListener('click', function(){
    const myIncome = document.getElementById('income');
    const eatMyIncome = myIncome.value;
    const myIncomeValue = parseFloat(eatMyIncome);

    const myFood = document.getElementById('food');
    const eatMyFood = myFood.value;
    const myFoodValue = parseFloat(eatMyFood);

    const myRent = document.getElementById('rent');
    const eatMyRent= myRent.value;
    const myRentValue = parseFloat(eatMyRent);
    
    const myClothes = document.getElementById('clothes');
    const eatMyClothes = myClothes.value;
    const myClothesValue = parseFloat(eatMyClothes);

    const total = myFoodValue + myRentValue + myClothesValue;
    document.getElementById('expenses').innerText = total;

    const balance = myIncomeValue - total;
    document.getElementById('balance').innerText = balance;
})

document.getElementById('save').addEventListener('click', function(){
    const saving = document.getElementById('saving');
    const eatMySave = saving.value;
    const mySave = parseFloat(eatMySave);

    const mySaving = mySave * myIncomeValue / 100;
    document.getElementById('savings').innerText = mySaving;
})