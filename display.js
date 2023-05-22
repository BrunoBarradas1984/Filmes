/** Este arquivo deve conter funções para formatar e exibir os resultados na consola
O método forEach () executará uma função para cada elemento presente em um array. ou seja utilizei foreach apos pesquisar forma de cada filme ser avaliado indpendentemente
tofixed para deixar media apenas com um caracter
*/
const calculaAvaliacoes = require("./calculations");

function exibirResultados(filmes) {
  console.log("Classificação dos Filmes:\n");
  filmes.forEach((filme, index) => {
    const media = calculaAvaliacoes.calcularMedia(filme.classificacao);
    console.log(`Filme ${index + 1}: ${filme.titulo}`);
    console.log(`Sinopse: ${filme.sinopse}`);
    console.log(`Classificação Média: ${media.toFixed(1)}\n`);
  });
}

module.exports = {
  exibirResultados,
};
