// Banco de dados com mais de 70 palavras divididas por categorias
const bancoDePalavras = [
  // Tecnologia (10)
  { palavra: "GITHUB", categoria: "Tecnologia" },
  { palavra: "PROGRAMACAO", categoria: "Tecnologia" },
  { palavra: "JAVASCRIPT", categoria: "Tecnologia" },
  { palavra: "COMPUTADOR", categoria: "Tecnologia" },
  { palavra: "INTERNET", categoria: "Tecnologia" },
  { palavra: "ALGORITMO", categoria: "Tecnologia" },
  { palavra: "SOFTWARE", categoria: "Tecnologia" },
  { palavra: "HARDWARE", categoria: "Tecnologia" },
  { palavra: "ROBOTICA", categoria: "Tecnologia" },
  { palavra: "MONITOR", categoria: "Tecnologia" },

  // Animais (12)
  { palavra: "ELEFANTE", categoria: "Animal" },
  { palavra: "GIRAFA", categoria: "Animal" },
  { palavra: "TUBARAO", categoria: "Animal" },
  { palavra: "PINGUIM", categoria: "Animal" },
  { palavra: "LEOPARDO", categoria: "Animal" },
  { palavra: "TACHINHA", categoria: "Animal" },
  { palavra: "CROCODILO", categoria: "Animal" },
  { palavra: "HIPOPOTAMO", categoria: "Animal" },
  { palavra: "TARTARUGA", categoria: "Animal" },
  { palavra: "ORANGOTANGO", categoria: "Animal" },
  { palavra: "FLAMINGO", categoria: "Animal" },
  { palavra: "CAMALEAO", categoria: "Animal" },

  // Frutas e Alimentos (12)
  { palavra: "MELANCIA", categoria: "Alimento" },
  { palavra: "ABACAXI", categoria: "Alimento" },
  { palavra: "MORANGO", categoria: "Alimento" },
  { palavra: "MARACUJA", categoria: "Alimento" },
  { palavra: "BANANA", categoria: "Alimento" },
  { palavra: "CHOCOLATE", categoria: "Alimento" },
  { palavra: "HAMBURGUER", categoria: "Alimento" },
  { palavra: "ESPAGUETE", categoria: "Alimento" },
  { palavra: "CORAÇÃO", categoria: "Alimento" },
  { palavra: "PIZZA", categoria: "Alimento" },
  { palavra: "SORVETE", categoria: "Alimento" },
  { palavra: "ABACATE", categoria: "Alimento" },

  // Objetos (12)
  { palavra: "TECLADO", categoria: "Objeto" },
  { palavra: "CADERNO", categoria: "Objeto" },
  { palavra: "MOCHILA", categoria: "Objeto" },
  { palavra: "TELEVISAO", categoria: "Objeto" },
  { palavra: "RELOGIO", categoria: "Objeto" },
  { palavra: "GARRAFA", categoria: "Objeto" },
  { palavra: "TESOURA", categoria: "Objeto" },
  { palavra: "ALMOFADA", categoria: "Objeto" },
  { palavra: "VENTILADOR", categoria: "Objeto" },
  { palavra: "LUMINARIA", categoria: "Objeto" },
  { palavra: "ESPEHO", categoria: "Objeto" },
  { palavra: "MICROFONE", categoria: "Objeto" },

  // Profissões (10)
  { palavra: "ASTRONAUTA", categoria: "Profissão" },
  { palavra: "BOMBEIRO", categoria: "Profissão" },
  { palavra: "ARQUITETO", categoria: "Profissão" },
  { palavra: "MEDICO", categoria: "Profissão" },
  { palavra: "PROFESSOR", categoria: "Profissão" },
  { palavra: "POLICIAL", categoria: "Profissão" },
  { palavra: "ENGENHEIRO", categoria: "Profissão" },
  { palavra: "CIENTISTA", categoria: "Profissão" },
  { palavra: "DENTISTA", categoria: "Profissão" },
  { palavra: "VETERINARIO", categoria: "Profissão" },

  // Países e Lugares (10)
  { palavra: "BRASIL", categoria: "Lugar" },
  { palavra: "PORTUGAL", categoria: "Lugar" },
  { palavra: "JAPAO", categoria: "Lugar" },
  { palavra: "ALEMANHA", categoria: "Lugar" },
  { palavra: "AUSTRALIA", categoria: "Lugar" },
  { palavra: "MADAGASCAR", categoria: "Lugar" },
  { palavra: "CANAda", categoria: "Lugar" },
  { palavra: "ARGENTINA", categoria: "Lugar" },
  { palavra: "EGITO", categoria: "Lugar" },
  { palavra: "ITALIA", categoria: "Lugar" },

  // Filmes e Entretenimento (10)
  { palavra: "AVATAR", categoria: "Cinema" },
  { palavra: "BATMAN", categoria: "Cinema" },
  { palavra: "ALADDIN", categoria: "Cinema" },
  { palavra: "MATRIX", categoria: "Cinema" },
  { palavra: "VINGADORES", categoria: "Cinema" },
  { palavra: "INCEPTION", categoria: "Cinema" },
  { palavra: "FROZEN", categoria: "Cinema" },
  { palavra: "SHREK", categoria: "Cinema" },
  { palavra: "GLADIADOR", categoria: "Cinema" },
  { palavra: "TITANIC", categoria: "Cinema" }
];

let palavraSecreta = "";
let categoriaAtual = "";
let letrasDescobertas = [];
let erros = 0;
const maxErros = 6;

function embaralhar(array) {
  // Algoritmo de embaralhamento aleatório (Fisher-Yates)
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function iniciarJogo() {
  // Embaralha todas as palavras a cada novo jogo
  const listaEmbaralhada = embaralhar([...bancoDePalavras]);
  const itemSorteado = listaEmbaralhada[0];
  
  palavraSecreta = itemSorteado.palavra.toUpperCase();
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
