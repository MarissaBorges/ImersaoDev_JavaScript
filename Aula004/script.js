// Criando uma lista com os 3 jogadores
herois = ["", "", ""];
viloes = ["", "", ""];

forcaHerois = 0;
forcaViloes = 0;

// HERÓIS
for (
  let // forma mais recente de setar uma variável
    i = 0; // criação da variável de controle dentro do loop
  i < 3; // condição de parada
  i++ // indica que a variavel ira de 1 em 1 ou /i += 1/
) {
  escolhaHeroi = prompt("Digite o nome do seu heroi " + (i + 1));
  herois[i] = escolhaHeroi;
  // Calculando a força de cada personagem e depois somar pra saber a força do time
  forcaHerois += Math.floor(Math.random() * 10) + 1;
}

// VILÕES
for (let i = 0; i < 3; i++) {
  aleatorio = Math.floor(Math.random() * 10);
  possiveisViloes = [
    "DR Octopus",
    "Venom",
    "Thanos",
    "Morte",
    "Java",
    "Grimmel",
    "Electro",
    "Ambessa",
    "Duende Verde",
    "Abby",
  ];
  viloes[i] = possiveisViloes[aleatorio];
  // Calculando a força de cada personagem e depois somar pra saber a força do time
  forcaViloes += Math.floor(Math.random() * 10) + 1;
}

// Comparar os dois times para saber quem venceu
if (forcaHerois > forcaViloes) {
  alert("A cidade foi salva!! Sua força foi " + forcaHerois);
} else {
  if (forcaHerois < forcaViloes) {
    alert(
      "Os vilões destruiram a cidade... A força deles foi de " + forcaViloes
    );
  } else {
    alert(
      "Empate!! Os dois times lutaram e se cansaram... Força " + forcaHerois
    );
  }
}
