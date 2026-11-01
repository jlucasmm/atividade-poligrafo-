
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

    respostas.push({
        pergunta: perguntas[i],
        resposta: resposta
    });

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

    let totalSim = 0;

    for (let j = 0; j < respostas.length; j++) {
        if (respostas[j].resposta === "sim") {
            totalSim++;
        }
    }

    let classificacao = "";

    if (totalSim < 5) {
        classificacao = "Inocente";

    } else if (totalSim === 5) {
        classificacao = "Suspeito";

    } else if (totalSim >= 6 && totalSim <= 8) {
        classificacao = "Cúmplice";

    } else {
        classificacao = "Culpado";
    }

    document.getElementById("resultado").textContent =
        "Total de respostas SIM: " + totalSim +
        " | Resultado: " + classificacao;

    console.log("Todas as respostas:", respostas);
    console.log("Total de SIM:", totalSim);
    console.log("Classificação:", classificacao);
}

function reiniciar() {
    location.reload();
}
