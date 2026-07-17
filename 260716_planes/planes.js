let planes = [
    {
        nombre: 'Concierto al aire libre',
        lugar: 'Playa de Bogatell',
        precio: 10,
        categoría: 'Música',
        icono: '🪩',
        imagen: 'img/concert.jpg',
        reservado: false
    },
    {
        nombre: 'Visita a una expo',
        lugar: 'MACBA',
        precio: 0,
        categoría: 'Arte',
        icono: '🫠',
        imagen: 'img/museum.jpg',
        reservado: true
    },
    {
        nombre: 'Rafting',
        lugar: 'Riu Vinalopó',
        precio: 22,
        categoría: 'Deporte',
        icono: '🛶',
        imagen: 'img/rafting.jpg',
        reservado: false
    },
    {
        nombre: 'Drag Show',
        lugar: 'Strass',
        precio: 10,
        categoría: 'Drag',
        icono: '👑',
        imagen: 'img/drag.jpg',
        reservado: false
    }
]


const listaPlanes = document.getElementById('listaPlanes')

function mostrarPlanes() {
    listaPlanes.innerHTML = ''
    for (let i = 0; i < planes.length; i++) {
        // for (let plan of planes) {
        let plan = planes[i]  //necesito esta variable desde que cambio la definición del bucle
        let mensajeEstado
        let claseEstado
        if (plan.reservado === true) {
            mensajeEstado = 'Ya está reservado'
            claseEstado = 'reservado'
        } else {
            mensajeEstado = 'Plan disponible'
            claseEstado = 'disponible'
        }

        // poner "gratis" cuando el precio es cero
        let textoPrecio
        if (plan.precio === 0) {
            textoPrecio = 'Gratis'
        } else {
            textoPrecio = `${plan.precio} €`
        }

        listaPlanes.innerHTML += `
   <article class='tarjeta'>
   <div class='contenedorImagen'>
   <img src=${plan.imagen} alt='${plan.nombre}'>
   
   <span class='icono'>${plan.icono}</span>
   </div>
   <div class='contenidoTarjeta'>
   <p class='categoria'>${plan.categoría}</p>
   <h2>${plan.nombre} ${plan.icono}</h2>
   <p>Lugar: ${plan.lugar}</p>
   <p>Precio: ${textoPrecio}</p>
   <p class='estado ${claseEstado}'>${mensajeEstado}</p>
   <button class='btnReservar' data-indice='${i}'>Cambiar reserva</button>
   </div>
   </article>
   `
    }

    let botonesReservar = document.querySelectorAll('.btnReservar')

    for (let boton of botonesReservar) {
        boton.addEventListener('click', cambiarReserva)
    }
}

function cambiarReserva(ev) {
    let indice = ev.target.dataset.indice
    // console.log(indice)
    planes[indice].reservado = !planes[indice].reservado

    mostrarPlanes()
}


planes.push({
    nombre: 'Beer Pong',
    lugar: 'Playa',
    precio: 'lo que te valga la cerveza',
    categoría: 'Deporte',
    icono: '🍺',
    imagen: 'img/beerpong.jpg',
    reservado: false
}
)

mostrarPlanes()



