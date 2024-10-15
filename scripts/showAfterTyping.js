// TRANSICIONES PARA APARECER DESPUÉS DEL TYPING
window.addEventListener("load", () => {
  const nav = document.querySelector(".nav");
  const myWork = document.querySelector(".my-work");
  const btnIdiomas = document.querySelector(".traducir");
  myWork.classList.add("visible");
  setTimeout(() => {
    nav.classList.add("visible"); // Añade la clase para activar la transición
    btnIdiomas.classList.add("visible");
  }, 2000);
});
