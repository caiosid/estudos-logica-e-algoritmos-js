function calcularParquimetro() {
  var inValor = document.getElementById("inValor");
  var outTempo = document.getElementById("outTempo");
  var outTroco = document.getElementById("outTroco");

  outTempo.textContent = "";
  outTroco.textContent = "";

  var valor = Number(inValor.value);

  if (inValor.value === "" || isNaN(valor) || valor <= 0) {
    alert("Informe um valor válido");
    inValor.focus();
    return;
  }

  // valor insuficiente (menos de R$ 1,00)
  if (valor < 1.0) {
    outTempo.textContent = "Valor Insuficiente";
    return;
  }

  var tempo;
  var troco;

  if (valor >= 3.0) {
    tempo = 120;
    troco = valor - 3.0;
  } else if (valor >= 1.75) {
    tempo = 60;
    troco = valor - 1.75;
  } else {
    tempo = 30;
    troco = valor - 1.0;
  }

  outTempo.textContent = `Tempo: ${tempo} min`;

  if (troco > 0) {
    outTroco.textContent = `Troco R$: ${troco.toFixed(2)}`;
  }
}
