function calcularValor() {
  var inPreco = document.getElementById("inPreco");
  var inMinuto = document.getElementById("inMinuto");
  var outTitle = document.getElementById("outTitle");

  var preco = Number(inPreco.value);
  var minuto = Number(inMinuto.value);

  var blocos = Math.ceil(minuto / 15);
  var valor = blocos * preco;

  outTitle.innerHTML = `<strong>Valor a pagar: ${valor.toFixed(2)}</strong>`;
}

var btCalcularValor = document.getElementById("btCalcularValor");

btCalcularValor.addEventListener("click", calcularValor);
