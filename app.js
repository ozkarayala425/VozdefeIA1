
function responder() {

  let texto = document.getElementById("input").value.toLowerCase();

  let respuesta = "";

  if (texto.includes("dios")) {

    respuesta =
    "📖 Dios es amor y nuestro Padre celestial.\n\n" +
    "Versículo: 1 Juan 4:8 - Dios es amor.\n\n" +
    "Reflexión: El amor de Dios nos acompaña aun en los momentos difíciles.";

  } 
  
  else if (texto.includes("miedo") || texto.includes("temor")) {

    respuesta =
    "📖 Dios nos fortalece cuando sentimos temor.\n\n" +
    "Versículo: Isaías 41:10 - No temas, porque yo estoy contigo.\n\n" +
    "Reflexión: La presencia de Dios nos da paz y confianza.";

  } 
  
  else if (texto.includes("fe")) {

    respuesta =
    "📖 La fe nos ayuda a confiar en Dios.\n\n" +
    "Versículo: Hebreos 11:1 - La fe es la certeza de lo que se espera.\n\n" +
    "Reflexión: Una fe firme nos permite caminar con esperanza.";

  }

  else if (texto.includes("perdon")) {

    respuesta =
    "📖 Dios nos llama a perdonar.\n\n" +
    "Versículo: Efesios 4:32 - Perdonaos unos a otros.\n\n" +
    "Reflexión: El perdón trae libertad al corazón.";

  }

  else if (texto.includes("jesus") || texto.includes("cristo")) {

    respuesta =
    "📖 Jesús es el camino, la verdad y la vida.\n\n" +
    "Versículo: Juan 14:6 - Yo soy el camino, y la verdad, y la vida.\n\n" +
    "Reflexión: Cristo nos muestra el amor y la salvación de Dios.";

  }

  else {

    respuesta =
    "📖 Gracias por tu pregunta.\n\n" +
    "Versículo: Jeremías 33:3 - Clama a mí, y yo te responderé.\n\n" +
    "Reflexión: Busca a Dios con un corazón sincero y Él te guiará.";

  }

  document.getElementById("respuesta").innerText = respuesta;

}
