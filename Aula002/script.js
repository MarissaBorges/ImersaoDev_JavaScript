// VAMOS JOGAR PEDRA, PAPEL OU TESOURA??
// FIQUE ATENTO!! VOCÊ SO PODERÁ JOGAR SE FOR MAIOR DE 18 ANOS

idade = prompt("Qual a sua idade?");
if (idade < 18) {
  alert("Você precisa crescer mais!!");
}

if (idade >= 18) {
  jogador = prompt("Digite 1-Pedra, 2-Papel, 3-Tesoura");
  computador = Math.floor(Math.random() * 3) + 1;

  if (jogador > 3) {
    alert("Alerta!!! Número inválido!");
  }
  if (jogador < 1) {
    alert("Alerta!!! Número inválido!");
  }

  if (jogador == computador) {
    alert("EMPATE!!! Computador: " + computador);
  }
  if (jogador == 1) {
    if (computador == 2) {
      alert("Você perdeu!! Computador: " + computador);
    }
    if (computador == 3) {
      alert("Você venceu!! Computador: " + computador);
    }
  }

  if (jogador == 2) {
    if (computador == 1) {
      alert("Você venceu!! Computador: " + computador);
    }
    if (computador == 3) {
      alert("Você perdeu!! Computador: " + computador);
    }
  }

  if (jogador == 3) {
    if (computador == 2) {
      alert("Você venceu!! Computador: " + computador);
    }
    if (computador == 1) {
      alert("Você perdeu!! Computador: " + computador);
    }
  }
}
