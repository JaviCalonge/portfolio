// EFECTO PARA MOSTRAR LOS PROYECTOS

document.addEventListener("DOMContentLoaded", () => {
  const proyectos = document.querySelectorAll(".project");

  function checkVisibility() {
    proyectos.forEach((proyecto) => {
      const rect = proyecto.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible) {
        proyecto.classList.add("visible"); // Añade la clase cuando está completamente visible
      } else {
        proyecto.classList.remove("visible"); // Elimina la clase cuando sale del viewport
      }
    });
  }

  window.addEventListener("scroll", checkVisibility); // Comprueba al hacer scroll
  window.addEventListener("resize", checkVisibility); // Comprueba al redimensionar la ventana
  checkVisibility(); // Ejecuta la función al cargar la página
});
