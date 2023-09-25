var prueba;
let nombre;
const IVA=1.21;

// comentario una linea

/**
 *  comentario
 *  multilinea
*/



function retornarFecha() {
    let fecha;
    fecha = new Date();
    var cadena = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
    return cadena;
}

function retornarHora() {
    let fecha;
    fecha = new Date();
    var cadena = fecha.getHours() + ':' + fecha.getMinutes();
    return cadena;
}

function retornarFechaHora() {
    var cadena = retornarFecha()+"   -   "+retornarHora();
        return cadena;
}