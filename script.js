const palavras = ["GITHUB", "PROGRAMACAO", "JAVASCRIPT", "DESENVOLVIMENTO", "CODIGO"];
let palavraSecreta = "";
let letrasDescobertas = [];
let erros = 0;
const maxErros = 6;

function iniciarJogo() {
  palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
  letrasDescobertas = Array(palavraSecreta.length).fill("_");
  erros = 0;
  
  atualizarTela();
  criarTeclado();
}

function atualizarTela() {
  document.getElementById("palavra").innerText = letrasDescobertas.join(" ");
  document.getElementById("status").innerText = `Erros: ${erros} de ${maxErros}`;
}

function criarTeclado() {
  const teclado = document.getElementById("teclado");
  teclado.innerHTML = "";
  
  for (let i = 65; i <= 90; i++) {
    const letra = String.fromCharCode(i);
    const btn = document.createElement("button");
    btn.innerText = letra;
    btn.onclick = () => tentarLetra(letra, btn);
    teclado.appendChild(btn);
  }
}

function tentarLetra(letra, btn) {
  btn.disabled = true;
  
  if (palavraSecreta.includes(letra)) {
    for (let i = 0; i < palavraSecreta.length; i++) {
      if (palavraSecreta[i] === letra) {
        letrasDescobertas[i] = letra;
      }
    }
  } else {
    erros++;
  }
  
  atualizarTela();
  verificarFimDeJogo();
}

function verificarFimDeJogo() {
  if (!letrasDescobertas.includes("_")) {
    document.getElementById("status").innerText = "Parabéns! Você venceu!";
    desativarTeclado();
  } else if (erros >= maxErros) {
    document.getElementById("status").innerText = `Você perdeu! A palavra era: ${palavraSecreta}`;
    desativarTeclado();
  }
}

function desativarTeclado() {
  const botoes = document.querySelectorAll(".teclado button");
  botoes.forEach(btn => btn.disabled = true);
}

iniciarJogo();
