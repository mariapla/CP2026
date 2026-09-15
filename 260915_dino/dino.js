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


document.addEventListener('keydown', (ev) => {
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
    ctx.fillRect(0, 280, canvas.width, 2)
}

function dibujarCactus() {
    ctx.fillStyle = '#f58f22'
    ctx.fillRect(
        cactus.x,
        cactus.y,
        cactus.ancho,
        cactus.alto
    )
}

function actualizar() {
    if (finJuego === true) {
        ctx.fillStyle = "black"
        ctx.font = '40px Arial'
        ctx.fillText('Fin del juego', 280, 140)
        return
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    cactus.x = cactus.x - 5
    //este es el desplazamiento, solo se mueve 5 px a la izquierda en cada frame, pero para que existan más frames, necesitamos la función requestAnimationFrame()
    if (cactus.x < -cactus.ancho) {
        cactus.x = canvas.width
        //a la misma condición la sumamos 1 punto
        puntos++
    }
    //con la condición hacemos que si se sale del canva, regrese por la derecha (canvas.width)
    dino.y = dino.y + dino.velocidadY //dibujamos al dino con la actualización de y de la barra espaciadora
    dino.velocidadY = dino.velocidadY + gravedad //con la gravedad conseguimos que deje de subir y baje, pero no tiene límite
    //ponemos el límite, diciendo que si está más abajo que el suelo, que se quede en el suelo
    if (dino.y >= 200) {
        dino.y = 200
        dino.velocidadY = 0
    }
    const colision =
        dino.x < cactus.x + cactus.ancho &&
        dino.x + dino.ancho > cactus.x &&
        dino.y < cactus.y + cactus.alto &&
        dino.y + dino.alto > cactus.y

    if (colision) {
        finJuego = true
    }

   
    ctx.font = '20px Arial'
    ctx.fillText(`Puntos: ${puntos}`, 650, 30)

    dibujarDino()
    dibujarSuelo()
    dibujarCactus()
    requestAnimationFrame(actualizar)
    //aquí creamos la animación, haciendo que la función "se llame a sí misma" en cada frame


}

actualizar()


// cactus.x =  cactus.x-5
// dibujarCactus()


