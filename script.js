const reservas = {
  lista: [],
  agregarReserva: function(reserva) {
    this.lista.push(reserva);
  },
};

function guardarFormulario() {
  // Tomamos los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const nacimiento = document.getElementById("nacimiento").value;
  const email = document.getElementById("email").value;
  const tour = document.getElementById("tour").value;

  // Creamos un objeto con los datos del formulario
  const reserva = {
    nombre: nombre,
    nacimiento: nacimiento,
    email: email,
    tour: tour,
  };

  // Agregamos este objeto al objeto 'reservas'
  reservas.agregarReserva(reserva);

  // Muestra el mensaje de reserva
  const mensajeReserva = `
    <p>${nombre}, tu reserva está confirmada para el tour ${tour}.</p>
    <p>Te contactaremos a tu casilla de correo ${email} para coordinar el horario según disponibilidad.</p>
  `;

  const mensajeReservaElement = document.getElementById("mensaje-reserva");
  mensajeReservaElement.innerHTML = mensajeReserva;
  // Cambia el estilo para que el div sea visible
  mensajeReservaElement.style.display = "block"; 
}

// hora actual
var horaActual = new Date().getHours();
var body = document.body;

// Función para cambiar el fondo según el momento del día
function cambiarFondoSegunHora() {
    if (horaActual >= 6 && horaActual < 16) {
        // Mañana (de 6:00 a 11:59)
        body.style.backgroundImage = "url('fondo4.jpg')";
    } else if (horaActual >= 16 && horaActual < 21) {
        // Tarde (de 16:00 a 20:59)
        body.style.backgroundImage = "url('fondo6.jpg')";
    } else {
        // Noche (de 21:00 a 05:59)
        body.style.backgroundImage = "url('fondo3.jpg')";
    }
}

// Llama a la función para cambiar el fondo
cambiarFondoSegunHora();


    /*
  

    // Definimos una lista de reseñas
const listaReseñas = [];
// Función para agregar una reseña a la lista
function mostrarAgradecimiento(datos) {
  function mostrarAgradecimiento(datos) {
    const mensajeAgradecimiento = `
      <div class="agradecimiento">
        <p>¡Gracias ${datos.nombre} por compartir tu experiencia!</p>
        <p>Estos son los datos ingresados:</p>
        <ul>
          <li>Nombre: ${datos.nombre}</li>
          <li>Edad: ${datos.edad}</li>
          <li>Ciudad: ${datos.ciudad}</li>
          <li>Puntuación: ${datos.puntuacion}</li>
          <li>Comentario: ${datos.comentario}</li>
        </ul>
        <p>Revisaremos que nada infrinja nuestras normas de convivencia y la subiremos al sitio.</p>
        <p>¡Esperamos verte pronto!</p>
      </div>
    `;
  
    const agradecimientoElement = document.getElementById("agradecimiento");
    agradecimientoElement.innerHTML = mensajeAgradecimiento;
  }
  

function guardarResena() {
  // Obtenemos los valores del formulario de reseñas
  const nombre = document.getElementById("nombreResena").value;
  const edad = document.getElementById("edadResena").value;
  const ciudad = document.getElementById("ciudadResena").value;
  const puntuacion = document.getElementById("puntuacionResena").value;
  const comentario = document.getElementById("comentarioResena").value;

  // Creamos un objeto literal con la información
  const reseña = {
    nombre: nombre,
    edad: edad,
    ciudad: ciudad,
    puntuacion: puntuacion,
    comentario: comentario,
  };
   // Llama a la función para mostrar las reseñas actualizadas
  mostrarAgradecimiento(reseña);
  // Agregamos la reseña a la lista
  listaReseñas.push(reseña);

  // Limpia los campos del formulario de reseñas
  document.getElementById("nombreResena").value = "";
  document.getElementById("edadResena").value = "";
  document.getElementById("ciudadResena").value = "";
  document.getElementById("puntuacionResena").value = "5"; // Restaurar la puntuación predeterminada
  document.getElementById("comentarioResena").value = "";

 
}
}Este es un comentario multilínea en JavaScript.
  Puedes escribir varias líneas de comentarios aquí.
  Esto es útil para explicar bloques de código extensos.
*/