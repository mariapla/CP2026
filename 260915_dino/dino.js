const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const gravedad = 0.6

const dino = {
    x: 50,
    y: 200,
    ancho: 40,
    alto: 80,
    velocidadY: 0
}

const cactus = {
    x: 750,
    y: 240,
    ancho: 25,
    alto: 40
}

let puntos = 0

let finJuego = false

// Aquí guardaremos todos los cactus que existen en este momento
let ejercitoCactus = []


document.addEventListener('keydown', (ev) => {

    // El dinosaurio solo puede saltar si está en el suelo
    if (ev.code === 'Space' && dino.y === 200) {

        console.log('salta!')

        dino.velocidadY = -12
    }
})


function dibujarDino() {

    ctx.fillStyle = '#bafc03'

    ctx.fillRect(
        dino.x,
        dino.y,
        dino.ancho,
        dino.alto
    )
}


function dibujarSuelo() {

    ctx.fillStyle = '#72a378'

    ctx.fillRect(
        0,
        280,
        canvas.width,
        2
    )
}


// Dibujamos todos los cactus que hay dentro del array
function dibujarCactus() {

    ejercitoCactus.forEach((cactus) => {

        ctx.fillStyle = '#f58f22'

        ctx.fillRect(
            cactus.x,
            cactus.y,
            cactus.ancho,
            cactus.alto
        )

    })
}


// Cada vez que llamamos a esta función creamos un cactus nuevo
function crearCactus() {

    // Altura aleatoria entre 30 y 70 aproximadamente
    const alto = Math.random() * 40 + 30

    // El cactus puede aparecer justo después del canvas
    // o bastante más lejos.
    // Así la distancia entre cactus no será siempre igual.
    const distancia = Math.random() * 400

    ejercitoCactus.push({

        // El cactus aparece por la derecha,
        // pero no siempre exactamente en el mismo punto
        x: canvas.width + distancia,

        // Lo colocamos apoyado en el suelo
        y: 280 - alto,

        ancho: 25,

        alto: alto,

        // Cada cactus tendrá una velocidad distinta
        // entre 4 y 6 píxeles por frame aproximadamente
        velocidad: Math.random() * 2 + 4,

        // Nos permite saber si este cactus
        // ya ha generado el siguiente
        otro: false,

        // Cada cactus tendrá un momento diferente
        // para crear el siguiente cactus.
        //
        // Algunos lo harán pronto y habrá dos cactus juntos.
        // Otros lo harán tarde y estarán más separados.
        momentoNuevoCactus:
            Math.random() * 300 + 200
    })
}

function actualizar() {

    // Si hemos perdido, mostramos el mensaje
    // y dejamos de ejecutar la animación
    if (finJuego === true) {

        ctx.fillStyle = 'black'
        ctx.font = '40px Arial'

        ctx.fillText(
            'Fin del juego',
            280,
            140
        )

        return
    }


    // Borramos el fotograma anterior
    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    )


    // Recorremos todos los cactus
    ejercitoCactus.forEach((cactus) => {

        // Movemos cada cactus hacia la izquierda pero con la actualización de velocidad
       cactus.x = cactus.x - cactus.velocidad


        // Cada cactus tiene su propio momento
        // para generar el siguiente
        if (
            cactus.x <= cactus.momentoNuevoCactus &&
            cactus.otro === false
        ) {

            crearCactus()

            // Marcamos que este cactus ya ha creado otro
            // para que no cree uno en cada frame
            cactus.otro = true
        }


        // Cuando el cactus sale completamente por la izquierda
        // sumamos un punto
        if (cactus.x < -cactus.ancho) {

            puntos++
        }

    })


    // Eliminamos del array los cactus que ya
    // han desaparecido completamente del canvas
    ejercitoCactus = ejercitoCactus.filter((cactus) => {

        return cactus.x > -cactus.ancho

    })


    // Actualizamos la posición vertical del dinosaurio
    // con la velocidad producida por el salto
    dino.y = dino.y + dino.velocidadY


    // La gravedad va aumentando la velocidad hacia abajo
    dino.velocidadY =
        dino.velocidadY + gravedad


    // Ponemos el límite del suelo
    if (dino.y >= 200) {

        dino.y = 200

        dino.velocidadY = 0
    }


    // Como ahora tenemos varios cactus,
    // tenemos que comprobar la colisión con TODOS
    ejercitoCactus.forEach((cactus) => {

        const colision =
            dino.x < cactus.x + cactus.ancho &&
            dino.x + dino.ancho > cactus.x &&
            dino.y < cactus.y + cactus.alto &&
            dino.y + dino.alto > cactus.y


        if (colision) {

            finJuego = true
        }

    })


    // Mostramos los puntos
    ctx.fillStyle = 'black'
    ctx.font = '20px Arial'

    ctx.fillText(
        `Puntos: ${puntos}`,
        650,
        30
    )


    // Dibujamos el nuevo fotograma
    dibujarDino()
    dibujarSuelo()
    dibujarCactus()


    // Volvemos a ejecutar actualizar
    // en el siguiente fotograma
    requestAnimationFrame(actualizar)

}


// Creamos el primer cactus
crearCactus()

// Arrancamos el juego
actualizar()
