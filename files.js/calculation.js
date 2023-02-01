const btn = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");

let input = 0;

function button(a) {
    if(input != 0){
        reset();
        input = 0;
    }
    value = screen.innerHTML;
    screen.innerHTML = value + a;
}

function reset(){
    screen.innerHTML = '';
}

function equal(){
    screen.innerHTML = eval(screen.innerHTML); 
    input = 1;
}

function del(){
    let val = screen.innerHTML;
    let len = val.length;
    screen.innerHTML= val.slice(0,len-1);
}