function conversorUSD() {
  valorwons = prompt("digite um valor em wons");
  usd = 0.28;
  valordolar = parseFloat(valorwons * usd)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  alert(`Conversão de ${valorwons} Wons:\n\n💰 💵 $ ${valordolar} (Dólares)`);
}

function conversorEUR() {
  valorwons = prompt("digite um valor em wons");
  eur = 0.32;
  valoreuro = parseFloat(valorwons * eur)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  alert(`Conversão de ${valorwons} Wons:\n\n💶 € ${valoreuro} (Euros)`);
}

function conversorREAL() {
  valorwons = prompt("digite um valor em wons");
  real = 0.2;
  valorreais = parseFloat(valorwons * real)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  alert(`Conversão de ${valorwons} Wons:\n\n💰 R$ ${valorreais} (Reais)`);
}