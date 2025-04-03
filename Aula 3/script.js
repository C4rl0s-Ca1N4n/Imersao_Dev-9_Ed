let rodada = 1;

function porta() {
    while (rodada <= 3) {
      let escolha;
      do {
            escolha = prompt("Nível: " + rodada + "\nEscolha a Porta 1, 2 ou 3");
        } while (!["1", "2", "3"].includes(escolha));
      
      let pisobroke = Math.floor(Math.random() * 3) + 1;

      document.getElementById("porta1").classList.remove("quebrado", "intacto");
      document.getElementById("porta2").classList.remove("quebrado", "intacto");
      document.getElementById("porta3").classList.remove("quebrado", "intacto");

      document.getElementById("porta1").classList.add(pisobroke == 1 ? "quebrado" : "intacto");
      document.getElementById("porta2").classList.add(pisobroke == 2 ? "quebrado" : "intacto");
      document.getElementById("porta3").classList.add(pisobroke == 3 ? "quebrado" : "intacto");
      

      if (pisobroke == escolha) {
        alert("Porta fechada! Volte para o início!");
        rodada = 100;
      } else {
        alert("Você conseguiu! A porta errada era a porta " + pisobroke);
        rodada++;
      }
    }
    if (rodada == 4) {
      alert("Você venceu!!");
    }
}

function reiniciarJogo() {
    rodada = 1;
    alert("O jogo foi reiniciado!");
    porta();
}