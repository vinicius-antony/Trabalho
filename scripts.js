(function () {
    var NumeroSorteado = Math.floor(Math.random() * 10) + 1;
    var tentativas = 2;
    var jogo = true;

    function tela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
    }

    document.getElementById('formularioSorteio').addEventListener('submit', function (event) {
        event.preventDefault();
        if (!jogo) {
            return;
        }

        var chute = parseInt(document.getElementById('chute').value);
        if (isValidGuess(chute)) {
            processGuess(chute);
            dicas(chute);
        } else {
            tela('p', "Por favor, insira um número entre 1 e 10.");
        }
        document.getElementById('chute').value = '';
    });

    document.getElementById('reiniciar').addEventListener('click', function () {
        reiniciarJogo();
    });


    function isValidGuess(chute) {
        return !isNaN(chute) && chute >= 1 && chute <= 10;
    }

    function processGuess(chute) {
        if (chute === NumeroSorteado) {
            Vitoria();
        }
        else {
            tentativas--;
            if (tentativas === 0) {
                Derrota();
            } else {
                Reiniciar();
            }
        }
    }

    function dicas(chute) {
        if (chute > NumeroSorteado) {
            tela('p', "O número é menor", "Informacao.png");
        }
        else {
            tela('p', "O número é maior", "Informacao.png");
        }
    }

    function Vitoria() {
        tela('p', "Você acertou!", "Sucesso.avif");
        document.getElementById("Imagem").src = "Imagens/Caveira 1.png";
        endGame();
    }

    function Derrota() {
        tela('p', "Você errou! O número era: " + NumeroSorteado, "Erro.png");
        document.getElementById("Imagem").src = "Imagens/Esqueleto Perdeu.png";
        endGame();
    }

    function Reiniciar() {
        tela('p', "Tente novamente. Restam " + tentativas + " tentativa(s).", "Aviso.avif");
    }

    function endGame() {
        jogo = false;
        document.getElementById('chute').disabled = true;
        document.getElementById('submit').disabled = true;
        document.getElementById('reiniciar').disabled = false;
    }

    function reiniciarJogo() {
        NumeroSorteado = Math.floor(Math.random() * 10) + 1;
        tentativas = 2;
        jogo = true;
        document.getElementById('chute').disabled = false;
        document.getElementById('submit').disabled = false;
        document.getElementById('reiniciar').disabled = true;
        document.getElementById('chute').value = '';
        location.reload();
    }

    document.getElementById('reiniciar').disabled = true;
})();
