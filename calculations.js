/**Este arquivo deve conter funções para calcular a média das avaliações
funcao para calcular media utiliza o .reduce
 A função reduce do JavaScript serve para iterar sobre um array e utilizar o valor de cada item para criar um objeto final com base em alguma regra. 
 Como o próprio nome da função sugere, ela “reduz” os itens de um vetor a um valor único
*/




function calcularMedia(avaliacoes) {
  const soma = avaliacoes.reduce((total, avaliacao) => total + avaliacao, 0);
  return soma / avaliacoes.length;
}

module.exports = {
  calcularMedia,
};
