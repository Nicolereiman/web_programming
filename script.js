
//----------RESERVAS 
// Armo una lista de reservas
const reservas = {
  lista: [],
  agregarReserva: function(reserva) {
    // Agrego la nueva reserva, cargada en el formulario,  a la lista
    this.lista.push(reserva);
  },
};

// Función para guardar los datos del formulario de reservas
function guardarFormulario() {
  // Extraigo los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const nacimiento = document.getElementById("nacimiento").value;
  const email = document.getElementById("email").value;
  const tour = document.getElementById("tour").value;

  // Validación:  todos los campos tienen que estar completos, si alguno no está no se proesan los datos
  if (!nombre || !nacimiento || !email || !tour) {
    // Alerta al usuario si faltan datos
      Swal.fire({
        title: "Error!",
        text: "Por favor, completa todos los campos del formulario.!",
        icon: "error"
      });
    
    return;
  }

  // Objeto literal (diccionario) con los datos del formulario
  const reserva = { nombre, nacimiento, email, tour };

  // Agrego la reserva al objeto 'reservas'
  reservas.agregarReserva(reserva);

  // Mensaje de confirmación para el usuario, para confirmar la reserva
  const mensajeReserva = `
    <p>${nombre}, tu reserva está confirmada para el tour ${tour}.</p>
    <p>Te contactaremos a tu casilla de correo ${email} para coordinar el horario según disponibilidad.</p>
  `;

  // Muestro el mensaje de reserva en la página
  const mensajeReservaElement = document.getElementById("mensaje-reserva");
  mensajeReservaElement.innerHTML = mensajeReserva;
  mensajeReservaElement.style.display = "block";

  //reiniciar el formulario cuando ya se procesó, por si se quiere hacer una nueva reserva
  document.getElementById("formularioReserva").reset();
}

//----------RESEÑAS 
function guardarResena() {
  // Obtengo los valores del formulario de reseñas
  const nombre = document.getElementById("nombreResena").value;
  const edad = document.getElementById("edadResena").value;
  const ciudad = document.getElementById("ciudadResena").value;
  const comentario = document.getElementById("comentarioResena").value;
  const puntuacion = document.getElementById("puntuacionResena").value;

  // Validación de la reseña
  if (!nombre || !edad || !ciudad || !comentario || !puntuacion) {
    // Muestra un mensaje de error si faltan datos
    Swal.fire({
      title: "Error!",
      text: "Por favor, completa todos los campos del formulario.!",
      icon: "error"
    });
    return;
  }

  // Validación de la edad (por ejemplo, debe ser un número positivo)
  if (isNaN(edad) || edad <= 0) {
    // Muestra un mensaje de error si la edad no es válida
    Swal.fire({
      title: "Error!",
      text: "Por favor, ingresá una edad válida!",
      icon: "error"
    });
    return;
  }

  // Creo un objeto con la información de la nueva reseña
  const nuevaResena = {
    nombre: nombre,
    edad: edad,
    ciudad: ciudad,
    comentario: comentario,
    puntuacion: puntuacion,
  };

  // Muestra la notificación de agradecimiento
    Swal.fire({
      title: "Todo listo!",
      text: " Tu reseña ha sido recibida. Revisaremos que cumpla con nuestras normas de convivencia antes de publicarla.",
      icon: "success"
    });

  // Reinicio el formulario
  document.getElementById("formularioResena").reset();
}






//Esta idea nunca funcionó
function cambiarFondoSegunHora() {
  console.log("Cambiando fondo según la hora...");
  if (horaActual >= 6 && horaActual < 16) {
    console.log("Es de día (mañana)");
    body.style.backgroundImage = "url('fondo4.jpg')";
  } else if (horaActual >= 16 && horaActual < 21) {
    console.log("Es de tarde");
    body.style.backgroundImage = "url('fondo6.jpg')";
  } else {
    console.log("Es de noche");
    body.style.backgroundImage = "url('fondo3.jpg')";
  }
}


// llamar a la función 
cambiarFondoSegunHora()
