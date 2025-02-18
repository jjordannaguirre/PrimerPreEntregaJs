// Array con las preguntas y las respuestas correctas
const preguntas = [
  { pregunta: "¿Cuál es la capital de Francia?", respuestaCorrecta: "París" },
  { pregunta: "¿Cuántos continentes hay?", respuestaCorrecta: "7" },
  { pregunta: "¿Qué es 2 + 2?", respuestaCorrecta: "4" }
];

let puntaje = 0; // Variable para llevar el puntaje

// Función para hacer las preguntas y evaluar las respuestas
function hacerPregunta(pregunta, respuestaCorrecta) {
  const respuestaUsuario = prompt(pregunta);
  if (respuestaUsuario && respuestaUsuario.trim().toLowerCase() === respuestaCorrecta.toLowerCase()) {
    alert("¡Correcto!");
    puntaje++;  // Aumentamos el puntaje si la respuesta es correcta
  } else {
    alert(`Incorrecto. La respuesta correcta era: ${respuestaCorrecta}`);
  }
}

// Función principal para iniciar el juego
function jugar() {
  for (let i = 0; i < preguntas.length; i++) {
    const pregunta = preguntas[i].pregunta;
    const respuestaCorrecta = preguntas[i].respuestaCorrecta;
    hacerPregunta(pregunta, respuestaCorrecta);
  }
  
  // Al final del juego mostramos el puntaje
  alert(`Juego terminado. Tu puntaje es: ${puntaje} de ${preguntas.length}`);
}

// Iniciar el juego
jugar();
