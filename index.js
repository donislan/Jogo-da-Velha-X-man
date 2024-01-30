document.addEventListener("DOMContentLoaded", () => {
  let personagemSelecionadoJogadorUm = null;
  let personagemSelecionadoJogadorDois = null;

  const personagens = document.querySelectorAll(".card-de-personagem");
  const botaoEscolhaUm = document.querySelector(".escolha-um");
  const botaoEscolhaDois = document.querySelector(".escolha-dois");
  const batalhar = document.querySelector(".batalhar");

  personagens.forEach((personagemDoJogadorUm) => {
    personagemDoJogadorUm.addEventListener("click", () => {
      if (personagemSelecionadoJogadorUm !== null) {
        return;
      }

      personagemDoJogadorUm.classList.add("selecaoUm");
      personagemSelecionadoJogadorUm =
        personagemDoJogadorUm.getAttribute("data-name");

      const imagemPersonagemGrandeUm = document.querySelector(
        ".personagem-grande-jogador-um"
      );
      const idPersonagemUm = personagemDoJogadorUm.getAttribute("id");
      imagemPersonagemGrandeUm.src = `/imagens/card-${idPersonagemUm}.png`;

      botaoEscolhaUm.disabled = false;
    });
  });

  botaoEscolhaUm.addEventListener("click", () => {
    if (personagemSelecionadoJogadorUm === null) {
      alert("Você precisa escolher um personagem para o jogador um");
      return;
    }

    const personagemUm = document.getElementById("jogador-um");
    personagemUm.innerText = "Jogador X: " + personagemSelecionadoJogadorUm;

    personagens.forEach((personagemDoJogadorUm) => {
      if (!personagemDoJogadorUm.classList.contains("selecaoUm")) {
        personagemDoJogadorUm.disabled = true;
      }
    });

    botaoEscolhaUm.innerHTML = "Chegou a hora!";
    botaoEscolhaUm.disabled = true;

    personagens.forEach((personagemDoJogadorDois) => {
      personagemDoJogadorDois.addEventListener("click", () => {
        if (personagemSelecionadoJogadorDois !== null) {
          return;
        }

        personagemDoJogadorDois.classList.add("selecaoDois");
        personagemSelecionadoJogadorDois =
          personagemDoJogadorDois.getAttribute("data-name");

        const imagemPersonagemGrandeDois = document.querySelector(
          ".personagem-grande-jogador-dois"
        );

        const idPersonagemDois = personagemDoJogadorDois.getAttribute("id");
        imagemPersonagemGrandeDois.src = `/imagens/card-${idPersonagemDois}.png`;

        botaoEscolhaDois.disabled = false;
      });
    });
  });

  botaoEscolhaDois.addEventListener("click", () => {
    if (personagemSelecionadoJogadorDois === null) {
      alert("Você precisa escolher um personagem para o jogador dois");
      return;
    }

    const personagemDois = document.getElementById("jogador-dois");
    personagemDois.innerText = "Jogador O: " + personagemSelecionadoJogadorDois;

    personagens.forEach((personagemDoJogadorDois) => {
      if (!personagemDoJogadorDois.classList.contains("selecaoDois")) {
        personagemDoJogadorDois.disabled = true;
      }
    });

    botaoEscolhaDois.innerText = "De você perder?";
    botaoEscolhaDois.disabled = true;
  });

  batalhar.addEventListener("click", () => {
    const regioes = document.querySelectorAll("#tabuleiro-do-jogo span");
    let tabuleiroVirtual = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    let jogadorAtual = "X";

    const cards = document.querySelector(".lista-de-personagens");
    const imagemDeBatalhaUm = document.querySelector(
      ".personagem-grande-jogador-um"
    );
    const imagemDeBatalhaDois = document.querySelector(
      ".personagem-grande-jogador-dois"
    );
    const titulo = document.querySelector(".selecao-de-personagem h1");

    cards.style.transition = "display 1s";
    cards.style.display = "none";

    cards.style.transition = "display 1s";
    cards.style.display = "none";

    botaoEscolhaUm.style.transition = "display 1s";
    botaoEscolhaUm.style.display = "none";

    botaoEscolhaDois.style.transition = "display 1s";
    botaoEscolhaDois.style.display = "none";

    imagemDeBatalhaUm.style.transition = "height 1s, margin-top 1s";
    imagemDeBatalhaUm.style.height = "25rem";
    imagemDeBatalhaUm.style["margin-top"] = "40%";

    imagemDeBatalhaDois.style.transition = "height 1s, margin-top 1s";
    imagemDeBatalhaDois.style.height = "25rem";
    imagemDeBatalhaDois.style["margin-top"] = "40%";

    batalhar.style.transition = "margin-left 1s, margin-top 1s";
    batalhar.style["margin-left"] = "37.5%";
    batalhar.style["margin-top"] = "19%";

    titulo.style.transition = "font-size 1s";
    titulo.style.fontSize = "2rem";
    titulo.innerText = "Hora de Treinar";

    const botaoDeRetorno = document.createElement("button");
    botaoDeRetorno.textContent = "Menu Principal - Em Obras!";
    botaoDeRetorno.classList.add("comecar");
    botaoDeRetorno.style.transition = "margin-left 1s, margin-top 1s";
    botaoDeRetorno.style.position = "absolute";
    botaoDeRetorno.style.top = "90%";
    botaoDeRetorno.style.left = "25%";
    botaoDeRetorno.style.transform = "translate(-50%, -50%)";
    botaoDeRetorno.style.transition = "margin-left 1s, margin-top 1s";
    botaoDeRetorno.style.marginLeft = "25%";
    botaoDeRetorno.style.cursor = "wait";

    // botaoDeRetorno.addEventListener("click", () => {
    //   const cards = document.querySelector(".lista-de-personagens");
    //   const imagemDeBatalhaUm = document.querySelector(
    //     ".personagem-grande-jogador-um"
    //   );
    //   const imagemDeBatalhaDois = document.querySelector(
    //     ".personagem-grande-jogador-dois"
    //   );
    //   const titulo = document.querySelector(".selecao-de-personagem h1");

    //   cards.style.display = "flex";
    //   imagemDeBatalhaUm.style.height = "19rem";
    //   imagemDeBatalhaUm.style.marginTop = "1rem";
    //   imagemDeBatalhaDois.style.height = "19rem";
    //   imagemDeBatalhaDois.style.marginTop = "1rem";
    //   batalhar.style.marginLeft = "42%";
    //   batalhar.style.marginTop = "1.5rem";
    //   titulo.innerText = "Escolha seu personagem";

    //   const personagemUm = document.getElementById("jogador-um");
    //   const personagemDois = document.getElementById("jogador-dois");
    //   personagemUm.innerText = "";
    //   personagemDois.innerText = "";

    //   personagens.forEach((personagem) => {
    //     personagem.classList.remove("selecaoUm", "selecaoDois");
    //     personagem.disabled = false;
    //   });

    //   botaoEscolhaUm.style.display = "block";
    //   botaoEscolhaUm.innerText = "Escolher";
    //   botaoEscolhaUm.disabled = true;

    //   botaoEscolhaDois.style.display = "block";
    //   botaoEscolhaDois.innerText = "Escolher";
    //   botaoEscolhaDois.disabled = true;

    //   botaoDeRetorno.remove();
    // });

    document.body.appendChild(botaoDeRetorno);

    function iniciarJogo() {
      regioes.forEach((elemento) => {
        elemento.classList.remove("venceu");
        elemento.innerText = "";
        elemento.classList.add("cursor-pointer");
        elemento.addEventListener("click", CliqueNoTabuleiro);
      });
    }

    function marqueRegioes() {
      const regioesVitoria = [];
      const possibilidadesVitoria = [
        [
          [0, 0],
          [0, 1],
          [0, 2],
        ],
        [
          [1, 0],
          [1, 1],
          [1, 2],
        ],
        [
          [2, 0],
          [2, 1],
          [2, 2],
        ],
        [
          [0, 0],
          [1, 0],
          [2, 0],
        ],
        [
          [0, 1],
          [1, 1],
          [2, 1],
        ],
        [
          [0, 2],
          [1, 2],
          [2, 2],
        ],
        [
          [0, 0],
          [1, 1],
          [2, 2],
        ],
        [
          [0, 2],
          [1, 1],
          [2, 0],
        ],
      ];

      possibilidadesVitoria.forEach((possibilidade) => {
        const [pos1, pos2, pos3] = possibilidade;
        const [linha1, coluna1] = pos1;
        const [linha2, coluna2] = pos2;
        const [linha3, coluna3] = pos3;

        if (
          tabuleiroVirtual[linha1][coluna1] &&
          tabuleiroVirtual[linha1][coluna1] ===
            tabuleiroVirtual[linha2][coluna2] &&
          tabuleiroVirtual[linha1][coluna1] ===
            tabuleiroVirtual[linha3][coluna3]
        ) {
          regioesVitoria.push(
            `${linha1}.${coluna1}`,
            `${linha2}.${coluna2}`,
            `${linha3}.${coluna3}`
          );
        }
      });

      return regioesVitoria;
    }

    function desabilitarRegioes() {
      regioes.forEach((elemento) => {
        elemento.style.cursor = "default";
        elemento.removeEventListener("click", CliqueNoTabuleiro);
      });
    }

    function CliqueNoTabuleiro(ev) {
      const span = ev.target;
      const regiao = span.dataset.region;
      const [linha, coluna] = regiao.split(".");

      if (tabuleiroVirtual[linha][coluna] !== "") {
        return;
      }

      tabuleiroVirtual[linha][coluna] = jogadorAtual;
      span.innerText = jogadorAtual;

      console.clear();
      console.table(tabuleiroVirtual);

      const vitoriosasRegioes = marqueRegioes();
      if (vitoriosasRegioes.length > 0) {
        vitoriosasRegioes.forEach((regiao) => {
          document
            .querySelector(`[data-region="${regiao}"]`)
            .classList.add("venceu");
        });
        desabilitarRegioes();
      } else {
        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
        batalhar.innerText = "Remoçar!";
      }
    }

    iniciarJogo();
  });
});
