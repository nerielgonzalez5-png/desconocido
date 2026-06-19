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

        mensaje.innerHTML = "❌ intenta nuevamente.";
    }
}

/* =========================
   TEXTO SECRETO
========================= */

const textoSorpresa = `Gracias por formar parte de mi vida.
Este programa fue hecho especialmente para ti.
Quizás no sea perfecto,
pero cada línea fue escrita pensando en ti.
Feliz cumpleaños, Lina ❤️`;

function iniciarSorpresa() {

    const texto = document.getElementById("textoSecreto");
    const secreto = document.getElementById("secreto");

    texto.innerText = "";
    secreto.classList.add("mostrar");

    let i = 0;

    function escribir() {
        if (i < textoSorpresa.length) {
            texto.innerText += textoSorpresa.charAt(i);
            i++;
            setTimeout(escribir, 40);
        }
    }

    escribir();

    setTimeout(() => {
        document.getElementById("btnGalaxia").style.display = "inline-block";
    }, 5000);

    setTimeout(() => {
        document.getElementById("corazonLuz")?.classList.add("mostrar");
    }, 3000);
}

/* =========================
   PARTÍCULAS
========================= */

const canvas = document.getElementById("particulas");
const ctx = canvas?.getContext("2d");

if (canvas && ctx) {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 300; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speed: Math.random() * 1 + 0.5
        });
    }

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = "#4da6ff";
            ctx.fill();

            p.y -= p.speed;

            if (p.y < 0) {
                p.y = canvas.height;
                p.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
}

/* =========================
   BOTÓN CONTINUAR
========================= */

document.getElementById("btnContinuar").onclick = function () {

    const mensaje = document.getElementById("error");
    const musica = document.getElementById("musica");

    musica?.play();
    document.getElementById("btnContinuar").style.display = "none";

    const pasos = [
        "Buscando felicidad...",
        "Buscando sonrisas...",
        "Buscando recuerdos...",
        "FELIZ CUMPLEAÑOS 🎂",
        "Edad actual: 19",
        "Actualizando edad...",
        "19 ➜ 20 ❤️",
        "NUEVA ETAPA DESBLOQUEADA 🎉"
    ];

    pasos.forEach((texto, i) => {
        setTimeout(() => {
            mensaje.innerHTML += "<br>" + texto;
        }, i * 1000);
    });

    setTimeout(() => {
        document.getElementById("login").style.display = "none";
        document.getElementById("contenido").style.display = "block";
        iniciarSorpresa();
    }, 10000);
};

/* =========================
   GALAXIA (ARREGLADA)
========================= */

document.getElementById("btnGalaxia").onclick = function () {

    document.getElementById("contenido").style.display = "none";
    document.getElementById("galaxia").style.display = "block";

    iniciarGalaxia();
};

function iniciarGalaxia() {

    const galaxiaCanvas = document.getElementById("galaxiaCanvas");

    if (!galaxiaCanvas) return;

    const gctx = galaxiaCanvas.getContext("2d");

    galaxiaCanvas.width = window.innerWidth;
    galaxiaCanvas.height = window.innerHeight;

    let estrellas = [];

    for (let i = 0; i < 400; i++) {
        estrellas.push({
            x: Math.random() * galaxiaCanvas.width,
            y: Math.random() * galaxiaCanvas.height,
            r: Math.random() * 3 + 1,
            alpha: Math.random(),
            speed: Math.random() * 0.5 + 0.2
        });
    }

    function animarGalaxia() {

        gctx.fillStyle = "black";
        gctx.fillRect(0, 0, galaxiaCanvas.width, galaxiaCanvas.height);

        const cx = galaxiaCanvas.width / 2;
        const cy = galaxiaCanvas.height / 2;

        estrellas.forEach(e => {

            e.x += Math.sin(e.alpha) * 0.5;
            e.y += Math.cos(e.alpha) * 0.5;

            gctx.globalAlpha = 1;
            gctx.beginPath();
            gctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
            gctx.fillStyle = "white";
            gctx.fill();
        });

        requestAnimationFrame(animarGalaxia);
    }

    animarGalaxia();
}
