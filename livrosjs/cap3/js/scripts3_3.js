var bairro = prompt("Bairro de Entrega: ");
var taxaEntrega;
switch (bairro) {
  case "Centro":
    taxaEntrega = 5.0;
    break;
  case "Fragata":
  case "Três Vendas":
    taxaEntrega = 7.0;
    break;
  case "Laranjal":
    taxaEntrega = 10.0;
    break;
  default:
    taxaEntrega = 8.0;
}
alert("Taxa R$: " + taxaEntrega.toFixed(2));
