function churras(){
    let qtdePessoas = Number(document.getElementById("qtdePessoas").value)
    let kgs = (qtdePessoas * 400) / 1000 // transforma gramas em kilos
    document.getElementById("resultadoChurras").innerText = "Total de carne " + kgs + " Kg"
}
function febre(){
    // obter a temperatura digitada pelo usuário
    let temperatura = Number(document.getElementById("temperatura").value)
    // verifica o estado febril
    if (temperatura >= 37.5){
        // mostra o resultado de estado febril ao usuário
        document.getElementById("resultadoFebril").innerText = "Está com febre"
    }
    else {
        document.getElementById("resultadoFebril").innerText = "Temperatura normal"
    }
}
function credito(){
    // recupera os dados de renda e idade
    let renda = Number(document.getElementById("renda").value)
    let idade = Number(document.getElementById("idade").value)
    // verifica se pode fazer o empréstimo
    if (renda > 2000 && idade > 18) { // operador && significa E
        document.getElementById("resultadoCredito").innerText = "Crédito aprovado"
    }
    else {
        document.getElementById("resultadoCredito").innerText = "Crédito não foi aprovado"
    }
    // operador || significa OU
}

function luta(){
     // recupera os dados de peso e idade
    let peso = Number(document.getElementById("peso").value)
    let idadeLuta = Number(document.getElementById("idadeLuta").value)
    if (idadeLuta < 18){
        document.getElementById("resultadoLuta").innerText = "Categoria Juvenil"
    }
    else if (peso < 80){
        document.getElementById("resultadoLuta").innerText = "Categoria Adulto - Subcategoria Leve"
    }
    else {
        document.getElementById("resultadoLuta").innerText = "Categoria Adulto - Subcategoria Pesado"
    }
}