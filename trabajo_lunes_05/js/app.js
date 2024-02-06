function ValidarNombre() {
    var nombreCelular = document.getElementById("nom1").value;
    const patronombreCelular = /^(Iphone|Huawei|Xiaomi|Redmi|Poco|Motorola|Samsung|Infinix)(\s[A-Za-z0-9\s]+)?$/;
    
    if (patronombreCelular.test(nombreCelular)) {
        alert("¡La marca de celular es " + nombreCelular + " por ende, es correcto");
        return true;
    } else {
        alert("La marca de celular no es válida. Revisa tu ortografia.");
        return false;
    }
}
