// declara a função mostrarOla
function mostrarOla() {
  // obtém o conteúdo de campo (com id=) nome
  let nome = document.getElementById("nome").value;
  // exibine o parágrafo (resposta): "Olá" e o  nome informado
  document.getElementById("resposta").textContent = "Olá, " + nome;
}

// cria uma referência ao botão (com id=) mostrar
let mostrar = document.getElementById("mostrar");
// registrar para o botão "mostrar" um ouvinte para o evento click,
// que ao ser clicado irá chamar a função mostrarOla
mostrar.addEventListener("click", mostrarOla);
