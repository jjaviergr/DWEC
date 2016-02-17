var Ainfo_acad = new Array();
function nuevo_merito()
{
    var cad = "";
    cad += document.getElementById("nombre_acad").value + ";";
    cad += document.getElementById("titulo_obt").value + ";";
    cad += document.getElementById("fi_acad").value + ";";
    cad += document.getElementById("ff_acad").value + ";";
    cad += document.getElementById("coment_acad").value + "<br>";
    Ainfo_acad.push(cad);
    limpiar_info_acad();
    imprime_cursos();
}

function limpiar_info_acad()
{
    document.getElementById("nombre_acad").value = "";
    document.getElementById("titulo_obt").value = "";
    document.getElementById("fi_acad").value = "";
    document.getElementById("ff_acad").value = "";
    document.getElementById("coment_acad").value = "";
}

function imprime_cursos()
{
    var cadena = "";
    var campos = ["Nombre de la Intitución", "Titulo Obtenido",
        "Fecha Comienzo", "Fecha Fin", "Comentarios"];
    alert(Ainfo_acad.length);
    for (var i = 0; i < Ainfo_acad.length; i++)
    {
        c = Ainfo_acad[i];
        cs = c.split(";");

        for (var j = 0; j < cs.length; j++)
        {
            cadena += campos[j] + "=" + cs[j];
        }


    }
    alert(cadena);
}

