let perguntas = [
    "Você estava presente na sala quando o celular desapareceu?",
    "Você viu alguém pegar o celular?",
    "Você conhece o dono do celular?",
    "Você estava perto do local onde o celular estava guardado?",
    "Você conversou com alguém sobre o desaparecimento do celular?",
    "Você sabe quem pegou o celular?",
    "Você entrou na sala depois que o celular desapareceu?",
    "Você viu alguém saindo da sala com algum objeto?",
    "Você escondeu alguma informação sobre o desaparecimento do celular?",
    "Você sabe onde o celular está neste momento?"
];
 
let respostas = [];
let i = 0;
 
mostrarPergunta();
 
function mostrarPergunta() {
    document.getElementById("pergunta").textContent = perguntas[i];
 
    document.getElementById("numero").textContent =
        "Pergunta " + (i + 1) + " de " + perguntas.length;
}
 
function responder() {
    let resposta = document.getElementById("resposta").value;
 
    if (resposta === "") {
        alert("Escolha uma resposta!");
        return;
    }
 
 
    if (resposta === "sim") {
        respostas.push({
            pergunta: perguntas[i],
            resposta: resposta
        });
    }
 
    i++;
 
 
    document.getElementById("resposta").value = "";
 
    if (i < perguntas.length) {
        mostrarPergunta();
    } else {
        resultado();
    }
}
 
function resultado() {
    document.getElementById("pergunta").textContent =
        "Interrogatório concluído!";
 
    document.getElementById("numero").textContent =
        "Todas as perguntas foram respondidas.";
 
    document.getElementById("resposta").style.display = "none";
 
    document.querySelector("button[onclick='responder()']").style.display =
        "none";
 
    let totalSim = respostas.length;
 
    document.getElementById("resultado").textContent =
        "Total de respostas Sim: " + totalSim;
 
    console.log("Respostas Sim:", respostas);

    if(totalSim <5){
        document.getElementById("resultado").textContent =
        "Inocente";
    } else if (totalSim =5){
         document.getElementById("resultado").textContent =
        "Suspeito "
    } else if( totalSim>=6 && totalSim<=8){
         document.getElementById("resultado").textContent =
        " Cúmplice "
    } else{
         document.getElementById("resultado").textContent =
        "Culpado"
    }
}
 
function reiniciar() {
    location.reload();
}
 