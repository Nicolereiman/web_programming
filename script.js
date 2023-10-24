const reservas = {
    lista: [],
    agregarReserva: function(reserva) {
      this.lista.push(reserva);
    },
  };
  
  function guardarFormulario() {
    // Obtén los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const nacimiento = document.getElementById("nacimiento").value;
    const email = document.getElementById("email").value;
    const tour = document.getElementById("tour").value;
  
    // Crea un objeto con los datos del formulario
    const reserva = {
      nombre: nombre,
      nacimiento: nacimiento,
      email: email,
      tour: tour,
    };
  
    // Agrega este objeto al objeto 'reservas'
    reservas.agregarReserva(reserva);
  
    // Muestra el mensaje de reserva
    const mensajeReserva = `
      <p>${nombre}, tu reserva está confirmada para el tour ${tour}.</p>
      <p>Te contactaremos a tu casilla de correo ${email} para coordinar el horario según disponibilidad.</p>
    `;
  
    const mensajeReservaElement = document.getElementById("mensaje-reserva");
    mensajeReservaElement.innerHTML = mensajeReserva;
  }
  