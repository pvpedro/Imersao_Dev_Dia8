var carta1 = {
    nome: "Call Of Duty: Warzone",
    imagem: "personagem-jogos/callofdutywarzone.jpg",
    atributos: {
        ataque: 10,
        defesa: 7,
        magia: 3
    }
};

var carta2 = {
    nome: "League of Legends",
    imagem: "personagem-jogos/leagueoflegends.jpg",
    atributos: {
        ataque: 3,
        defesa: 6,
        magia: 10
    }
};

var carta3 = {
    nome: "Paladins",
    imagem: "personagem-jogos/paladins.jpg",
    atributos: {
        ataque: 4,
        defesa: 5,
        magia: 7
    }
};

var carta4 = {
    nome: "Counter Strike",
    imagem: "personagem-jogos/counterstrike.jpg",
    atributos: {
        ataque: 9,
        defesa: 7,
        magia: 3
    }
};

var carta5 = {
    nome: "PlayerUnknown's",
    imagem: "personagem-jogos/pubg.jpg",
    atributos: {
        ataque: 9,
        defesa: 6,
        magia: 2
    }
};

var cartas = [carta1, carta2, carta3, carta4, carta5];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 5);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 5);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 5);
    }
    cartaJogador = cartas[numeroCartaJogador];
    // cartaJogador = cartas[4];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador()
    excluirCartaMaquina()
}

function obtemAtributosSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++ ) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributosSelecionado();
    var divResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>Venceu</p>";

    } else if (valorCartaMaquina > valorCartaJogador) {
        htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado; 

    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnSortear").disabled = false;
    exibirCartaMaquina()
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' id='btnCarta' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class=carta-subtitle>${cartaJogador.nome}</p>`

    divCartaJogador.style.color = "green";
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
    
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class=carta-subtitle>${cartaMaquina.nome}</p>`

    divCartaMaquina.style.color = "green";
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function excluirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = 'url(img/capa.jpg)'
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    divCartaMaquina.innerHTML = moldura + "</div>"
}