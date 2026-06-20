function verificarNombre() {

    let nombre = document
        .getElementById("nombre")
        .value
        .toLowerCase()
        .trim();

    let mensaje = document.getElementById("error");

    if (nombre === "lina") {

        mensaje.innerHTML = "✓ Lina detectada";

        document.getElementById("btnContinuar").style.display = "inline-block";

    } else {

        mensaje.innerHTML = "❌ ta's pendeja, intenta nuevamente.";

    }
}

const mensaje = `Gracias por formar parte de mi vida.
Este programa fue hecho especialmente para ti.
Quizás no sea perfecto,
pero cada línea fue escrita pensando en ti.
Tal vez no sea el regalo más caro del mundo,
pero fue creado con mucho cariño para ti.
Espero que este nuevo año te traiga felicidad,
éxitos y muchos momentos hermosos.
Feliz cumpleaños, Lina ❤️`;

function iniciarSorpresa() {

    document.getElementById("textoSecreto").innerText = "";

    document
        .getElementById("secreto")
        .classList.add("mostrar");

    let i = 0;

    function escribir() {

        if (i < mensaje.length) {

            document.getElementById("textoSecreto").innerText += mensaje.charAt(i);

            i++;

            setTimeout(escribir, 40);
        }

    }

    escribir();

    setTimeout(() => {

    document.getElementById("btnGalaxia").style.display = "inline-block";

}, 13000);

    setTimeout(() => {

        document
            .getElementById("corazonLuz")
            .classList.add("mostrar");

    }, 3000);

}

const canvas = document.getElementById("particulas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i = 0; i < 500; i++){

    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2 + 0.3,
        speed: Math.random() * 1 + 0.5
    });

}

function animate(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "white";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "white";
        
        ctx.fill();

        ctx.globalAlpha = 1;

        p.y -= p.speed;

        if(p.y < 0){

            p.y = canvas.height;
            p.x = Math.random() * canvas.width;

        }

    });

    requestAnimationFrame(animate);

}

animate();

document.getElementById("btnContinuar").onclick = function() {

    const mensaje = document.getElementById("error");
    const musica = document.getElementById("musica");

    musica.play();

    document.getElementById("btnContinuar").style.display = "none";

    setTimeout(() => {
        mensaje.innerHTML += "<br><br>Buscando felicidad...";
    }, 1000);

    setTimeout(() => {
        mensaje.innerHTML += "<br>Buscando sonrisas...";
    }, 2000);

    setTimeout(() => {
        mensaje.innerHTML += "<br>Buscando recuerdos...";
    }, 3000);

    setTimeout(() => {
        mensaje.innerHTML += "<br><br> FELIZ CUMPLEAÑOS 🎂";
    }, 4000);

    setTimeout(() => {
        mensaje.innerHTML += "<br><br>Edad actual: 19";
    }, 5000);

    setTimeout(() => {
        mensaje.innerHTML += "<br>Actualizando edad...";
    }, 6000);

    setTimeout(() => {
        mensaje.innerHTML += "<br><br>19 ➜ 20 ❤️";
    }, 8000);

    setTimeout(() => {
        mensaje.innerHTML += "<br><br> NUEVA ETAPA DESBLOQUEADA = 20 años ¡¡tas vieja!! ";
    }, 9000);

    setTimeout(() => {
        mensaje.innerHTML += "<br><br>Este programa fue creado especialmente para ti.";
    }, 10000);

    setTimeout(() => {
        mensaje.innerHTML += "<br>Espero que tengas un día increíble ❤️";
    }, 11000);

    setTimeout(() => {
        mensaje.innerHTML += "<br><br>Abriendo sorpresa...";
    }, 12000);

    setTimeout(() => {

        document.getElementById("login").style.display = "none";
        document.getElementById("contenido").style.display = "block";

        iniciarSorpresa();

    }, 14000);

};

document.getElementById("btnGalaxia").onclick = function() {

    document.getElementById("contenido").style.display = "none";

    document.getElementById("galaxia").style.display = "block";

};

const galaxiaCanvas = document.getElementById("galaxiaCanvas");

if(galaxiaCanvas){

    const gctx = galaxiaCanvas.getContext("2d");

    galaxiaCanvas.width = window.innerWidth;
    galaxiaCanvas.height = window.innerHeight;

    let estrellas = [];

    for(let i = 0; i < 500; i++){

    estrellas.push({
        x: Math.random() * galaxiaCanvas.width,
        y: Math.random() * galaxiaCanvas.height,
        r: Math.random() * 8 + 3,
        v: Math.random() * 0.2 + 0.05,
        alpha: Math.random(),
        dir: Math.random() > 0.5 ? 1 : -1
    });

}
    
function animarGalaxia(){

    gctx.fillStyle = "black";
    gctx.fillRect(0,0,galaxiaCanvas.width,galaxiaCanvas.height);

    estrellas.forEach(e => {

        e.alpha += 0.01 * e.dir;

        if(e.alpha > 1){
            e.dir = -1;
        }

        if(e.alpha < 0.2){
            e.dir = 1;
        }

        gctx.globalAlpha = e.alpha;

        gctx.beginPath();
        gctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);

        const colores = [
            "#ffffff",
            "#87cefa",
            "#b19cd9",
            "#add8e6"
        ];

        gctx.fillStyle =
            colores[Math.floor(Math.random() * colores.length)];

        gctx.shadowBlur = 15;
        gctx.shadowColor = "white";

        gctx.fill();

        gctx.globalAlpha = 1;

        e.y += e.v;

        if(e.y > galaxiaCanvas.height){
            e.y = 0;
            e.x = Math.random() * galaxiaCanvas.width;
        }

    });

    requestAnimationFrame(animarGalaxia);
}

animarGalaxia();

}
