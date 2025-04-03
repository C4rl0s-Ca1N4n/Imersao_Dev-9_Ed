pedra = 1;
papel = 2;
tesoura = 3;
lagarto = 4;
spock = 5;

function Pedra(){
  ChoicePC = Math.floor(Math.random() *5 ) + 1;
  if (ChoicePC == pedra)
    alert("Empate!")
  if (ChoicePC == papel)
    alert("Papel Cobre Pedra, Perdeu!")
  if (ChoicePC == tesoura)
    alert("Pedra destroi Tesoura, Venceu!")
  if (ChoicePC == lagarto)
    alert("Pedra esmaga Lagarto. Venceu!")
  if (ChoicePC == spock)
    alert("Spock vaporiza Pedra, Perdeu!")
}

function Papel(){
  ChoicePC = Math.floor(Math.random() *5 ) + 1;
  if (ChoicePC == papel)
    alert("Empate!")
  if (ChoicePC == pedra)
    alert("Papel Cobre Pedra, Venceu!")
  if (ChoicePC == tesoura)
    alert("Tesoura corta Papel, Perdeu!")
  if (ChoicePC == lagarto)
    alert("Lagarto come Papel. Perdeu!")
  if (ChoicePC == spock)
    alert("Papel desaprova Spock, Venceu!")
}

function Tesoura(){
  ChoicePC = Math.floor(Math.random() *5 ) + 1;
  if (ChoicePC == tesoura)
    alert("Empate!")
  if (ChoicePC == papel)
    alert("Tesoura corta Papel, Venceu!")
  if (ChoicePC == pedra)
    alert("Pedra destroi Tesoura, Perdeu!")
  if (ChoicePC == lagarto)
    alert("Tesoura decapita Lagarto. Venceu!")
  if (ChoicePC == spock)
    alert("Spock quebra Tesoura, Perdeu!")
}

function Lagarto(){
  ChoicePC = Math.floor(Math.random() *5 ) + 1;
  if (ChoicePC == lagarto)
    alert("Empate!")
  if (ChoicePC == papel)
    alert("Lagarto Come Papel, Venceu!")
  if (ChoicePC == tesoura)
    alert("Tesoura decapita Lagarto, Perdeu!")
  if (ChoicePC == pedra)
    alert("Pedra esmaga Lagarto. Perdeu!")
  if (ChoicePC == spock)
    alert("Lagarto envenena Spock, Venceu!")
}

function Spock(){
  ChoicePC = Math.floor(Math.random() *5 ) + 1;
  if (ChoicePC == spock)
    alert("Empate!")
  if (ChoicePC == papel)
    alert("Papel desaprova Spock, Perdeu!")
  if (ChoicePC == tesoura)
    alert("Spock quebra Tesoura, Venceu!")
  if (ChoicePC == lagarto)
    alert("Lagarto envenena Spock. Perdeu!")
  if (ChoicePC == pedra)
    alert("Spock vaporiza Pedra, Venceu!")
}