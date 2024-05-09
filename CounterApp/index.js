const display = document.querySelector('.counter-preview');
// const incrementBtn = document.getElementById('increment');
// const decrementBtn = document.getElementById('decrement');
// const resetBtn = document.getElementById('reset')
// incrementBtn.addEventListener('click' , increment);
// decrementBtn.addEventListener('click', decrement);
// resetBtn.addEventListener('click', reset);


// let value = 0;
// function increment(){
//     value = value+1;
//     display.textContent = value;
// }
 
// function decrement(){
//   value = value-1;
//   display.textContent=value;  
// }

// function reset(){
//     value = 0;
//     display.textContent = value;
// }


const allBtns = document.getElementById("allbtns");
allBtns.addEventListener('click' , counter);
 
let value = 0;

function counter(e){
    const btn = e.target.id;
    if(btn === 'increment'){
        value = value+1;
    }else if(btn === 'decrement'){
        value = value-1;
    }else{
        value = 0; 
    }
    display.textContent = value;
}

// console.log(allBtns)