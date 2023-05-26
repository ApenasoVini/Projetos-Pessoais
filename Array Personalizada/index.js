var ary = []
let array = document.getElementById("valor")

function adicionar(){
    let itemPraAdd = document.getElementById("display").value
    ary.push(itemPraAdd)
    array.innerHTML = ary
}

function remover(){
    ary.splice(0, 1)
    array.innerHTML = ary
}

function alterar(){
    var itemPraAlterar = document.getElementById("display").value
    var posicao = ary.indexOf(itemPraAlterar)
    if (posicao !== -1) {
        var novoItem = prompt("Digite o novo valor para " + itemPraAlterar)
        ary[posicao] = novoItem
    } else {
        alert("O item não foi encontrado na array.")
    }
    array.innerHTML = ary
}