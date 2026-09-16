const cita = document.getElementById('cita')
const menu = document.getElementById('menu')

const url = 'https://api.chucknorris.io/jokes/random'

const urlCategorias = 'https://api.chucknorris.io/jokes/categories'

function imprimirCita(laCita) {
    cita.textContent = laCita.value
}

// fetch(url)
//     .then(respuesta =>
//         // console.log(respuesta)
//         respuesta.json()
//     )
//     .then(datos => imprimirCita(datos))

//nuevo fetch para llamar a la lista de categorías y montar con ella la navegación dinámicamente
fetch(urlCategorias)
    .then(respuesta => respuesta.json())
    .then(lista => {
        console.log(lista)
        lista.forEach(item => {
            console.log(item)
            let li = document.createElement('li')
            li.textContent = item
            menu.appendChild(li)
            li.addEventListener('click', () => {
                console.log(item)
                actualizarCategorias(item)
            })
        })
    })


function actualizarCategorias(categoria) {
    // https://api.chucknorris.io/jokes/random?category={category}
    //componemos una nueva url con la url básica y la variable de categoría que estamos introduciendo como parámetro en la función
    let cat = `${url}?category=${categoria}`
    fetch(cat)
        .then(respuesta =>respuesta.json())
        .then(datos => {
            imprimirCita(datos)
        })
}

