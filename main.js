// SIEMPRE INICA AL PRINCIPIO
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
  .querySelector(".nav-btn-contact")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    smoothScrollTo(document.querySelector("#contact"), 2000); // Ajusta el tiempo en milisegundos (2000ms = 2 segundos)
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
  document.getElementById("tools").innerHTML = traducciones[idioma].tools;
};

// Función para aplicar la clase "active" al botón correspondiente
const aplicarClaseActive = (idioma) => {
  const btnEs = document.getElementById("es");
  const btnEn = document.getElementById("en");
  const btnCat = document.getElementById("cat");

  // Quitar clase "active" de todos los botones
  btnEs.classList.remove("active");
  btnEn.classList.remove("active");
  btnCat.classList.remove("active");

  // Añadir clase "active" al botón seleccionado
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

  // Aplicar clase active y cargar las traducciones
  aplicarClaseActive(idioma);
  cargarTraducciones(idioma);
};

// Eventos para los botones de idioma
document.getElementById("es").addEventListener("click", () => {
  aplicarClaseActive("es"); // Aplicar clase active al hacer clic
  cargarTraducciones("es"); // Cargar traducciones al hacer clic
});

document.getElementById("en").addEventListener("click", () => {
  aplicarClaseActive("en"); // Aplicar clase active al hacer clic
  cargarTraducciones("en"); // Cargar traducciones al hacer clic
});

document.getElementById("cat").addEventListener("click", () => {
  aplicarClaseActive("cat"); // Aplicar clase active al hacer clic
  cargarTraducciones("cat"); // Cargar traducciones al hacer clic
});

// Ejecutar al cargar la página
window.onload = detectarIdiomaPredeterminado;
