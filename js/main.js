function actualizarHora()
{
    let tiempo = new Date();
    let hora = tiempo.getHours().toString().padStart(2, "0");
    let minutos = tiempo.getMinutes().toString().padStart(2, "0");
    let segundos = tiempo.getSeconds().toString().padStart(2, "0");

    if(parseInt(hora) >= 12)
        document.getElementById("tiempo").innerHTML = `${hora}:${minutos}:${segundos} PM<br><br>Baja California, MX`;
    else document.getElementById("tiempo").innerHTML = `${hora}:${minutos}:${segundos} AM<br><br>Baja California, MX`;



}

actualizarHora();

setInterval(actualizarHora, 1000); 