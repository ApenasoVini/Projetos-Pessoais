var goleiro, zagueiro1, zagueiro2, latdireito, latesquerdo, volante, meia1, meia2, pontaD, pontaE, centroAvante;
var selecao = [];

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

    selecao = [goleiro, zagueiro1, zagueiro2, latdireito, latesquerdo, volante, meia1, meia2, pontaD, pontaE, centroAvante];
    var timeElement = document.getElementById('time');
    timeElement.innerHTML = selecao.join('<br>');

}
function limpar() {
    selecao.splice(0, selecao.length);
}