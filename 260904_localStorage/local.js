const input = document.getElementById('texto')
const boton = document.getElementById('btnAñadir')
const lista = document.getElementById('lista')

let cosas = []

//nos preguntamos si quizás hay algo almacenado
const cosasGuardadas = localStorage.getItem('cosas')

if (cosasGuardadas !== null) {
    cosas = JSON.parse(cosasGuardadas)
}

mostrarLista()
//listener

boton.addEventListener('click', () => {
    const nuevaCosa = input.value.trim()
    if (nuevaCosa === '') {
        return
    }
    cosas.push(nuevaCosa)
    localStorage.setItem('cosas', JSON.stringify(cosas))
    mostrarLista()
    input.value = ''
})



//funciones
function mostrarLista() {
    lista.innerHTML = ''

    for (let i = 0; i < cosas.length; i++) {
        const li = document.createElement('li')
        li.textContent = cosas[i]
        lista.appendChild(li)
    }
}
