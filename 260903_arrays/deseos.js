const inputDeseo = document.getElementById('deseo')
const btnAñadir = document.getElementById('btnAñadir')
const btnUrgente = document.getElementById('btnUrgente')
const lista = document.getElementById('lista')
const mensajes = document.getElementById('mensajes')
let deseos = []

const btnBuscar = document.getElementById('btnBuscar')
const inputBusqueda = document.getElementById('busqueda')

const origen = document.getElementById('origen')
const nuevo = document.getElementById('nuevo')
const btnEditar = document.getElementById('btnEditar')

//listeners
btnAñadir.addEventListener('click', () => {
    
    const deseo = inputDeseo.value.trim()
    inputDeseo.value = ''
    if (deseo.length === 0) {
        mensajes.textContent = 'Desea algo!'
        return
    }

    //verificar si el elemento está ya en el array (o no)
    if(deseos.includes(deseo)){
        mensajes.textContent = 'Esto lo deseas mucho...'
        return
    }

    mensajes.textContent = ''
    deseos.push(deseo)
    console.log(deseos)
    mostrarDeseos()
})

btnUrgente.addEventListener('click', () => {
    
    const deseo = inputDeseo.value.trim()
    inputDeseo.value = ''
    if (deseo.length === 0) {
        mensajes.textContent = 'Desea algo!'
        return
    }

    //verificar si el elemento está ya en el array (o no)
    if(deseos.includes(deseo)){
        mensajes.textContent = 'Esto lo deseas mucho...'
        return
    }

    mensajes.textContent = ''
    deseos.unshift(deseo)
   mostrarDeseos()
})

btnBuscar.addEventListener('click', ()=>{
    const texto = inputBusqueda.value.trim()
    const posicion = deseos.indexOf(texto)
    if(posicion === -1){
        mensajes.textContent = 'Tú no tienes este deseo'
    } else {
        mensajes.textContent = `Tu deseo està en la posición ${posicion+1} y en el índice ${posicion} `
    }
})

btnEditar.addEventListener('click', ()=>{
    const textoOriginal = origen.value.trim()
    const textoNuevo = nuevo.value.trim()

    const posicion = deseos.indexOf(textoOriginal)
    if(posicion === -1){
        mensajes.textContent = 'Tú nunca has deseado esto...'
        return
    }

    deseos[posicion] = textoNuevo
    mostrarDeseos()
    mensajes.textContent = 'Deseo actualizado!'
})

//funciones
function mostrarDeseos() {
    lista.innerHTML = ''

    for (let i = 0; i < deseos.length; i++) {
        const li = document.createElement('li')
        li.textContent = deseos[i]
        lista.appendChild(li)
    }

}
