const btn = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");

let input = 0;

function button(a) {
    if(input != 0){
        reset();
        input = 0;
    }
    value = screen.textContent;
    screen.textContent = value + a;
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

document.querySelector("html").addEventListener('keydown', (e)=>{
    let m= e.key
    console.log(m)
    if(m>=0 && m<=9){
        button(m)
    }
    if(m=='-' || m=='+'|| m=='/' || m=='.' || m=='*'){
        button(m)
    }
    if(m=='Enter'){
        equal();
    }
    if(m=='Backspace'){
        del();
    }
    if(m=='Delete'){
        reset();
    }
})
