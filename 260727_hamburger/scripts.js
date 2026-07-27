const burger = document.getElementById('burger')
const salir = document.getElementById('salir')
const nav = document.querySelector('nav')

const cajaAnimada = document.querySelector('.cajaAnimada')

btnEscalar = document.getElementById('btnEscalar')
btnRotar = document.getElementById('btnRotar')
btnOpacidad = document.getElementById('btnOpacidad')
btnRedondear = document.getElementById('btnRedondear')
btnCombo =document.getElementById('btnCombo')
btnReset = document.getElementById('btnReset')

//Listeners

burger.addEventListener('click', ()=>{
    nav.classList.add('mostrar')
})

salir.addEventListener('click', ()=>{
    nav.classList.remove('mostrar')
})

btnEscalar.addEventListener('click', ()=>{
    cajaAnimada.classList.toggle('escalar')
})

btnRotar.addEventListener('click', ()=>{
    cajaAnimada.classList.toggle('rotar')
})

btnOpacidad.addEventListener('click', ()=>{
    cajaAnimada.classList.toggle('opacidad')
})

btnRedondear.addEventListener('click', ()=>{
    cajaAnimada.classList.toggle('redondear')
})
btnCombo.addEventListener('click', ()=>{
    cajaAnimada.classList.toggle('combo')
})

btnReset.addEventListener('click', ()=>{
    cajaAnimada.className = 'cajaAnimada'
})
