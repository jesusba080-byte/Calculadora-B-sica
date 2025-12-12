let display = document.getElementById(`screen`);
const wipe = ()=>{
    display.value = '';
}
const show = (n)=>{
    display.value += n;
}
const calculo = ()=>{
    display.value = eval(display.value);
}