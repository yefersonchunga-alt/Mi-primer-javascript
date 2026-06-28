let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 3;
let numeroUsuario;

console.log("Juego iniciado por Yeferson");
console.log("Debes adivinar un número del 1 al 10");

while (intentos > 0) {
    numeroUsuario = Number(
        prompt(`Adivina el número del 1 al 10. Tienes ${intentos} intentos:`)
    );

    console.log(`Yeferson ingresó el número: ${numeroUsuario}`);

    if (numeroUsuario === numeroSecreto) {
        alert(`¡Correcto! Adivinaste el número ${numeroSecreto}`);
        console.log(`¡Yeferson ganó! El número secreto era ${numeroSecreto}`);
        break;
    } else if (numeroUsuario < numeroSecreto) {
        alert("El número secreto es mayor");
        console.log("El número ingresado es menor que el número secreto");
    } else {
        alert("El número secreto es menor");
        console.log("El número ingresado es mayor que el número secreto");
    }

    intentos--;
}

if (numeroUsuario !== numeroSecreto) {
    alert(`Perdiste. El número secreto era ${numeroSecreto}`);
    console.log(`Yeferson perdió. El número secreto era ${numeroSecreto}`);
}