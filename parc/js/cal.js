function display(val) {
    document.getElementById('result').value += val;
    return val;
}
function solve() {
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
    return y;

}
function clearScreen(){
    document.getElementById('result').value = '';
}

//window.onload document.onload
//(function(){})();

let buttons = document.getElementsByClassName('button');
let operators = document.getElementsByClassName('operator');
for(let button of buttons){
    let val = button.value;
    if(!button.className.includes('equal-sign')){
        button.addEventListener('click',()=>display(val));
    }
}

for(let oper of operators){
    let val = oper.value;
    oper.addEventListener('click',()=>display(val));
}
document.querySelector('.equal-sign').addEventListener('click',()=>solve());