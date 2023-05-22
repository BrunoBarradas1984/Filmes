/**Este arquivo deve conter os dados dos filmes e as avaliações
 */

const filmes = [
  {
    titulo: "Top Gun - Ases Indomáveis",
    sinopse:
      "Em Top Gun - Ases Indomáveis, Pete Mitchell (Tom Cruise), um jovem piloto, ingressa na Academia Aérea para se tornar piloto de caça. Lá, ele se envolve com Charlotte Blackwood (Kelly McGillis), uma bela mulher, e enfrenta um competidor à sua altura (Val Kilmer).",
    classificacao: [],
  },
  {
    titulo: "Seven - Sete Pecados Mortais",
    sinopse:
      'O filme SEVEN "Sete Pecados Mortais" apresenta o lado obscuro da mente de um serial killer, que pensa e age de uma forma muito particular. Seu modus operandi se baseia nos sete pecados capitais: gula; cobiça; preguiça; luxúria; vaidade; inveja e ira.',
    classificacao: [],
  },
  {
    titulo: "Con Air",
    sinopse:
      "Cameron Poe (Nicolas Cage) conquistou a liberdade condicional e pega carona em um voo que transporta diversos criminosos do país, entre eles, o psicopata Cyrus (John Malkovich). Mas o que era para ser apenas uma viagem torna-se um grande pesadelo porque os bandidos assumem o controle do avião para sair do país e dão início a um insano plano de fuga",
    classificacao: [],
  },
];

function avaliarFilme(filme, avaliacao) {
  filme.classificacao.push(avaliacao);
}

module.exports = {
  filmes,
  avaliarFilme,
};

/**
 * Para usarmos as questões noutro ficheiro é necessário exportar a variável.
 *  Adicionar  mais filmes se desejado, apenas adicionar mais opcoes a matriz de filmes
 */
