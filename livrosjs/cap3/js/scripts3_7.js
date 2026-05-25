function verificarImparOuPar() {
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  outResposta.textContent = "";

  var numero = Number(inNumero.value);

  if (inNumero.value === "" || isNaN(numero)) {
    alert("Informe um número válido!");
    inNumero.focus();
    return;
  }

  if (numero % 2 === 0) {
    outResposta.textContent = `Resposta: ${numero} é Par`;
  } else {
    outResposta.textContent = `Resposta: ${numero} é Ímpar`;
  }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarImparOuParo);
