function calcularPreco() {
  // cria referência aos elmentos da página.
  var inQuilo = document.getElementById("inQuilo");
  var inConsumo = document.getElementById("inConsumo");
  var outValor = document.getElementById("outValor");

  // obtém conteúdo dos campos de entrada.
  var quilo = Number(inQuilo.value);
  var consumo = Number(inConsumo.value);

  // calcula valor pago.
  var valor = (quilo / 1000) * consumo;

  // altera conteúdo da linha de resposta.
  outValor.textContent = `Valor a pagar R$: ${valor.toFixed(2)}`;
}

// cria referência ao elemento btCalcular.
var btCalcular = document.getElementById("btCalcular");

// registrar um evento associado ao botão, para carregar uma função.
btCalcular.addEventListener("click", calcularPreco);
