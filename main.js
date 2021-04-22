
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
