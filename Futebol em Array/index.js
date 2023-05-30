var goleiro, zagueiro1, zagueiro2, latdireito, latesquerdo, volante, meia1, meia2, pontaD, pontaE, centroAvante;
var selecao = [];
var timeElement = document.getElementById('time');

function letras(input) {
    return /^[a-zA-Z]+$/.test(input);
  }

function campo() {
    
    goleiro = prompt("Digite o nome do goleiro");
    zagueiro1 = prompt("Digite o nome do primeiro zagueiro");
    zagueiro2 = prompt("Digite o nome do segundo zagueiro");
    latdireito = prompt("Digite o nome do lateral direito");
    latesquerdo = prompt("Digite o nome do lateral esquerdo");
    volante = prompt("Digite o nome do volante");
    meia1 = prompt("Digite o nome do primeiro meia");
    meia2 = prompt("Digite o nome do segundo meia");
    pontaE = prompt("Digite o nome do ponta esquerda");
    pontaD = prompt("Digite o nome do ponta direita");
    centroAvante = prompt("Digite o nome do centroavante");

    if (!letras(goleiro) || !letras(zagueiro1) || !letras(zagueiro2) || !letras(latdireito) || !letras(latesquerdo) || !letras(volante) || !letras(meia1) || !letras(meia2) || !letras(pontaE) || !letras(pontaD) || !letras(centroAvante)) {
        alert("Escalação inválida. Por favor, digite o nome do jogador (verifique de não digitar números).");
        return;
    }

    selecao = [goleiro, zagueiro1, zagueiro2, latdireito, latesquerdo, volante, meia1, meia2, pontaD, pontaE, centroAvante];
    timeElement.innerHTML = selecao.join('<br>');
}

function limpar() {
    timeElement.innerHTML = '';
}

letras(input)
