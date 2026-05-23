function calcularPromocao() {
  var inMedicamento = document.getElementById("inMedicamento");
  var inPreco = document.getElementById("inPreco");
  var outTitle = document.getElementById("outTitle");
  var outPrecoPromocao = document.getElementById("outPrecoPromocao");

  var medicamento = inMedicamento.value;
  var preco = Number(inPreco.value);

  var totalSemDesconto = preco * 2;
  var totalComDesconto = Math.floor(totalSemDesconto);

  outTitle.innerHTML = `<strong>Promoção de ${medicamento}</strong>`;
  outPrecoPromocao.innerHTML = `<strong>Leve 2 por apenas R$: ${totalComDesconto.toFixed(2)}</strong>`;
}

var btVerPromocao = document.getElementById("btVerPromocao");

btVerPromocao.addEventListener("click", calcularPromocao);
