function verificarTriangulo() {
  var inLadoA = document.getElementById("inLadoA");
  var inLadoB = document.getElementById("inLadoB");
  var inLadoC = document.getElementById("inLadoC");
  var outResposta = document.getElementById("outResposta");
  var outTipo = document.getElementById("outTipo");

  outResposta.textContent = "";
  outTipo.textContent = "";

  var a = Number(inLadoA.value);
  var b = Number(inLadoB.value);
  var c = Number(inLadoC.value);

  // Validação dos três campos
  if (inLadoA.value === "" || isNaN(a) || a <= 0) {
    alert("Informe o Lado A corretamente");
    inLadoA.focus();
    return;
  }
  if (inLadoB.value === "" || isNaN(b) || b <= 0) {
    alert("Informe o Lado B corretamente");
    inLadoB.focus();
    return;
  }
  if (inLadoC.value === "" || isNaN(c) || c <= 0) {
    alert("Informe o Lado C corretamente");
    inLadoC.focus();
    return;
  }

  // Verifica se os três lados formam um triângulo
  if (a < b + c && b < a + c && c < a + b) {
    outResposta.textContent = "Forma um Triângulo!";

    // Verifica o tipo do triângulo
    if (a === b && b === c) {
      outTipo.textContent = "Tipo: Equilátero (3 lados iguais)";
    } else if (a === b || b === c || a === c) {
      outTipo.textContent = "Tipo: Isósceles (2 lados iguais)";
    } else {
      outTipo.textContent = "Tipo: Escaleno (3 lados diferentes)";
    }
  } else {
    outResposta.textContent = "Não forma um Triângulo!";
  }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarTriangulo);
