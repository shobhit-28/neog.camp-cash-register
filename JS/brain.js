let cost = document.querySelector('#billAmount');
let cash = document.querySelector('#cashGiven');
let btn = document.querySelector('#check');
let errr = document.querySelector('#errorMessage');
let numOfNotes = document.querySelectorAll('.noOfNotes');
let availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function calculator(amount){
    for (let index = 0; index < numOfNotes.length; index++){
        let notesNumber = Math.trunc(amount/availableNotes[index]);
        amount %= availableNotes[index];
        numOfNotes[index].innerText = notesNumber;
    }
}

btn.addEventListener('click', function(){
    errr.style.display = 'none';
    if(cost.value > 0){
        if(parseInt(cash.value) >= parseInt(cost.value)){
            let returnAmt = cash.value - cost.value;
            calculator(returnAmt);
        }
        else{
            showMsg('wanna work here?')
        }
    }else{
        showMsg('Invalid Bill amount')
    }      
});

function showMsg(Msg){
    errr.style.display = 'block';
    errr.innerText = Msg;
}