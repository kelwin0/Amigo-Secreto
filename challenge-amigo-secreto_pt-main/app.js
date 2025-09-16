let listaNomesgerados = [];
let input = document.getElementById("amigo");
let ulAmigos = document.getElementById("listaAmigos");
let inputNome = document.querySelector(".input-name");
let botaoAdd = document.querySelector(".button-add");

function adicionarAmigo() {
  let amigoAdd = input.value.trim();

  if (amigoAdd === "") {
    alert("Por favor, insira um nome valido.");
  } else {
      listaNomesgerados.push(amigoAdd);
      input.value = "";
      exibirLista();
   }
}

inputNome.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
      event.preventDefault();
      botaoAdd.click();
  }
});

function resetarLista() {
    listaNomesgerados.length = 0;
    ulAmigos.innerHTML = "";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}

function exibirLista() {
  ulAmigos.innerHTML = "";
  for (let i = 0; i < listaNomesgerados.length; i++) {
    let li = document.createElement("li");
    li.textContent = listaNomesgerados[i];
    ulAmigos.appendChild(li);

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";
    botaoRemover.classList.add("btn-remover");
    botaoRemover.addEventListener(
      "click",
      (function (indice) {
        return function () {
          listaNomesgerados.splice(indice, 1);
          exibirLista();
        };
      })(i)
    );
    li.appendChild(botaoRemover);
  }
}

function sortearAmigos() {
  if (listaNomesgerados.length === 0) {
    alert("a lista está vazia");
    return;
  }
  let numeroIndice = Math.floor(Math.random() * listaNomesgerados.length);
  let amigoSorteado = listaNomesgerados[numeroIndice];
  listaNomesgerados.splice(numeroIndice, 1);  
  exibirLista();
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "🎉 o amigo sorteado foi: " + amigoSorteado + " 🎉";
}
