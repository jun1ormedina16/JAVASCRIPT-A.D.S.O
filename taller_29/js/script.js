function calcularEdad(diaNacimiento, mesNacimiento, anoNacimiento) {
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    const mesActual = fechaActual.getMonth() + 1; 

    const anoActual = fechaActual.getFullYear();

    let edad = anoActual - anoNacimiento;


    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    } else if (mesActual === mesNacimiento && diaActual >= diaNacimiento) {
        const diasTranscurridos = diaActual - diaNacimiento;
        if (diasTranscurridos > 30) {
            edad++;
        }
    }

    return edad;
}

function calcularTiempoDesdeUltimoCumple(diaNacimiento, mesNacimiento, anoNacimiento) {
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    const mesActual = fechaActual.getMonth() + 1; 
    const anoActual = fechaActual.getFullYear();

    let meses, dias;

    if (mesActual > mesNacimiento || (mesActual === mesNacimiento && diaActual >= diaNacimiento)) {
        
        meses = mesActual - mesNacimiento;
        dias = diaActual - diaNacimiento;
    } else {
        
        meses = (mesActual + 12) - mesNacimiento - 1;
        dias = 30 - (diaNacimiento - diaActual);
    }

    return { meses, dias };
}


const diaNacimiento = parseInt(prompt("Ingresa el día de tu nacimiento:"));
const mesNacimiento = parseInt(prompt("Ingresa el mes de tu nacimiento (1-12):"));
const anoNacimiento = parseInt(prompt("Ingresa el año de tu nacimiento:"));


const edad = calcularEdad(diaNacimiento, mesNacimiento, anoNacimiento);
alert("Tienes " + edad + " años");

const tiempoDesdeUltimoCumple = calcularTiempoDesdeUltimoCumple(diaNacimiento, mesNacimiento, anoNacimiento);
alert("Han pasado " + tiempoDesdeUltimoCumple.meses +  " meses y " + tiempoDesdeUltimoCumple.dias + " días desde tu último cumpleaños"); 
