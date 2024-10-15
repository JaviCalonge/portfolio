import { showAfterTyping } from "./scripts/showAfterTyping";
import { typing } from "./scripts/typing";
import { transiciones } from "./scripts/transiciones";
import { proyectos } from "./scripts/proyectos";
import { traducciones } from "./scripts/traducciones";

showAfterTyping();
typing();
transiciones();
proyectos();
traducciones();

// SIEMPRE INICA AL PRINCIPIO
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
