const comentariosBiblicos = {

"fe":
"🙏 FE\n\nLa fe es confiar en Dios y creer en sus promesas.\n\n📖 Hebreos 11:1",

"amor":
"❤️ AMOR\n\nDios nos mostró su amor enviando a Jesucristo.\n\n📖 Juan 3:16",

"oracion":
"🙏 ORACIÓN\n\nLa oración nos acerca a Dios y fortalece nuestra relación con Él.\n\n📖 Jeremías 33:3",

"perdon":
"🤍 PERDÓN\n\nDios nos llama a perdonar así como Él nos perdona.\n\n📖 Efesios 4:32",

"jesus":
"✝️ JESÚS\n\nJesús es el camino, la verdad y la vida.\n\n📖 Juan 14:6",

"dios":
"🙏 DIOS\n\nDios es nuestro creador y Padre celestial.\n\n📖 Génesis 1:1",

"moises":
"📖 MOISÉS\n\nDios llamó a Moisés para liberar al pueblo de Israel.\n\n📖 Éxodo 3"

};


alert("APP.JS CARGADO");

let texto = document.getElementById("mensaje").value.toLowerCase();

if(texto.trim()=="") return;


let chat = document.getElementById("chat");


chat.innerHTML += `
<div class="user">
${texto}
</div>
`;


let respuesta =
"🙏 Gracias por tu pregunta. Sigue estudiando la Palabra de Dios 📖";

for(let palabra in comentariosBiblicos){

if(texto.includes(palabra)){

respuesta = comentariosBiblicos[palabra];

break;

}

}

chat.innerHTML += `
<div class="bot">
${respuesta}
</div>
`;


document.getElementById("mensaje").value="";


chat.scrollTop = chat.scrollHeight;

}
