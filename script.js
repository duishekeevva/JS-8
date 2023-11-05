const input1 = document.querySelector('#num1');
const btnMinus=document.querySelector('#btn-minus')
const btnClear = document.querySelector('#btn-clear');
const btnPlus = document.querySelector('#btn-plus');
const res = document.querySelector('#res')
const firstBtn=document.querySelector('#btn-one')
const secondBtn=document.querySelector('#btn-two')
const thirdBtn=document.querySelector('#btn-three')
const fourthBtn=document.querySelector('#btn-four')
const fifthBtn=document.querySelector('#btn-five')
const multiBtn=document.querySelector('#btn-multi')
const divBtn=document.querySelector('#btn-division')

btnMinus.addEventListener('click', ()=> {
    res.innerText=Number(res.innerText)-1
})

btnPlus.addEventListener ('click', ()=> {
    res.innerText=Number(res.innerText)+1
})

firstBtn.addEventListener ('click', ()=> {
    res.innerText=Number(res.innerText)+Number(firstBtn.innerText)
})

secondBtn.addEventListener('click', ()=>{
    res.innerText=Number(res.innerText)+Number(secondBtn.innerText)
})

thirdBtn.addEventListener('click', ()=>{
    res.innerText=Number(res.innerText)+Number(thirdBtn.innerText)
})

fourthBtn.addEventListener('click', ()=>{
    res.innerText=Number(res.innerText)+Number(fourthBtn.innerText)
})


fifthBtn.addEventListener('click', ()=>{
    res.innerText=Number(res.innerText)+Number(fifthBtn.innerText)
})

multiBtn.addEventListener('click', () => {
    res.innerText=Number(input1.value)*Number(res.innerText)
    if (res.innerText>200) {
        alert('Число больше 200')
    }
})

divBtn.addEventListener('click', ()=>{
    res.innerText=Number(input1.value)/Number(res.innerText)
})
btnClear.addEventListener('click', ()=> {
    res.innerText=Number(res.innerText===0)
})

btnClear.addEventListener('click', ()=> {
    input1.value=0
})