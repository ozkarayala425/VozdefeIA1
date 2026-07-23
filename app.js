const firebaseConfig = {
    apiKey: "AIzaSyBb_zbBfOUGZWRO6cSKYU4RmuBMZWYuAeI",
    authDomain: "vozdefeapp.firebaseapp.com",
    projectId: "vozdefeapp",
    storageBucket: "vozdefeapp.firebasestorage.app",
    messagingSenderId: "551507028497",
    appId: "1:551507028497:web:e1051705b49b6381369fb0",
    measurementId: "G-CJC1FEKT2V"
  };
function enviar(){

  let texto = document.getElementById("mensaje").value.toLowerCase();

  if(texto.trim() === ""){
    return;
  }

  let chat = document.getElementById("chat");

  let usuario = document.createElement("div");
  usuario.className = "user";
  usuario.innerText = texto;
  chat.appendChild(usuario);


  let respuesta = "";

  if(texto.includes("dios")){

    respuesta =
    "📖 Dios es amor.\n\n" +
    "Versículo: 1 Juan 4:8\n\n" +
    "Reflexión: El amor de Dios permanece con nosotros y nos guía cada día.";

  } 
  
  else if(texto.includes("jesus") || texto.includes("cristo")){

    respuesta =
    "📖 Jesús es el camino, la verdad y la vida.\n\n" +
    "Versículo: Juan 14:6\n\n" +
    "Reflexión: Cristo nos muestra el camino hacia Dios.";

  }

  else if(texto.includes("fe")){

    respuesta =
    "📖 La fe es la certeza de lo que se espera.\n\n" +
    "Versículo: Hebreos 11:1\n\n" +
    "Reflexión: La fe nos ayuda a confiar en Dios.";

  }

  else if(texto.includes("noe")){

    respuesta =
    "📖 Noé caminó con Dios y obedeció su llamado.\n\n" +
    "Versículo: Génesis 6:9\n\n" +
    "Reflexión: La obediencia a Dios trae bendición.";

  }

  else {

    respuesta =
    "📖 Clama a mí, y yo te responderé.\n\n" +
    "Versículo: Jeremías 33:3\n\n" +
    "Reflexión: Dios escucha a quienes le buscan.";

  }


  let bot = document.createElement("div");
  bot.className = "bot";
  bot.innerText = respuesta;

  chat.appendChild(bot);


  document.getElementById("mensaje").value = "";

}
