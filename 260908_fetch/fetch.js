const btnFoto = document.getElementById('btnFoto')
const foto = document.getElementById('foto')
const mensaje = document.getElementById('mensaje')


btnFoto.addEventListener('click', ()=>{
    fetch('https://picsum.photos/200/300')
    //te pido esto, prométeme que...
        .then(respuesta=>{
            //cuando esta respuesta llegue, haz lo que viene a continuación
            console.log(respuesta)
            return respuesta.blob()
            //el objeto blob() convierte la respuesta en un bloque de datos que compone la imagen
        })

        .then(imagen=>{
            console.log(imagen)
            //con la respuesta blob() no puedo cargar el src de la img, así que creo una url
            const urlImagen = URL.createObjectURL(imagen)
            //plantifico la url remasterizada en el atriburo src de la img
            foto.src = urlImagen
            mensaje.textContent = 'Foto aleatoria conseguida!'
        })
})
