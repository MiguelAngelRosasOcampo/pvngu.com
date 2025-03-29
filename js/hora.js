const $horaLocal = document.getElementById("hora");


function actualizarHora() {
    const hora = new Date();

    let horaActual = hora.getHours().toString().padStart(2, "0");
    let minutosActual = hora.getMinutes().toString().padStart(2, "0");
    let segundosActual = hora.getSeconds().toString().padStart(2, "0");
    
    if(parseInt(horaActual) >= 12)
        $horaLocal.innerHTML = `${horaActual}:${minutosActual}:${segundosActual} PM<br><br>Baja California, MX`;

    else $horaLocal.innerHTML = `${horaActual}:${minutosActual}:${segundosActual} AM<br><br>Baja California, MX`;    
}

actualizarHora();

setInterval(actualizarHora, 1000);
