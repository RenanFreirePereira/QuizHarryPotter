start = window.document.getElementById("botaoStart")
respostas = window.document.querySelectorAll(".resposta")
let questao = window.document.getElementById("questao")
let contadorquestao = 0; 
let impressaoContador = window.document.getElementById("contador")
let questoes = ["Complete: seu amigo cai e quebra uma cadeira, então você...", "O que você frequentemente ouve?", "Você facilmente ama alguém?", "você sente vontade de fazer alguma vingança?", "Qual seria a sua abordagem ao enfrentar um desafio difícil?", "Como você prefere passar seu tempo livre?", "você mente facilmente?", "Se você terminasse com alguém, como ficaria?", "Se o seu melhor amigo se afastasse, como você ficaria?"] 
let respostas0 =  ["Ri dele", "Tenta  ajudar", "Você entra em desespero", "ajuda ele e conserta a cadeira"]
let respostas1 = ["Que você é bonito", "Que é estudioso", "Que pensa muito nos outros", "Que é gentil"]
let respostas2 = ["Com certeza, sim", "Razoavelmente sim", "Difícilmente, mas me esforço", "Facilmente"]
let respostas3 = ["Sim, com quem me irrita", "Sim, mas de modo inteligente", "Com um bom motivo, sim", "Não sinto, prefiro perdoar"]
let respostas4 = [" Estratégia cuidadosa", "Coragem e ação imediata.", "Me apoiaria em meus amigos ", " Confiança na intuição "]
let respostas5 = ["Lendo e estudando", "Explorando ideias", "Com meus amigos", "Usando o celular"]
let respostas6 = ["As vezes", "Apenas quando é inevitável", "nos momentos em que é preciso", "Evito, mas acabo mentindo"]
let respostas7 = ["Muito abalado", "De certo modo abalado", "Com o tempo bem", "museu que vive de passado"]
let respostas8 = ["Terrivelmente triste", "Triste e em pouco tempo bem", "Um pouco triste só de momento", "surpreso e incrédulo"]
let telaQuestoes = window.document.getElementById("areaAsk")
let sonserina = 0
let ganhador = 0;
let grifinoria = 0
let lufa = 0
let corvinal = 0
start.addEventListener("click", () => {
    irParaQuestao("")
})

function irParaQuestao() {
    let telaBoaVinda =  window.document.getElementById("boasVindas")
    telaBoaVinda.style.display = "none"
    telaQuestoes.style.display = "flex"
    proximaQuestao("")
}

respostas.forEach(function(respostas) {
    respostas.addEventListener("click", function(){
        proximaQuestao(respostas.id)
    })
});


function processarPontuacao(resposta, contadorquestao){
    if(contadorquestao == 1){
        if(resposta == 1){
            sonserina++
        }
        else if(resposta == 2){
            grifinoria++
        }
        else if(resposta == 3){
            lufa++
        }
        else{
            corvinal++
        }
    }
    else if(contadorquestao == 2){
        if(resposta == 1){
            sonserina++
        }
        else if(resposta == 2){
            corvinal++
        }
        else if(resposta == 3){
            grifinoria++
        }
        else{
            lufa++
        }
    }
    else if(contadorquestao == 3){
        if(resposta == 1){
            lufa++
        }
        else if(resposta == 2){
            grifinoria++
        }
        else if(resposta == 3){
            sonserina++
        }
        else{
            corvinal++
        }
    }
    else if(contadorquestao == 4){
        if(resposta == 1){
            sonserina++
        }
        else if(resposta == 2){
           corvinal++ 
        }
        else if(resposta == 3){
            grifinoria++
        }
        else{
            lufa++
        }
    }
    else if(contadorquestao == 5){
        if(resposta == 1){
            corvinal++
        }
        else if(resposta == 2){
           grifinoria++ 
        }
        else if(resposta == 3){
            lufa++
        }
        else{
            sonserina++
        }
    }
    else if(contadorquestao == 6){
        if(resposta == 1){
            corvinal++
        }
        else if(resposta == 2){
            grifinoria
        }
        else if(resposta == 3){
            lufa++
        }
        else{
            sonserina++
        }
    }
    else if(contadorquestao == 7){
        if(resposta == 1){
            lufa++
        }
        else if(resposta == 2){
            grifinoria++
        }
        else if(resposta == 3){
            sonserina++
        }
        else{
            corvinal++
        }
    }
    else if(contadorquestao == 8){
        if(resposta == 1){
            lufa++
        }
        else if(resposta == 2){
            corvinal++
        }
        else if(resposta == 3){
              grifinoria++
        }
        else{
            sonserina++
        }
    }
    else if(contadorquestao == 9){
        if(resposta == 1){
            lufa++
        }
        else if(resposta == 2){
            grifinoria++

        }
        else if(resposta == 3){
            corvinal++
        }
        else{
            sonserina++
        }
    }
}


