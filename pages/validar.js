$(document).ready(function() {
    // Función para validar el formulario
    function validarFormulario() {
      var nombre = $('#nombre').val();
      var apellido = $('#apellido').val();
      var edad= $('#edad').val();
      var email = $('#email').val();
      var telefono= $('#telefono').val();
      var asunto= $('#asunto').val();
      var mensaje= $('#mensaje').val();

      // Verificar que los campos no estén vacíos
      if (nombre === '' || apellido === '' || edad === ''|| email === ''|| telefono === ''|| asunto === ''|| mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return false;
      }

      // Verificar que el campo de correo electrónico tenga un formato válido
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Por favor, ingresa una dirección de correo electrónico válida.');
        return false;
      }
       // Verificar que el campo de telefono tenga un formato válido
      if(!/^\d{10}$/.test(telefono)){
          alert('Por favor ingrese un telefono valido debe ser de 10 digitos');
          return false;
      }
      // Si todos los campos son válidos, enviar el formulario
      alert('Formulario enviado correctamente.');
      return true;
    }

    // Asociar la función de validación al evento de envío del formulario
    $('#formulario').submit(function(event) {
      event.preventDefault(); // Prevenir el envío del formulario
      validarFormulario();
    });
  });