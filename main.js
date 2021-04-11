
let buttonTurn = document.querySelector('.turn');
let doorOpen = document.querySelector('.open');
let messageAlarm = document.querySelector('.message');

let isTurn = false;
let isOpen = false;
isAlarm = false;

const message = () => {
    if (isTurn === !false && isOpen === !false ){
        messageAlarm.innerHTML = "Тревога";
    } else if (isTurn === !false && isOpen === false){
        messageAlarm.innerHTML = "Все ok"; 
    } else if (isTurn === false){ 
        messageAlarm.innerHTML = "Сигнализация выключена"; 
    };
};

buttonTurn.addEventListener('click', (ev) =>{
    
    isTurn = !isTurn;
    
    if (isTurn) {
        buttonTurn.classList.add('turnOn');
        buttonTurn.classList.remove('turnOff');
        buttonTurn.innerHTML = 'вкл.';
    } else {
        buttonTurn.classList.add('turnOff');
        buttonTurn.classList.remove('turnOn');
        buttonTurn.innerHTML = 'выкл.';
    };
    message();
});

doorOpen.addEventListener('click', (ev) =>{
    
    isOpen = !isOpen;
    
    if (isOpen) {
        doorOpen.classList.add('alarm');
        doorOpen.classList.remove('success');
        doorOpen.innerHTML = 'откр.';
    } else {
        doorOpen.classList.add('success');
        doorOpen.classList.remove('alarm');
        doorOpen.innerHTML = 'закр.';
    };
    message();
});






// let button = document.querySelector('.btn');
// let message = document.querySelector('.message');


// button.addEventListener('click', (ev) => {
//     message.classList.add('.newMessage');
// });


// let test = () => {
//     console.log('hello');
// }
// //test();
// setTimeout(test, 3000);


// let example = (a, b) => {
//     let result = a - b;
//     console.log(result);
// }
// example(4, 2);


// let form = document.forms.test;
// form.addEventListener('submit', (ev) => {
//     ev.preventDefault();
//     let formData = new FormData(ev.target);
//     let type = Number(FormData.get('type'));

//     let res = (type * year * price)/100;
//     res.innerHTML = getresult;
// })

// let test = (a, b) => {
//     const sum = a + b;
//     return (sum);
// }
// const result = test ();


