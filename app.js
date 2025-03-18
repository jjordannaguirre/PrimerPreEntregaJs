// Array con las preguntas y respuestas correctas
const preguntas = [
  { pregunta: "¿Cuál es la capital de Francia?", respuestaCorrecta: "París" },
  { pregunta: "¿Cuántos continentes hay?", respuestaCorrecta: "7" },
  { pregunta: "¿Qué es 2 + 2?", respuestaCorrecta: "4" }
];

let puntaje = localStorage.getItem("puntaje") ? parseInt(localStorage.getItem("puntaje")) : 0;
let preguntaActual = localStorage.getItem("preguntaActual") ? parseInt(localStorage.getItem("preguntaActual")) : 0;

const preguntaElemento = document.getElementById("pregunta");
const inputRespuesta = document.getElementById("respuesta");
const botonEnviar = document.getElementById("enviar");
const resultadoElemento = document.getElementById("resultado");
const puntajeElemento = document.getElementById("puntaje");
const botonReiniciar = document.getElementById("reiniciar");

function mostrarPregunta() {
  if (preguntaActual < preguntas.length) {
    preguntaElemento.textContent = preguntas[preguntaActual].pregunta;
    inputRespuesta.value = "";
    inputRespuesta.disabled = false;
    botonEnviar.disabled = false;
  } else {
    preguntaElemento.textContent = `Juego terminado. Tu puntaje es: ${puntaje} de ${preguntas.length}`;
    inputRespuesta.disabled = true;
    botonEnviar.disabled = true;
    localStorage.setItem("puntaje", puntaje);
  }
  puntajeElemento.textContent = `Puntaje: ${puntaje}`;
  localStorage.setItem("preguntaActual", preguntaActual);
}

botonEnviar.addEventListener("click", () => {
  if (preguntaActual < preguntas.length) {
    const respuestaUsuario = inputRespuesta.value.trim().toLowerCase();
    const respuestaCorrecta = preguntas[preguntaActual].respuestaCorrecta.toLowerCase();
    
    if (respuestaUsuario === respuestaCorrecta) {
      resultadoElemento.textContent = "¡Correcto!";
      puntaje++;
      localStorage.setItem("puntaje", puntaje);
    } else {
      resultadoElemento.textContent = `Incorrecto. La respuesta correcta era: ${preguntas[preguntaActual].respuestaCorrecta}`;
    }
    
    preguntaActual++;
    setTimeout(mostrarPregunta, 1000);
  }
});

botonReiniciar.addEventListener("click", () => {
  localStorage.setItem("puntaje", 0);
  localStorage.setItem("preguntaActual", 0);
  puntaje = 0;
  preguntaActual = 0;
  resultadoElemento.textContent = "";
  mostrarPregunta();
});

mostrarPregunta();

