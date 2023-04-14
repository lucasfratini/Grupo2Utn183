const nextBtn = document.querySelector("#next-btn");
const backBtn = document.querySelector("#back-btn");
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const summary = document.querySelector("#summary");

//agregar evento onclick al botón enviar
nextBtn.addEventListener("click", function() {
  // recopilar datos del primer paso
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let edad = document.querySelector("#edad").value;
  let email = document.querySelector("#email").value;
  let telefono = document.querySelector("#telefono").value;
  let asunto = document.querySelector("#asunto").value;
  let mensaje = document.querySelector("#mensaje").value;

  // mostrar resumen en el segundo paso
  summary.innerHTML =  `Nombre: ${nombre}<br>
                        Apellido: ${apellido}<br>
                        Edad: ${edad}<br>
                        Email: ${email}<br>
                        Telefono: ${telefono}<br>
                        Asunto: ${asunto}<br>
                        Mensaje: ${mensaje}`;
  
  // ocultar el primer paso y mostrar el segundo paso
  step1.style.display = "none";
  step2.style.display = "block";
});