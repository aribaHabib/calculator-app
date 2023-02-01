const body = document.querySelector(".root");
const toggle = document.querySelector("#toggle");
const circleToggle = document.querySelector("#circle-toggle");
const circle = document.querySelector(".circle");
const screen1 = document.querySelector(".screen");
const btns = document.querySelectorAll(".btn");
const title = document.querySelector(".title");
const keypad = document.querySelector(".keypad");
const equalBtn = document.querySelector(".equal-btn");
const btns1 = document.querySelectorAll(".btn1");

let theme = 1;
 
toggle.addEventListener('click', () =>{
    theme++;
    if(theme <= 2){
       circleToggle.classList.add('justify-center');
       body.classList.add('bg-[#e6e6e6]');
       keypad.classList.add('bg-[#d1cccc]');
       screen1.classList.add('bg-[#ededed]','text-[#35352c]');
       title.classList.add('text-[#35352c]');
       equalBtn.classList.add('bg-[#ca5502]','shadow-[0px_3px_0_#893901]','text-[#ffffff]','hover:bg-[#fd8835]');
       circle.classList.add('bg-[#ca5502]','hover:bg-[#fd8835]');
      btns.forEach(el => {
         el.classList.add('bg-[#e5e4e1]','text-[#35352c]','shadow-[0px_3px_0_#a69d91]');
      });
      btns1.forEach(el => {
         el.classList.add('bg-[#377f86]','shadow-[0px_3px_0_#1b5f65]','hover:bg-[#6ebdc4]');
      });
    }
    else if(theme <= 3){
       circleToggle.classList.remove('justify-center');
       circleToggle.classList.add('justify-end');
       body.classList.remove('bg-[#e6e6e6]');
       body.classList.add('bg-[#160628]');
       keypad.classList.remove('bg-[#d1cccc]');
       keypad.classList.add('bg-[#1d0934]');
       screen1.classList.remove('bg-[#ededed]','text-[#35352c]');
       screen1.classList.add('bg-[#1d0934]','text-[#ffe53d]');
       title.classList.remove('text-[#35352c]');
       title.classList.add('text-[#ffe53d]');
       equalBtn.classList.remove('bg-[#ca5502]','shadow-[0px_3px_0_#893901]','text-[#ffffff]','hover:bg-[#fd8835]');
       equalBtn.classList.add('bg-[#00e0d1]','shadow-[0px_3px_0_#6cf9f2]','text-[#35352c]','hover:bg-[#66fff5]');
       circle.classList.remove('bg-[#00e0d1]','hover:bg-[#fd8835]');
       circle.classList.add('bg-[#00e0d1]','hover:bg-[#66fff5]');
      btns.forEach(el => {
         el.classList.remove('bg-[#e5e4e1]','text-[#35352c]','shadow-[0px_3px_0_#a69d91]');
         el.classList.add('bg-[#341c4f]','text-[#ffe53d]','shadow-[0px_3px_0_#871c9c]','hover:bg-[#633597]');
      });
      btns1.forEach(el => {
         el.classList.remove('bg-[#377f86]','shadow-[0px_3px_0_#1b5f65]','hover:bg-[#6ebdc4]');
         el.classList.add('bg-[#58077d]','shadow-[0px_3px_0_#bc15f4]','hover:bg-[#870bc1]');
      });
    }
     else {
       theme = 1;
       circleToggle.classList.remove('justify-end');
       body.classList.remove('bg-[#160628]');
       screen1.classList.remove('bg-[#1d0934]','text-[#ffe53d]');
       keypad.classList.remove('bg-[#1d0934]');
       title.classList.remove('text-[#ffe53d]');
       equalBtn.classList.remove('bg-[#00e0d1]','shadow-[0px_3px_0_#6cf9f2]','text-[#35352c]','hover:bg-[#66fff5]');
       circle.classList.remove('bg-[#00e0d1]','hover:bg-[#66fff5]');
      btns.forEach(el => {
         el.classList.remove('bg-[#341c4f]','text-[#ffe53d]','shadow-[0px_3px_0_#871c9c]','hover:bg-[#633597]');
      });
      btns1.forEach(el => {
         el.classList.remove('bg-[#58077d]','shadow-[0px_3px_0_#bc15f4]','hover:bg-[#870bc1]');
      });
     }
});