const palavras = ["banco de dados", "javascript", "algoritmo", "redes", "programaçao", "computaçao"];
const palavra = palavras[Math.floor(Math.random() * palavras.length)];
const letrasTentadas = new Set();
let tentativasRestantes = 6;

const palavraContainer = document.querySelector("#palavra");
const letrasTentadasContainer = document.querySelector("#letras-tentadas");
const tentativasRestantesContainer = document.querySelector("#tentativas-restantes");

// Cria um elemento <span> para cada letra da palavra
for (const letra of palavra) {
  const span = document.createElement("span");
  span.innerText = "_ ";
  palavraContainer.appendChild(span);
}

function tentarLetra() {
  const letraInput = document.querySelector("#letra");
  const letra = letraInput.value.toLowerCase();

  if (letra.length !== 1) {
    alert("Digite apenas uma letra.");
    return;
  }

  if (letrasTentadas.has(letra)) {
    alert("Você já tentou essa letra.");
    return;
  }

  letrasTentadas.add(letra);
  letrasTentadasContainer.innerText = `Letras tentadas: ${[...letrasTentadas].join(", ")}`;

  if (palavra.includes(letra)) {
    // Revela todas as ocorrências da letra na palavra
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] === letra) {
        const span = palavraContainer.children[i];
        span.innerText = letra + " ";
      }
    }

    // Verifica se todas as letras foram reveladas
    if ([...palavraContainer.children].every(span => span.innerText !== "_ ")) {
      alert("Você ganhou!");
      location.reload();
    }
  } else {
    tentativasRestantes--;
    tentativasRestantesContainer.innerText = `Tentativas restantes: ${tentativasRestantes}`;

    if (tentativasRestantes === 0) {
      alert(`Você perdeu! A palavra era ${palavra.toUpperCase()}.`);
      location.reload();
    }
  }

  letraInput.value = "";
}