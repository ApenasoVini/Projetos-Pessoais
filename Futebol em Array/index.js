function campo() {
    
    var goleiro, zagueiro1, zagueiro2, latdireito, latesquerdo, volante, meia1, meia2, pontaD, pontaE, centroAvante

    do {
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
    } while (
        typeof goleiro == null ||
        typeof zagueiro1 == null ||
        typeof zagueiro2 == null ||
        typeof latdireito == null ||
        typeof latesquerdo == null ||
        typeof volante == null ||
        typeof meia1 == null ||
        typeof meia2 == null ||
        typeof pontaD == null ||
        typeof pontaE == null ||
        typeof centroAvante == null
    );

    var escalacao = [goleiro, zagueiro1, zagueiro2, latdireito, latesquerdo, volante, meia1, meia2, pontaD, pontaE, centroAvante];

    var timeElement = document.getElementById('time');
    timeElement.innerHTML = escalacao.join('<br>');
}