function proximaQuestao(respondido){
    processarPontuacao(respondido, contadorquestao)
    if(contadorquestao < 9){
    window.document.getElementById("questao").innerText = questoes[contadorquestao].toUpperCase()
    }
    impressaoContador.innerText = contadorquestao + 1
    if(contadorquestao == 0){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas0[cont].toUpperCase()
        }
    }
    else if (contadorquestao == 1){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas1[cont].toUpperCase()
        }
    }
    else if (contadorquestao == 2){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas2[cont].toUpperCase()
        }
    }
    else if (contadorquestao == 3){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas3[cont].toUpperCase()
        }
    }
    else if (contadorquestao == 4){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas4[cont].toUpperCase()
        }
        
    }
    else if (contadorquestao == 5){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas5[cont].toUpperCase();
        }
    }
    else if (contadorquestao == 6){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas6[cont].toUpperCase();
        }
    }
    else if(contadorquestao == 7){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas7[cont].toUpperCase();
        }
    }
    else if(contadorquestao == 8){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas8[cont].toUpperCase();
        }
    }
  else {
        telaFinal()
    }
    contadorquestao++;
    console.log(" ")
    console.log(contadorquestao)
}

function telaFinal() {
    let telaFinalInterface = window.document.getElementById("telaFinal");
    let telaQuestoes = window.document.getElementById("areaAsk"); 
    telaQuestoes.style.display = "none";
    telaFinalInterface.style.display = "flex";
    ganhador = encontraMaiorIndice(sonserina, grifinoria, lufa, corvinal)
    linksCasas = ["sonserina.png", "grifinoria.png", "lufa.png", "corvinal.webp"];
    nomeCasas = ["sonserina", "grifinória", "lufa-lufa", "corvinal"]
    let escritaNomeDaCasa =  window.document.getElementById("casaNome")
    escritaNomeDaCasa.innerText = nomeCasas[ganhador - 1].toUpperCase()
    let imagemDaCasa = window.document.getElementById("imagemCasa")
    imagemDaCasa.src = linksCasas[ganhador - 1]
    let textosSobreCasas = [
        ["Sonserina: Uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts, conhecida por valorizar astúcia, ambição e determinação."],
        ["Grifinória: Casa em Hogwarts que preza coragem, bravura e lealdade, sendo lar de muitos bruxos notáveis, incluindo Harry Potter."],
        ["Lufa-Lufa: Uma das casas de Hogwarts, destacando-se pela valorização de características como paciência, bondade e trabalho árduo."],
        ["Corvinal: Casa em Hogwarts que valoriza a inteligência, a sabedoria e a criatividade, sendo conhecida por atrair bruxos dedicados ao aprendizado."]
    ]

    let escritaTextosSobreAsCasas = window.document.getElementById("textoSobreACasa").innerText = textosSobreCasas[ganhador - 1]


}

function encontraMaiorIndice(num1, num2, num3, num4) {
    const numeros = [num1, num2, num3, num4];
    const maiorNumero = Math.max(...numeros);
    const indices = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === maiorNumero) {
            indices.push(i + 1);
        }
    }

    const indiceEscolhido = indices[Math.floor(Math.random() * indices.length)];

    return indiceEscolhido;
}

console.log(encontraMaiorIndice(5, 6, 12, 12))


