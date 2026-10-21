// Lista de palavras diversificadas divididas por categoria
const bancoDePalavras = [
  // Tecnologia
  { palavra: "GITHUB", categoria: "Tecnologia" },
  { palavra: "PROGRAMACAO", categoria: "Tecnologia" },
  { palavra: "JAVASCRIPT", categoria: "Tecnologia" },
  { palavra: "COMPUTADOR", categoria: "Tecnologia" },
  { palavra: "INTERNET", categoria: "Tecnologia" },
  { palavra: "ALGORITMO", categoria: "Tecnologia" },
  
  // Animais
  { palavra: "ELEFANTE", categoria: "Animal" },
  { palavra: "GIRAFA", categoria: "Animal" },
  { palavra: "TUBARAO", categoria: "Animal" },
  { palavra: "PINGUIM", categoria: "Animal" },
  { palavra: "LEOPARDO", categoria: "Animal" },
  
  // Frutas
  { palavra: "MELANCIA", categoria: "Fruta" },
  { palavra: "ABACAXI", categoria: "Fruta" },
  { palavra: "MORANGO", categoria: "Fruta" },
  { palavra: "MARACUJA", categoria: "Fruta" },
  { palavra: "BANANA", categoria: "Fruta" },
  
  // Objetos
  { palavra: "TECLADO", categoria: "Objeto" },
  { palavra: "CADERNO", categoria: "Objeto" },
  { palavra: "MOCHILA", categoria: "Objeto" },
  { palavra: "TELEVISAO", categoria: "Objeto" },
  { palavra: "RELOGIO", categoria: "Objeto" }
];

let palavraSecreta = "";
let categoriaAtual = "";
let letrasDescobertas = [];
let erros = 0;
const maxErros = 6;

function iniciarJogo() {
  // Embaralha a lista de palavras para garantir aleatoriedade total
  const listaEmbaralhada = [...bancoDePalavras].sort(() => Math.random() - 0.5);
  const itemSorteado = listaEmbaralhada[Math.floor(Math.random() * listaEmbaralhada.length)];
  
  palavraSecreta = itemSorteado.palavra;
  categoriaAtual = itemSorteado.categoria;
  letrasDescobertas = Array(palavraSecreta.length).fill("_");
  erros = 0;
  
  atualizarTela();
  criarTeclado();
}

function atualizarTela() {
  document.getElementById("palavra").innerText = letrasDescobertas.join(" ");
  document.getElementById("status").innerText = `Dica: ${categoriaAtual} | Erros: ${erros} de ${maxErros}`;
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
