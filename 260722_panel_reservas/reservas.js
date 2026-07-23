// Declaración de variables

const actividad = document.getElementById('actividad')
const numeroPlazas = document.getElementById('numeroPlazas')
const btnReserva = document.getElementById('btnReserva')
const mensajeReserva = document.getElementById('mensajeReserva')

const formularioReserva = document.getElementById('formularioReserva')
const campoNombre = document.getElementById('nombre')
const mensajeNombre = document.getElementById('mensajeNombre')
const selectorTurno = document.getElementById('turno')
const comentario = document.getElementById('comentario')
const contadorCaracteres = document.getElementById('contadorCaracteres')
const resultadoFormulario = document.getElementById('resultadoFormulario')

let reservado = false
let plazasDisponibles = 5

// Listeners
btnReserva.addEventListener('mouseenter', () => {
    if (reservado) {
        btnReserva.textContent = 'Cancelar Reserva'
    } else {
        btnReserva.textContent = 'Reservar'
    }
})

btnReserva.addEventListener('mouseleave', ()=>{
    if (reservado) {
        btnReserva.textContent = 'Reservado'
    } else {
        btnReserva.textContent = 'Disponible'
    }
})

btnReserva.addEventListener('click', () => {
    reservado = !reservado
    if (reservado) {
        plazasDisponibles--
        btnReserva.textContent = 'Reservado'
        mensajeReserva.textContent = 'Reserva realizada'
        mensajeReserva.classList.add('reservada')
    } else {
        plazasDisponibles++
        btnReserva.textContent = 'Disponible'
        mensajeReserva.textContent = 'Reserva cancelada'
        mensajeReserva.classList.remove('reservada')
    }
    numeroPlazas.textContent = plazasDisponibles
})

campoNombre.addEventListener('focus', ()=>{
    campoNombre.classList.add('campo-activo')
})

campoNombre.addEventListener('blur', ()=>{
    campoNombre.classList.remove('campo-activo')
    if(campoNombre.value.trim()===''){
        mensajeNombre.textContent = 'El nombre es obligatorio, amigo'
        mensajeNombre.classList.add('error')
    } else {
        mensajeNombre.textContent = 'Nombre correcto'
        mensajeNombre.classList.remove('error')
        mensajeNombre.classList.add('correcto')
    }
})

comentario.addEventListener('input', ()=>{
    const cantidadCaracteres = `${comentario.value.length} de 100`
    contadorCaracteres.textContent = cantidadCaracteres
})
