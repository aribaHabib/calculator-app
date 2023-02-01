const btn = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");

let input = 0;

function button(a) {
    if(input != 0){
        reset();
        input = 0;
    }
    pre = screen.textContent;
    console.log(pre); 
    screen.textContent = pre + a;
}

function reset(){
    screen.textContent = '';
}

function equal(){
    screen.textContent = eval(screen.textContent); 
    input = 1;
}

function del(){
    let val = screen.textContent;
    let len = val.length;
    screen.textContent= val.slice(0,len-1);
}