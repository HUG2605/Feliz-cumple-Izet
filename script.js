const toggleBtn = document.getElementById("toggleCarta");
const carta = document.getElementById("carta");

toggleBtn.addEventListener("click", () => {
  carta.classList.toggle("oculto");
});

// Animación de tulipanes y corazones
const contenedorFlores = document.querySelector(".flores");
const emojis = ["🌷", "❤️", "💖", "🌸"];

function crearFlor() {
  const flor = document.createElement("div");
  flor.classList.add("flor");
  flor.style.left = Math.random() * 100 + "vw";
  flor.style.animationDuration = 5 + Math.random() * 5 + "s";
  flor.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  contenedorFlores.appendChild(flor);

  setTimeout(() => {
    flor.remove();
  }, 10000);
}

setInterval(crearFlor, 700);
