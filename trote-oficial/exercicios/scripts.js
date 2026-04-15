function churras(){
    let qtdePessoas = Number(document.getElementById("qtdePessoas").value)
    let kgs = (qtdePessoas * 400) / 1000 // transforma gramas em kilos
    document.getElementById("resultadoChurras").innerText = "Total de carne " + kgs + " Kg"
}