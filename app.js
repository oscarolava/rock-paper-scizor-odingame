function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

function getComputerChoice() {
    // Tiene que devolver el resultado de la Roca , Tijeras o Papel
    let numeroRandom = getRandomInt(1, 4);
    if (numeroRandom == 1) {
        return "Roca"
    } else if (numeroRandom == 2) {
        return "Tijeras"
    } else {
        return "Papel"
    }
    
  }

  function getPlayerSelection() {
    while (true) {
        let seleccionPlayer = prompt("Ingrese su selección (Roca, Papel o Tijeras): ");

        if (seleccionPlayer !== null) {
            seleccionPlayer = seleccionPlayer.trim().toLowerCase();

            if (seleccionPlayer === "roca" || seleccionPlayer === "papel" || seleccionPlayer === "tijeras") {
                return seleccionPlayer.charAt(0).toUpperCase() + seleccionPlayer.slice(1);
            } else {
                alert("Por favor, ingrese una opción válida (Roca, Papel o Tijeras).");
            }
        } else {
            // El usuario presionó Cancelar o cerró el cuadro de diálogo, manejar según sea necesario.
            // Por ejemplo, puedes regresar null o un valor predeterminado.
            return null;
        }
    }
}


function playRound(playerSelection, computerSelection) {
    // En esta función va la lógica del juego

    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;

    if (playerSelection == computerSelection){
        console.log("Han empatado este juego");
        return [playerScore, computerScore, ++tieScore]
    } else if (playerSelection == "Roca" && computerSelection == "Papel") {
        console.log(`Has perdido! ${computerSelection} vence a ${playerSelection}`);
        return [playerScore, ++computerScore, tieScore]
    } else if (playerSelection == "Roca" && computerSelection == "Tijeras") {
        console.log(`Has ganado! ${playerSelection} vence a ${computerSelection}`);
        return [++playerScore, computerScore, tieScore]
    } else if (playerSelection == "Papel" && computerSelection == "Roca") {
        console.log(`Has ganado! ${playerSelection} vence a ${computerSelection}`);
        return [++playerScore, computerScore, tieScore]
    } else if (playerSelection == "Papel" && computerSelection == "Tijeras") {
        console.log(`Has perdido! ${computerSelection} vence a ${playerSelection}`);
        return [playerScore, ++computerScore, tieScore]
    } else if (playerSelection == "Tijeras" && computerSelection == "Roca") {
        console.log(`Has perdido! ${computerSelection} vence a ${playerSelection}`);
        return [playerScore, ++computerScore, tieScore]
    } else if (playerSelection == "Tijeras" && computerSelection == "Papel") {
        console.log(`Has ganado! ${playerSelection} vence a ${computerSelection}`);
        return [++playerScore, computerScore, tieScore]
    }
}

function game() {
    let pScore = 0;
    let cScore = 0;
    let tScore = 0;

    for (let i = 1; i <= 5; i++) {
        let [roundPScore, roundCScore, roundTScore] = playRound(getPlayerSelection(), getComputerChoice());
        pScore += roundPScore;
        cScore += roundCScore;
        tScore += roundTScore;
    }
    // Falta la lógica para determinar el ganador
    console.log(`Puntuación final:\nJugador: ${pScore}\nComputadora: ${cScore}\nEmpates: ${tScore}`);
    console.log(verificarGanador(cScore, pScore, tScore));
}

function verificarGanador(a, b, c) {
    if (a > b) {
        return "¡La computadora gana!";
    } else if (b > a) {
        return "¡El jugador gana!";
    } else {
        return "¡Es un empate!";
    }
}


game();