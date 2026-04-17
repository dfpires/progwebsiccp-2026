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