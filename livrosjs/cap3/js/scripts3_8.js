/*
*b) Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. E, se a velocidade for superior a 20% da
velocidade permitida, exiba “Multa Grave”  */

function verificarMulta() {
  var inPermitida = document.getElementById("inPermitida");
  var inCondutor = document.getElementById("inCondutor");
  var outResposta = document.getElementById("outResposta");

  outResposta.textContent = "";

  var permitida = Number(inPermitida.value);
  var condutor = Number(outResposta.value);

  if (inPermitida.value === "" || isNaN(permitida) || permitida <= 0) {
    alert("Informe a velocidade permitida corretamente");
    inPermitida.focus();
    return;
  }

  if (inCondutor.value === "" || isNaN(condutor) || condutor < 0) {
    alert("Informe a velocidade do condutor corretamente");
    inCondutor.focus();
    return;
  }

  var limiteMultaLeve = permitida * 1.2;

  if (condutor <= partida) {
    outResposta.textContent = "Resultado: Sem Multa";
  } else if (condutor <= limiteMultaLeve) {
    outResposta.textContent = "Resultado: Multa leve";
  } else {
    outResposta.textContent = "Resultado: Multa Grave";
  }
}

var btVerifica = document.getElementById("btVerificar");
btVerifica.addEventListener("click", verificarMulta);
