/** Este é o arquivo principal que será executado. Deve conter a lógica principal do programa e chamar funções de outros arquivos conforme necessário
utilizado metodo readline e const rl pois pequisei um metodo alternativo ao Prompt-sync, segui instrucoes online para utilizar codigo, rl.close verificado tambwm online
Number.isInteger utilizado para defenir todos o numeros utilizados em numeros inteiros. instrucoes tambem pesquisadas online 



*/
const readline = require("readline");
const data = require("./data");
const calculaAvaliacoes = require("./calculations");
const display = require("./display");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptClassificarFilme() {
  rl.question(
    "Digite o número do filme que deseja classificar (1 a 3): ",
    (filmeNumero) => {
      const filmeIndex = filmeNumero - 1;
      if (filmeIndex >= 0 && filmeIndex < data.filmes.length) {
        const filme = data.filmes[filmeIndex];
        promptAvaliarFilme(filme);
      } else {
        console.log("Número de filme inválido.");
        promptClassificarFilme();
      }
    }
  );
}

function promptAvaliarFilme(filme) {
  rl.question(
    `Digite uma avaliação para o filme "${filme.titulo}" (1 a 5): `,
    (avaliacao) => {
      const avaliacaoInt = parseInt(avaliacao);
      if (
        Number.isInteger(avaliacaoInt) && avaliacaoInt >= 1 && avaliacaoInt <= 5) {
        data.avaliarFilme(filme, avaliacaoInt);
        console.log(`Filme "${filme.titulo}" avaliado com sucesso!`);
        promptContinuar();
      } else {
        console.log("Avaliação inválida. Digite um número inteiro de 1 a 5.");
        promptAvaliarFilme(filme);
      }
    }
  );
}

function promptContinuar() {
  rl.question("Deseja classificar outro filme? (S/N): ", (resposta) => {
    if (resposta.toUpperCase() === "S") {
      promptClassificarFilme();
    } else {
      display.exibirResultados(data.filmes);
      rl.close();
    }
  });
}

function main() {
  console.log("Bem-vindo ao sistema de classificação de filmes!\n");

  rl.question(
    "Deseja classificar um filme ou consultar as classificações? (C - Classificar / S - Consultar): ",
    (opcao) => {
      if (opcao.toUpperCase() === "C") {
        promptClassificarFilme();
      } else if (opcao.toUpperCase() === "S") {
        display.exibirResultados(data.filmes);
        rl.close();
      } else {
        console.log(
          "Opção inválida. Digite C para classificar ou S para consultar."
        );
        main();
      }
    }
  );
}

main();
