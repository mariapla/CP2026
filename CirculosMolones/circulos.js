function descubrirCirculo() {

    let nombre = "Círculo Galáctico";
    let precio = 99;
    let rareza = "Legendario";

    document.getElementById("resultado").innerHTML = `
        <h2>${nombre}</h2>
        <p>Rareza: ${rareza}</p>
        <p>Precio: ${precio} €</p>
    `;

}
