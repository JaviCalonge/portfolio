//SIEMPRE INICA AL PRINCIPIO
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// EFECTO TYPING PORTADA //
document.addEventListener("DOMContentLoaded", function () {
  const line1 = document.querySelector(".line1");
  const line2 = document.querySelector(".line2");
  const cursor1 = document.querySelector(".cursor1");
  const cursor2 = document.querySelector(".cursor2");

  cursor2.style.display = "none";

  const text1 = "WEB";
  const text2 = "DEVELOPER";

  let index1 = 0;
  let index2 = 0;

  // Función para escribir el primer texto
  function typeWriterLine1() {
    if (index1 < text1.length) {
      line1.innerHTML += text1.charAt(index1);
      index1++;
      setTimeout(typeWriterLine1, 150); // Velocidad de tipeo
    } else {
      cursor1.style.display = "none";
      // Una vez que termine la primera línea, iniciar la segunda
      setTimeout(() => {
        cursor2.style.display = "inline-block"; // Mostrar el cursor 2
        typeWriterLine2();
      }, 200); // Pausa antes de empezar a escribir la segunda línea
    }
  }

  // Función para escribir el segundo texto
  function typeWriterLine2() {
    if (index2 < text2.length) {
      line2.innerHTML += text2.charAt(index2);
      index2++;
      setTimeout(typeWriterLine2, 150); // Velocidad de tipeo
    } else {
      setTimeout(() => {
        cursor2.style.display = "none";
      }, 2500);
    }
  }

  // Inicializar las líneas vacías
  line1.innerHTML = "";
  line2.innerHTML = "";

  // Retraso antes de comenzar la animación
  setTimeout(() => {
    typeWriterLine1();
  }, 300); // Pausa de 0.3 segundos antes de empezar a escribir la primera línea
});

//MOVIMIENTO SUAVE PARA TRANSICIONES
document
  .querySelector(".scroll-indicator")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    smoothScrollTo(document.querySelector("#web3"), 2000); // Ajusta el tiempo en milisegundos (2000ms = 2 segundos)
  });

function smoothScrollTo(target, duration) {
  // Obtener la posición de scroll actual de forma compatible con diferentes navegadores
  const startPosition =
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  const targetPosition = target.getBoundingClientRect().top + startPosition; // Sumar para tener en cuenta la posición global de la página
  let startTime = null;

  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(
      timeElapsed,
      startPosition,
      targetPosition - startPosition,
      duration
    );
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  }

  function ease(timeElapsed, startPosition, targetPosition, duration) {
    timeElapsed /= duration / 2;
    if (timeElapsed < 1)
      return (targetPosition / 2) * timeElapsed * timeElapsed + startPosition;
    timeElapsed--;
    return (
      (-targetPosition / 2) * (timeElapsed * (timeElapsed - 2) - 1) +
      startPosition
    );
  }

  requestAnimationFrame(animationScroll);
}
