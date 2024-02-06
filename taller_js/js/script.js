function calculateAndShowInfo() {
    var nombre = document.getElementById('nombre').value;
    var documento = document.getElementById('documento').value;
    var salarioInput = parseFloat(document.getElementById('salario').value);
    var dias = parseInt(document.getElementById('dias').value);
    var horas = parseInt(document.getElementById('horas').value);

    if (isNaN(salarioInput) || isNaN(dias) || salarioInput < 0 || dias < 0) {
        alert('Por favor, ingrese valores válidos para salario y días trabajados.');
        return;
    }

    var salarioPorDia = salarioInput / 30;
    var totalSalario = Math.floor(salarioPorDia * dias);

    var horasTrabajadas = Math.floor(salarioInput / 235);
    var horasExt = horasTrabajadas * 75;
    var horasExtra = Math.floor(horasExt / 100);
    var valorhorasextra = horasExtra + horasTrabajadas;

    var salariot = Math.floor(totalSalario + valorhorasextra);

    var descuentos = Math.floor(salariot * 4);
    var descuentosalud = Math.floor(descuentos / 100);
    var descuentop = Math.floor(salariot * 4);
    var descuentopension = Math.floor(descuentop / 100);

    var salariototal = Math.floor(salariot - descuentopension - descuentosalud);

    alert(
        '\nNombre: ' + nombre + '\nNúmero de documento: ' + documento +
        '\nSalario ingresado: $' + salarioInput + '\nDías Trabajados ' + dias + '\nSalario: $' + totalSalario +
        '\nEl valor de una hora de trabajo es: $' + horasTrabajadas + '\nLas horas extra fueron: ' + horas +
        '\nEl valor de las horas extras trabajadas es: $' + valorhorasextra +
        '\nEl valor de una hora extra es: $' + horasExtra + '\nEl descuento de salud es: $' + descuentosalud +
        '\nEl descuento de pension es: $' + descuentopension + '\nEl total del salario es de: $' + salariototal
    );
}
