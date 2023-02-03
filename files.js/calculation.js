const btn = document.querySelectorAll(".btn");
let screen = document.querySelector("input");

let input = 0;

function button(a) {
    if(input != 0){
        reset();
        input = 0;
    }
    value = screen.value;
    screen.value = value + a;
}

function reset(){
    screen.value = '';
}

function equal(){
    screen.value = eval(screen.value); 
    input = 1;
}

function del(){
    let val = screen.value;
    let len = val.length;
    screen.value= val.slice(0,len-1);
}

document.querySelector("html").addEventListener('keydown', (e)=>{
    let m= e.key
    if(m>=0 && m<=9){
        button(m);
    }
    if(m=='-' || m=='+'|| m=='/' || m=='.' || m=='*'){
        button(m);
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