var timerId = null;

function iniciaJogo(){
	var url = window.location.search;
	var nivelJogo = url.replace("?", "");
	var tempoSegundos = 0;

	if(nivelJogo == 1) { // Fácil
		tempoSegundos = 120;
	}

	if(nivelJogo == 2) { // Médio
		tempoSegundos = 60;
	}
	
	if(nivelJogo == 3) { // Difícil
		tempoSegundos = 30;
	}

	// Inserindo segundos no span
	document.getElementById('cronometro').innerHTML = tempoSegundos;

	// Quantidade de balões
	var qtdeBaloes = 65;	

	criarBaloes(qtdeBaloes);

	//imprimir qtde baloes inteiros
	document.getElementById('baloesInteiros').innerHTML = qtdeBaloes;
	document.getElementById('baloesEstourados').innerHTML = 0;
  
  contagemTempo(tempoSegundos + 1);
}

function contagemTempo(segundos){

	segundos = segundos - 1;

	if(segundos == -1){
		clearTimeout(timerId);
		gameOver();
		return false;
	}

	document.getElementById('cronometro').innerHTML = segundos;

	timerId = setTimeout("contagemTempo("+segundos+")", 1000);
}

function gameOver () {
	removeEventosBaloes();
  alert("Fim de jogo, você não conseguiu estourar todos os balões a tempo!");
}

function criarBaloes (qtdeBaloes) {
  for (var i = 1; i <= qtdeBaloes; i++) {
    var balao = document.createElement("img");
		balao.src = '../imagens/balao_azul_pequeno.png';
		balao.style.margin = '10px';
		balao.id = 'b'+i;
		balao.onclick = function(){ estourar(this); };

    document.getElementById("cenario").appendChild(balao);
  }
}

function estourar(e){

	var idBalao = e.id;

	document.getElementById(idBalao).setAttribute("onclick","");
	document.getElementById(idBalao).src = '../imagens/balao_azul_pequeno_estourado.png';

	pontuacao(-1);

}

function removeEventosBaloes() {
	var i = 1; //contador para recuperar balões por id
	
	//percorre os elementos de acordo com o id e só irá sair do laço quando não houver correspondência com elemento
	while(document.getElementById('b'+ i)) {
		//retira o evento onclick do elemnto
		document.getElementById('b'+ i).onclick = '';
		i++; //faz a iteração da variávei i
	}
}

function pontuacao(acao){

	var baloesInteiros = document.getElementById('baloesInteiros').innerHTML;
	var baloesEstourados  = document.getElementById('baloesEstourados').innerHTML;

	baloesInteiros = parseInt(baloesInteiros);
	baloesEstourados = parseInt(baloesEstourados);

	baloesInteiros = baloesInteiros + acao;
	baloesEstourados = baloesEstourados - acao;

	document.getElementById('baloesInteiros').innerHTML = baloesInteiros;
	document.getElementById('baloesEstourados').innerHTML = baloesEstourados;

	situacaoJogo(baloesInteiros);


}

function situacaoJogo(baloesInteiros){
	if(baloesInteiros == 0){
		alert('Parabéns, você conseguiu estourar todos os balões a tempo');
		pararJogo();
	}
}

function pararJogo(){
	clearTimeout(timerId);
}