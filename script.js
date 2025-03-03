// Función para ocultar la imagen cuando se hace clic en ella
document.querySelector('.map-overlay').addEventListener('click', function() {
    this.classList.add('hidden'); // Ocultar la imagen
});

// Función para manejar el envío del formulario
function enviarFormulario() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    // Verificar si los campos están vacíos
    if (nombre === "" || email === "" || telefono === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        // Si todo está completo, mostrar el alert con los datos ingresados
        alert("¡Formulario enviado con éxito!\n" +
              "Nombre: " + nombre + "\n" +
              "Correo Electrónico: " + email + "\n" +
              "Número de Teléfono: " + telefono);
    }
}