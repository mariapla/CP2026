const btnMagico = document.getElementById('btnMagico')

let reservado = false

btnMagico.addEventListener('mouseover', () => {
    if (!reservado) {
        btnMagico.textContent = '¡Reserva!'
    } else {
        btnMagico.textContent = 'Cancelar'
    }
})

btnMagico.addEventListener('click', () => {
    if (!reservado) {
        btnMagico.textContent = 'Reservado'
        reservado = true
        btnMagico.style.backgroundColor = 'darkorange'
    } else {
        btnMagico.textContent = 'Disponible'
        reservado = false
        btnMagico.style.backgroundColor = 'greenyellow'
    }
})

btnMagico.addEventListener('mouseleave', () => {
    if (btnMagico.textContent==='¡Reserva!') {
        btnMagico.textContent = 'Disponible'
    } else {
        btnMagico.textContent = 'Reservado'
    }
})
