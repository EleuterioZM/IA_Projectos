
let doisJogadoresSelecionado = true;
const opcaoDoisJogadores = document.getElementById('doisJogadores');
const opcaoJogadorVsSistema = document.getElementById('jogadorVsSistema');

opcaoDoisJogadores.addEventListener('change', () => {
    doisJogadoresSelecionado = true;
    reiniciarJogo();
});

opcaoJogadorVsSistema.addEventListener('change', () => {
    doisJogadoresSelecionado = false;
    reiniciarJogo();
});

const tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let jogadorAtual = "X";
const celulas = document.querySelectorAll('.tabuleiro td');

celulas.forEach(celula => {
    celula.addEventListener('click', () => {
        const row = parseInt(celula.dataset.row);
        const col = parseInt(celula.dataset.col);

        if (tabuleiro[row][col] === "" && !fimDeJogo()) {
            tabuleiro[row][col] = jogadorAtual;
            celula.textContent = jogadorAtual;

            if (verificarVitoria(jogadorAtual)) {
                alert(`Parabéns! O jogador ${jogadorAtual} venceu!`);
                reiniciarJogo();
            } else if (tabuleiroCheio()) {
                alert("Empate!");
                reiniciarJogo();
            } else {
                if (!doisJogadoresSelecionado) {
                    jogadaSistema();
                } else {
                    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
                }
            }
        }
    });
});

function verificarVitoria(jogador) {
    // Verificar linhas e colunas
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] === jogador && tabuleiro[i][1] === jogador && tabuleiro[i][2] === jogador) {
            return true; // Linhas
        }
        if (tabuleiro[0][i] === jogador && tabuleiro[1][i] === jogador && tabuleiro[2][i] === jogador) {
            return true; // Colunas
        }
    }

    // Verificar diagonais
    if (tabuleiro[0][0] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][2] === jogador) {
        return true; // Diagonal principal
    }
    if (tabuleiro[0][2] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][0] === jogador) {
        return true; // Diagonal secundária
    }

    return false;
}

function tabuleiroCheio() {
    return tabuleiro.every(row => row.every(cell => cell !== ""));
}

function fimDeJogo() {
    return verificarVitoria('X') || verificarVitoria('O') || tabuleiroCheio();
}

function reiniciarJogo() {
    tabuleiro.forEach(row => row.fill(""));
    jogadorAtual = "X";
    celulas.forEach(celula => celula.textContent = "");
}

function jogadaSistema() {
    if (fimDeJogo()) {
        return;
    }

    let row, col;
    do {
        row = Math.floor(Math.random() * 3);
        col = Math.floor(Math.random() * 3);
    } while (tabuleiro[row][col] !== "");

    tabuleiro[row][col] = "O";
    celulas.forEach(celula => {
        if (parseInt(celula.dataset.row) === row && parseInt(celula.dataset.col) === col) {
            celula.textContent = "O";
        }
    });

    if (verificarVitoria("O")) {
        alert("O sistema venceu!");
        reiniciarJogo();
    } else if (tabuleiroCheio()) {
        alert("Empate!");
        reiniciarJogo();
    }
}
