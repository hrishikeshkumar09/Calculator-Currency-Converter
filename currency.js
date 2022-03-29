//define variable for cur1,cur2,amount1,amount2

const currency1=document.getElementById('cur1');
const currency2=document.getElementById('cur2');
const amount1=document.getElementById('amount1');
const amount2=document.getElementById('amount2');

function calculate(){
    const cur1=currency1.value;
    const cur2=currency2.value;

    fetch(`https://api.exchangerate.host/convert?from=${cur1}&to=${cur2}`)
        .then(res=>res.json())
        .then(data=>{
            const temp=data.result;
            amount2.value=(amount1.value*temp).toFixed(2);
        })
}

currency1.addEventListener('change',calculate);
currency2.addEventListener('change',calculate);
amount1.addEventListener('input',calculate);
amount2.addEventListener('input',calculate);
calculate();