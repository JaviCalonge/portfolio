// TRADUCCIONES
// Función para cargar el archivo JSON y cambiar el idioma
const cargarTraducciones = async (idioma) => {
  try {
    const response = await fetch("./JSON/traducciones.json");
    const traducciones = await response.json();
    cambiarIdioma(traducciones, idioma);
  } catch (error) {
    console.error("Error al cargar el archivo de traducciones:", error);
  }
};

// Función para aplicar los textos traducidos
const cambiarIdioma = (traducciones, idioma) => {
  document.getElementById("about-btn").innerHTML =
    traducciones[idioma].aboutBtn;
  document.getElementById("work-btn").innerHTML = traducciones[idioma].workBtn;
  document.getElementById("contact-btn").innerHTML =
    traducciones[idioma].contactBtn;
  document.getElementById("text").innerHTML = traducciones[idioma].text;
  document.getElementById("work-title").innerHTML =
    traducciones[idioma].workTitle;
  document.getElementById("about-title").innerHTML =
    traducciones[idioma].aboutTitle;
  document.getElementById("projects-title").innerHTML =
    traducciones[idioma].projectsTitle;
  document.getElementById("title-more").innerHTML =
    traducciones[idioma].titleMore;
  document.getElementById("email-title").innerHTML =
    traducciones[idioma].emailTitle;
  document.getElementById("open-work").innerHTML =
    traducciones[idioma].openWork;

  const btnEs = document.getElementById("es");
  const btnEn = document.getElementById("en");
  const btnCat = document.getElementById("cat");

  btnEs.classList.remove("active");
  btnEn.classList.remove("active");
  btnCat.classList.remove("active");

  if (idioma === "es") {
    btnEs.classList.add("active");
  } else if (idioma === "en") {
    btnEn.classList.add("active");
  } else if (idioma === "cat") {
    btnCat.classList.add("active");
  }

  // Guardar el idioma seleccionado en localStorage
  localStorage.setItem("idioma", idioma);
};

// Detectar idioma del navegador y cargar el idioma predeterminado
const detectarIdiomaPredeterminado = () => {
  let idioma = localStorage.getItem("idioma");

  if (!idioma) {
    const idiomaNavegador = navigator.language || navigator.userLanguage;
    if (idiomaNavegador.startsWith("es")) {
      idioma = "es";
    } else if (idiomaNavegador.startsWith("en")) {
      idioma = "en";
    } else if (idiomaNavegador.startsWith("ca")) {
      idioma = "cat";
    } else {
      idioma = "es";
    }
  }

  cargarTraducciones(idioma);
};

// Eventos para los botones
document
  .getElementById("es")
  .addEventListener("click", () => cargarTraducciones("es"));
document
  .getElementById("en")
  .addEventListener("click", () => cargarTraducciones("en"));
document
  .getElementById("cat")
  .addEventListener("click", () => cargarTraducciones("cat"));

// Ejecutar al cargar la página
window.onload = detectarIdiomaPredeterminado;
