function jogar() {
  rodada = 1;
  vencer = false;
  while (rodada <= 3) {
    console.log("Rodada: " + rodada);

    escolhaJogador = prompt(
      "Nível " + rodada + ", escolha um vidro 1, 2 ou 3?"
    );
    if (escolhaJogador == undefined) {
      alert("Resposta indefinida!!");
      break;
    }
    while (escolhaJogador < 1 || escolhaJogador > 3) {
      alert("ERRO! Vidro inválido!!");
      escolhaJogador = prompt(
        "Nível " + rodada + ", escolha um vidro 1, 2 ou 3?"
      );
    }

    pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == pisoQuebrado) {
      alert("O vidro quebrou e você caiuu...  >:P");
      break;
    } else {
      alert(
        "Você passou para o próximo nível, o piso quebrado estava na ponte " +
          pisoQuebrado
      );
      if (rodada == 3) {
        vencer = true;
      }
    }

    rodada += 1; // rodada = rodada + 1
  }

  if (vencer) {
    alert("Parabéns!! Você venceu");
  }
}
