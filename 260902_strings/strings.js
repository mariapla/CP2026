// DECLARACIONES
const nombre = document.getElementById('nombre')
const btnValidar = document.querySelector('#btnValidar')
const resultado = document.getElementById('resultado')


// LISTENERS
// function validar(){

// }
// btnValidar.addEventListener('click', function(){
    
// })
btnValidar.addEventListener('click', ()=>{
    let datoInput = nombre.value.trim()
    if(datoInput.length < 2){
        resultado.textContent = 'Tu nombre es demasiado corto, no nos lo creemos'
    } 
    else if(datoInput.includes(' ')){
        // resultado.textContent = 'Tu nombre no puede tener espacios, Javier Iván'
        datoInput = datoInput.replace(/\s/g, '')
        resultado.textContent = `${datoInput.toUpperCase()}, tu nombre tiene ${datoInput.length} caracteres`
    } 
   
    else {
          resultado.textContent = `${datoInput.toUpperCase()}, tu nombre tiene ${datoInput.length} caracteres`
    }
    
})



