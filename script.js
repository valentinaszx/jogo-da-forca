const bancoDePalavras = [
  // Tecnologia
  { palavra: "GITHUB", categoria: "Tecnologia" },
  { palavra: "PROGRAMACAO", categoria: "Tecnologia" },
  { palavra: "JAVASCRIPT", categoria: "Tecnologia" },
  { palavra: "COMPUTADOR", categoria: "Tecnologia" },
  { palavra: "INTERNET", categoria: "Tecnologia" },
  { palavra: "ALGORITMO", categoria: "Tecnologia" },
  { palavra: "SOFTWARE", categoria: "Tecnologia" },
  { palavra: "HARDWARE", categoria: "Tecnologia" },
  { palavra: "ROBOTICA", categoria: "Tecnologia" },
  { palavra: "APLICATIVO", categoria: "Tecnologia" },
  { palavra: "SATELITE", categoria: "Tecnologia" },
  { palavra: "SEGURANCA", categoria: "Tecnologia" },

  // Animais
  { palavra: "ELEFANTE", categoria: "Animal" },
  { palavra: "GIRAFA", categoria: "Animal" },
  { palavra: "TUBARAO", categoria: "Animal" },
  { palavra: "PINGUIM", categoria: "Animal" },
  { palavra: "LEOPARDO", categoria: "Animal" },
  { palavra: "CAPIVARA", categoria: "Animal" },
  { palavra: "BORBOLETA", categoria: "Animal" },
  { palavra: "CROCODILO", categoria: "Animal" },
  { palavra: "BALEIA", categoria: "Animal" },
  { palavra: "CANGURU", categoria: "Animal" },
  { palavra: "CORUJA", categoria: "Animal" },

  // Alimentos
  { palavra: "MELANCIA", categoria: "Alimento" },
  { palavra: "ABACAXI", categoria: "Alimento" },
  { palavra: "MORANGO", categoria: "Alimento" },
  { palavra: "CHOCOLATE", categoria: "Alimento" },
  { palavra: "QUEIJO", categoria: "Alimento" },
  { palavra: "LASANHA", categoria: "Alimento" },
  { palavra: "CENOURA", categoria: "Alimento" },
  { palavra: "PIPOCA", categoria: "Alimento" },
  { palavra: "CASTANHA", categoria: "Alimento" },

  // Objetos
  { palavra: "TECLADO", categoria: "Objeto" },
  { palavra: "CADERNO", categoria: "Objeto" },
  { palavra: "MOCHILA", categoria: "Objeto" },
  { palavra: "TELEVISAO", categoria: "Objeto" },
  { palavra: "RELOGIO", categoria: "Objeto" },
  { palavra: "LAMPADA", categoria: "Objeto" },
  { palavra: "TESOURA", categoria: "Objeto" },
  { palavra: "GARRAFA", categoria: "Objeto" },
  { palavra: "ESPELHO", categoria: "Objeto" },

  // Lugares
  { palavra: "BRASIL", categoria: "Lugar" },
  { palavra: "PORTUGAL", categoria: "Lugar" },
  { palavra: "JAPAO", categoria: "Lugar" },
  { palavra: "ARGENTINA", categoria: "Lugar" },
  { palavra: "CANADA", categoria: "Lugar" },
  { palavra: "EGITO", categoria: "Lugar" },
  { palavra: "NORUEGA", categoria: "Lugar" },
  { palavra: "MEXICO", categoria: "Lugar" },

  // Esportes
  { palavra: "FUTEBOL", categoria: "Esporte" },
  { palavra: "NATACAO", categoria: "Esporte" },
  { palavra: "BASQUETE", categoria: "Esporte" },
  { palavra: "TENIS", categoria: "Esporte" },
  { palavra: "CICLISMO", categoria: "Esporte" },

  // Natureza
  { palavra: "CACHOEIRA", categoria: "Natureza" },
  { palavra: "FLORESTA", categoria: "Natureza" },
  { palavra: "VULCAO", categoria: "Natureza" },
  { palavra: "DESERTO", categoria: "Natureza" },
  { palavra: "MONTANHA", categoria: "Natureza" },

  // Profissoes
  { palavra: "PROFESSOR", categoria: "Profissao" },
  { palavra: "MEDICO", categoria: "Profissao" },
  { palavra: "ARQUITETO", categoria: "Profissao" },
  { palavra: "BOMBEIRO", categoria: "Profissao" },
  { palavra: "CIENTISTA", categoria: "Profissao" },

  // Musica
  { palavra: "VIOLAO", categoria: "Musica" },
  { palavra: "BATERIA", categoria: "Musica" },
  { palavra: "PIANO", categoria: "Musica" },
  { palavra: "FLAUTA", categoria: "Musica" },
  { palavra: "SINFONIA", categoria: "Musica" },

  // Transportes
  { palavra: "BICICLETA", categoria: "Transporte" },
  { palavra: "AVIAO", categoria: "Transporte" },
  { palavra: "NAVIO", categoria: "Transporte" },
  { palavra: "MOTOCICLETA", categoria: "Transporte" },
  { palavra: "HELICOPTERO", categoria: "Transporte" },

  // Espaco
  { palavra: "PLANETA", categoria: "Espaco" },
  { palavra: "GALAXIA", categoria: "Espaco" },
  { palavra: "ASTRONAUTA", categoria: "Espaco" },
  { palavra: "COMETA", categoria: "Espaco" },
  { palavra: "NEBULOSA", categoria: "Espaco" }
];

