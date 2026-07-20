let saludo = document.getElementById('saludo')
let btnNombre = document.getElementById('btnNombre')

let tamañoVentana = document.getElementById('tamañoVentana')

let idiomaNavegador = document.getElementById('idiomaNavegador')
idiomaNavegador.textContent = navigator.language

let estadoConexion = document.getElementById('estadoConexion')

let paginaActual = document.getElementById('paginaActual')
paginaActual.textContent = location.pathname

// Listeners

btnNombre.addEventListener('click', identificarUsuario)
window.addEventListener('resize', actualizarTamaño)
window.addEventListener('online', actualizarConexion)
window.addEventListener('offline', actualizarConexion)

function identificarUsuario() {
    // alert('hola')
    let nombre = prompt('¿Cómo te llamas?')
    if (nombre === null || nombre === '') {
        saludo.textContent = 'Hola, visitante'
    } else {
        saludo.textContent = `Hola, ${nombre}`

    }
}

function actualizarTamaño(){
    tamañoVentana.textContent = window.innerWidth + ' x ' + window.innerHeight
}

function actualizarConexion(){
    if(navigator.onLine === true){
        estadoConexion.textContent = 'En línea'
    } else {
        estadoConexion.textContent = 'Sin conexión'
    }
}

actualizarTamaño()
actualizarConexion()

