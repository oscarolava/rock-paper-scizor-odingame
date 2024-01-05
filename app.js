let playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();


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
    seleccionPlayer = prompt("Ingrese su selección (Roca o Papel o Tijeras): ");

    if (seleccionPlayer.toLowerCase() == "roca") {
        return "Roca"
    } else if (seleccionPlayer.toLowerCase() == "papel") {
        return "Papel"
    } else if (seleccionPlayer.toLowerCase() == "tijeras") {
        return "Tijeras"
    }
}


function playRound(playerSelection, computerSelection) {
    // En esta función va la lógica del juego

    if (playerSelection == computerSelection){
        return "Han empatado este juego"
    } else if (playerSelection == "Roca" && computerSelection == "Papel") {
        return 'Has perdido! ${computerSelection} vence a ${playerSelection}'
    } else if (playerSelection == "Roca" && computerSelection == "Tijeras") {
        return 'Has ganado! ${playerSelection} vence a ${computerSelection}'
    } else if (playerSelection == "Papel" && computerSelection == "Roca") {
        return 'Has ganado! ${playerSelection} vence a ${computerSelection}'
    } else if (playerSelection == "Papel" && computerSelection == "Tijeras") {
        return 'Has perdido! ${computerSelection} vence a ${playerSelection}'
    } else if (playerSelection == "Tijeras" && computerSelection == "Roca") {
        return 'Has perdido! ${computerSelection} vence a ${playerSelection}'
    } else if (playerSelection == "Tijeras" && computerSelection == "Papel") {
        return 'Has ganado! ${playerSelection} vence a ${computerSelection}'
    }
}

console.log(playRound(playerSelection, computerSelection))