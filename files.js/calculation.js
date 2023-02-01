const btn = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");

function button(a) {
    pre = screen.textContent;
    console.log(pre); 
    screen.textContent = pre + a;
}

function reset(){
    screen.textContent = '';
}

function equal(){
    screen.textContent = eval(screen.textContent); 
}

function del(){
    let n = screen.textContent;
    let l = n.length;
    screen.textContent= n.slice(0,l-1);
}