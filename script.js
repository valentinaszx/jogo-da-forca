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
  { palavra: "NUVEM", categoria: "Tecnologia" },
  { palavra: "DADOS", categoria: "Tecnologia" },
  { palavra: "PIXEL", categoria: "Tecnologia" },

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
  { palavra: "GOLFINHO", categoria: "Animal" },
  { palavra: "JACARE", categoria: "Animal" },
  { palavra: "TARTARUGA", categoria: "Animal" },
  { palavra: "RAPOSA", categoria: "Animal" },

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
  { palavra: "PANQUECA", categoria: "Alimento" },
  { palavra: "FEIJAO", categoria: "Alimento" },
  { palavra: "TOMATE", categoria: "Alimento" },
  { palavra: "ABACATE", categoria: "Alimento" },

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
  { palavra: "CANETA", categoria: "Objeto" },
  { palavra: "CHAVE", categoria: "Objeto" },
  { palavra: "VENTILADOR", categoria: "Objeto" },
  { palavra: "FONE", categoria: "Objeto" },

  // Lugares
  { palavra: "BRASIL", categoria: "Lugar" },
  { palavra: "PORTUGAL", categoria: "Lugar" },
  { palavra: "JAPAO", categoria: "Lugar" },
  { palavra: "ARGENTINA", categoria: "Lugar" },
  { palavra: "CANADA", categoria: "Lugar" },
  { palavra: "EGITO", categoria: "Lugar" },
  { palavra: "NORUEGA", categoria: "Lugar" },
  { palavra: "MEXICO", categoria: "Lugar" },
  { palavra: "CHILE", categoria: "Lugar" },
  { palavra: "INDIA", categoria: "Lugar" },
  { palavra: "ITALIA", categoria: "Lugar" },
  { palavra: "PERU", categoria: "Lugar" },

  // Esportes
  { palavra: "FUTEBOL", categoria: "Esporte" },
  { palavra: "NATACAO", categoria: "Esporte" },
  { palavra: "BASQUETE", categoria: "Esporte" },
  { palavra: "TENIS", categoria: "Esporte" },
  { palavra: "CICLISMO", categoria: "Esporte" },
  { palavra: "VOLEI", categoria: "Esporte" },
  { palavra: "JUDO", categoria: "Esporte" },
  { palavra: "BOXE", categoria: "Esporte" },

  // Natureza
  { palavra: "CACHOEIRA", categoria: "Natureza" },
  { palavra: "FLORESTA", categoria: "Natureza" },
  { palavra: "VULCAO", categoria: "Natureza" },
  { palavra: "DESERTO", categoria: "Natureza" },
  { palavra: "MONTANHA", categoria: "Natureza" },
  { palavra: "OCEANO", categoria: "Natureza" },
  { palavra: "GELEIRA", categoria: "Natureza" },
  { palavra: "RAIO", categoria: "Natureza" },

  // Profissoes
  { palavra: "PROFESSOR", categoria: "Profissao" },
  { palavra: "MEDICO", categoria: "Profissao" },
  { palavra: "ARQUITETO", categoria: "Profissao" },
  { palavra: "BOMBEIRO", categoria: "Profissao" },
  { palavra: "CIENTISTA", categoria: "Profissao" },
  { palavra: "DENTISTA", categoria: "Profissao" },
  { palavra: "JORNALISTA", categoria: "Profissao" },
  { palavra: "PILOTO", categoria: "Profissao" },

  // Musica
  { palavra: "VIOLAO", categoria: "Musica" },
  { palavra: "BATERIA", categoria: "Musica" },
  { palavra: "PIANO", categoria: "Musica" },
  { palavra: "FLAUTA", categoria: "Musica" },
  { palavra: "SINFONIA", categoria: "Musica" },
  { palavra: "TAMBOR", categoria: "Musica" },
  { palavra: "SAXOFONE", categoria: "Musica" },
  { palavra: "MARACA", categoria: "Musica" },

  // Transportes
  { palavra: "BICICLETA", categoria: "Transporte" },
  { palavra: "AVIAO", categoria: "Transporte" },
  { palavra: "NAVIO", categoria: "Transporte" },
  { palavra: "MOTOCICLETA", categoria: "Transporte" },
  { palavra: "HELICOPTERO", categoria: "Transporte" },
  { palavra: "TREM", categoria: "Transporte" },
  { palavra: "ONIBUS", categoria: "Transporte" },
  { palavra: "METRO", categoria: "Transporte" },

  // Espaco
  { palavra: "PLANETA", categoria: "Espaco" },
  { palavra: "GALAXIA", categoria: "Espaco" },
  { palavra: "ASTRONAUTA", categoria: "Espaco" },
  { palavra: "COMETA", categoria: "Espaco" },
  { palavra: "NEBULOSA", categoria: "Espaco" },
  { palavra: "ESTRELA", categoria: "Espaco" },
  { palavra: "ORBITA", categoria: "Espaco" },
  { palavra: "METEORO", categoria: "Espaco" },

  // Cores
  { palavra: "VERMELHO", categoria: "Cor" },
  { palavra: "AMARELO", categoria: "Cor" },
  { palavra: "VERDE", categoria: "Cor" },
  { palavra: "AZUL", categoria: "Cor" },
  { palavra: "LARANJA", categoria: "Cor" },
  { palavra: "BRANCO", categoria: "Cor" },

  // Sentimentos
  { palavra: "ALEGRIA", categoria: "Sentimento" },
  { palavra: "SAUDADE", categoria: "Sentimento" },
  { palavra: "CORAGEM", categoria: "Sentimento" },
  { palavra: "MEDO", categoria: "Sentimento" },
  { palavra: "ESPERANCA", categoria: "Sentimento" },
  { palavra: "ORGULHO", categoria: "Sentimento" },

  // Ciencia
  { palavra: "MOLECULA", categoria: "Ciencia" },
  { palavra: "ATOMO", categoria: "Ciencia" },
  { palavra: "ENERGIA", categoria: "Ciencia" },
  { palavra: "GRAVIDADE", categoria: "Ciencia" },
  { palavra: "CELULA", categoria: "Ciencia" },
  { palavra: "FOSSIL", categoria: "Ciencia" },

  // Casa
  { palavra: "COZINHA", categoria: "Casa" },
  { palavra: "QUARTO", categoria: "Casa" },
  { palavra: "JANELA", categoria: "Casa" },
  { palavra: "SOFA", categoria: "Casa" },
  { palavra: "TELHADO", categoria: "Casa" },
  { palavra: "GARAGEM", categoria: "Casa" }
];

let palavraSecreta = "";
let categoriaAtual = "";
let letrasDescobertas = [];
let erros = 0;
const maxErros = 6;
let jogoAtivo = true;
let timerProximaRodada = null;

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function iniciarJogo() {
  clearTimeout(timerProximaRodada);
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
    document.getElementById("status").innerText = "Parabéns! Você venceu! Próxima rodada em instantes...";
    jogoAtivo = false;
    desativarTeclado();
    timerProximaRodada = setTimeout(iniciarJogo, 1800);
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
