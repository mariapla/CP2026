let mensajes = [
    "Hoy te corresponde un círculo fucsia con energía de viernes.",
    "Tu círculo ideal es verde lima: intenso, fresco y ligeramente escandaloso.",
    "Necesitas un círculo azul neón para ordenar el caos con estilo.",
    "Has desbloqueado el círculo premium: redondo, brillante y totalmente innecesario.",
    "Tu startup interior pide un círculo gigante con certificado de molonidad."
];

let contador = 0;

function cambiarCirculo() {
    let mensaje = document.getElementById("mensaje-circulo");

    mensaje.innerHTML = mensajes[contador];

    contador++;

    if (contador === mensajes.length) {
        contador = 0;
    }
}

function calcularPedido() {
  let productoElegido = document.getElementById("producto").value;

  let nombreProducto = "";
  let precioUnidad = 0;
  let gastosEnvio = 3.50;
  let descuento = 0;
  let mensajeCarrito = "";

  let cantidad = Number(document.getElementById("cantidad").value);

  if (productoElegido === "fucsia") {
    nombreProducto = "Círculo Fucsia";
    precioUnidad = 9.99;
  } else if (productoElegido === "zen") {
    nombreProducto = "Círculo Zen";
    precioUnidad = 14.99;
  } else {
    nombreProducto = "Círculo Premium";
    precioUnidad = 19.99;
  }

  if (cantidad <= 0) {
    mensajeCarrito = "No has escrito una cantidad válida. Incluso los círculos necesitan existir.";

    document.getElementById("resultado-pedido").innerHTML = mensajeCarrito;
  } else {
    let subtotal = precioUnidad * cantidad;

    if (cantidad >= 5) {
      descuento = subtotal * 0.15;
      mensajeCarrito = "Esto ya parece una colección circular. Te aplicamos un 15% de descuento.";
    } else if (cantidad >= 3) {
      mensajeCarrito = "Vas camino de convertirte en fan oficial de los círculos.";
    } else if (cantidad === 1) {
      mensajeCarrito = "Has añadido tu primer círculo. Todo gran imperio empieza con una forma redonda.";
    } else {
      mensajeCarrito = "Tu carrito empieza a ponerse molón.";
    }

    let total = subtotal - descuento + gastosEnvio;

    document.getElementById("resultado-pedido").innerHTML =
      mensajeCarrito + "<br><br>" +
      "Producto: " + nombreProducto + "<br>" +
      "Cantidad: " + cantidad + "<br>" +
      "Precio por unidad: " + precioUnidad.toFixed(2) + " €<br>" +
      "Subtotal: " + subtotal.toFixed(2) + " €<br>" +
      "Descuento: -" + descuento.toFixed(2) + " €<br>" +
      "Gastos de envío circular: " + gastosEnvio.toFixed(2) + " €<br>" +
      "<strong>Total final: " + total.toFixed(2) + " €</strong>";
  }
}