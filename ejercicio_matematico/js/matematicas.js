const PI=3.14;

function sumar(x1,x2) 
{
    return x1+x2;
}

function restar(x1,x2) 
{
    return x1-x2;
}

function dividir(x1,x2) 
{
    if (x2===0) {
        mostrarErrorDivision();
    }  else {
        return x1/x2;
    }
}

function mostrarErrorDivision() 
{
    console.log("No se puede dividir por cero");
}

function potenciar(ptc, potencia) {
    if (potencia === 0) {
        return 1;
    } else {
        let resultado = ptc;
        for (let i = 1; i < potencia; i++) {
            resultado *= ptc;
        }
        return resultado;
    }
}

exports.sumar=sumar;
exports.restar=restar;
exports.dividir=dividir;
exports.PI=PI;
exports.potenciar=potenciar;
