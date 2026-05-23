function calcularPromocao() {
  var inProduto = document.getElementById("inProduto");
  var inPreco = document.getElementById("inPreco");
  var outTitulo = document.getElementById("onTitulo");
  var outPromocao = document.getElementById("outPromocao");

  var produto = inProduto.value;
  var preco = Number(inPreco.value);

  var desconto = preco * 0.5;
  var total = preco * 2 + desconto;

  outTitulo.innerHTML = `<strong>${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}</strong>`;
  outPromocao.innerHTML = `<strong>O 3º produto custa apenas R$: ${desconto.toFixed(2)}</strong>`;
}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", calcularPromocao);
