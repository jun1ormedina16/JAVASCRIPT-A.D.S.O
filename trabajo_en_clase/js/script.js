function limita(maximoCaracteres) {
    var contrasena = document.getElementById("contrasena");
    if (contrasena.value.length >= maximoCaracteres) {
        return false;
    } else {
        return true;
    }
}

function enviarDatos(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;

    window.location.href = '../html/index.html?nombre=' + encodeURIComponent(nombre);
}
