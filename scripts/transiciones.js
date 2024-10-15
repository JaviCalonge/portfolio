//MOVIMIENTO SUAVE PARA TRANSICIONES

//De nav a sobre mí
document
  .querySelector(".nav-btn-about")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    smoothScrollTo(document.querySelector(".about"), 2000); // Ajusta el tiempo en milisegundos (2000ms = 2 segundos)
  });

//De nav a proyectos
document
  .querySelector(".nav-btn-work")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    smoothScrollTo(document.querySelector(".projects-title-class"), 2000); // Ajusta el tiempo en milisegundos (2000ms = 2 segundos)
  });

//De nav a contacto
document
  .querySelector(".nav-btn-contacto")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    smoothScrollTo(document.querySelector("#contacto"), 2000); // Ajusta el tiempo en milisegundos (2000ms = 2 segundos)
  });

//De flecha a proyectos
document.querySelector(".my-work").addEventListener("click", function (event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
  smoothScrollTo(document.querySelector(".projects-title-class"), 2000); // Ajusta el tiempo en milisegundos (2000ms = 2 segundos)
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
