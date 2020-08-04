function cumprimentar() {
  alert("Olá!");
}

function mudarFundo() {
  document.getElementById("fundo").style.backgroundColor = "rgba(1, 56, 1, 0.349)";
}

function passarMouse() {
  console.log("Estou vendo a imagem");
}

window.onload = function() {
  var img = document.getElementById("img-click");

  img.addEventListener("click", function imagemClicada() {
    console.log("Estou clicando na imagem.");
    console.log("Posição x do mouse", event.x);
    console.log("Posição y do mouse", event.y);
  });
}

function impossivelEnviar() {
  alert("Não é possível enviar.")
}

function tempoEsgotado() {
  setInterval( function() {
    alert("Tempo esgotado!");
  }, 10000);
}
tempoEsgotado();