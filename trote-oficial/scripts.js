function calcular(){
    // pontuação dos itens avulsos
    // recupera para uma variável do JS a quantidade de arroz digitado pelo user
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
    // recupera para uma variável do JS a quantidade de feijão digitado pelo user
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
    // recupera para uma variável do JS a quantidade de macarrão digitado pelo user
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
    // recupera para uma variável do JS a quantidade de óleo digitado pelo user
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
    // calcula a pontuação total
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeMacarrao * 4) +
                (qtdeOleo * 2)

    // pontuação dos kits de alimentação
    // recupera a cor escolhida pelo usuário
    let cor = document.getElementById("cor").value
    
    // estrutura de seleção
    let metaKit // meta do kit de alimentação de acordo com a equipe
    if (cor == "verde"){
        metaKit = 61
    }
    else if (cor == "vermelho"){
        metaKit = 32
    }
    else if (cor == "laranja"){
        metaKit = 21
    }
    // obter o valor que usuário informou de qtde de kits
    let qtdeKits = Number(document.getElementById("qtdeKits").value)
    // vamos verificar se bateu a meta de kit de alimentação
    if (qtdeKits >= metaKit){ // bateu a meta
        pontos = pontos + 5000 // acumulador
        if (qtdeKits > metaKit){ // maior que a meta
            pontos = pontos + (qtdeKits - metaKit) * (5000/metaKit)
        }
    }
    else { // não bateu a meta
        pontos = pontos + (qtdeKits) * (5000/metaKit)
    }
    // define a meta do suplemento
    let metaSuplemento
    if (metaKit % 2 == 0) { // é par
        metaSuplemento = metaKit / 2 // divisão de um inteiro por outro inteiro dá inteiro
    }
    else {
        metaSuplemento = (metaKit / 2) + 0.5
    }
    // obter valor do usuário
    let qtdeSuplemento = Number(document.getElementById("qtdeSuplemento").value)
    if (qtdeSuplemento >= metaSuplemento){
        pontos = pontos + 5000
        if (qtdeSuplemento > metaSuplemento){
            pontos = pontos + (qtdeSuplemento - metaSuplemento) * (5000/metaSuplemento)
        }
    }
    else {
        pontos = pontos + qtdeSuplemento * (5000/metaSuplemento)
    }
    // define a meta do leite
    let metaLeite = metaKit
    // define a meta do sangue
    let metaSangue = metaSuplemento

    // mostramos a pontuação total ao usuário
    document.getElementById("result").innerText = "Pontuação: R$ " + pontos.toFixed(2)
}