let palavraSecreta = "";
let categoriaAtual = "";
let letrasDescobertas = [];
let erros = 0;
const maxErros = 6;
let jogoAtivo = true;

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function iniciarJogo() {
  const listaEmbaralhada = embaralhar([...bancoDePalavras]);
  const itemSorteado = listaEmbaralhada[0];
  
  palavraSecreta = itemSorteado.palavra.toUpperCase();
  categoriaAtual = itemSorteado.categoria;
  letrasDescobertas = Array(palavraSecreta.length).fill("_");
  erros = 0;
  jogoAtivo = true;
  
  atualizarTela();
  criarTeclado();
  focarInputMovel();
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
    btn.id = `btn-${letra}`;
    btn.onclick = () => processarPalpite(letra);
    teclado.appendChild(btn);
  }
}

function processarPalpite(letra) {
  if (!jogoAtivo) return;
  
  const btn = document.getElementById(`btn-${letra}`);
  if (btn && btn.disabled) return;
  
  if (btn) btn.disabled = true;

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
    jogoAtivo = false;
    desativarTeclado();
  } else if (erros >= maxErros) {
    document.getElementById("status").innerText = `Você perdeu! A palavra era: ${palavraSecreta}`;
    jogoAtivo = false;
    desativarTeclado();
  }
}

function desativarTeclado() {
  const botoes = document.querySelectorAll(".teclado button");
  botoes.forEach(btn => btn.disabled = true);
}

// ATIVAÇÃO DO TECLADO FÍSICO E MÓVEL
function focarInputMovel() {
  const input = document.getElementById("inputMovel");
  if (input) input.focus();
}

document.addEventListener("click", () => {
  if (jogoAtivo) focarInputMovel();
});

document.addEventListener("keydown", (event) => {
  if (!jogoAtivo) return;
  const tecla = event.key.toUpperCase();
  if (tecla.length === 1 && tecla >= "A" && tecla <= "Z") {
    processarPalpite(tecla);
  }
});

const inputMovel = document.getElementById("inputMovel");
if (inputMovel) {
  inputMovel.addEventListener("input", (e) => {
    const texto = e.target.value.toUpperCase();
    if (texto.length > 0) {
      const ultimaLetra = texto[texto.length - 1];
      if (ultimaLetra >= "A" && ultimaLetra <= "Z") {
        processarPalpite(ultimaLetra);
      }
      e.target.value = ""; // Limpa o campo para a próxima letra
    }
  });
}

iniciarJogo();
