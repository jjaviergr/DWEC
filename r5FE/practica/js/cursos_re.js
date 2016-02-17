var Cursos_R = new Array();
var campos_cursos_r = [];
function nuevo_curso()
{
    var n = document.getElementById("cr");
    var inputs = n.getElementsByTagName("input");
    // var textsa=n.getElementsByTagName("textarea");
    var cad = "";
    var campos = campos_cursos_r;

    for (var i = 0; i < inputs.length; i++)
    {
        if ((inputs[i].type === "text") || (inputs[i].type === "date"))
        {
            campos.push(inputs[i].id);
            cad += inputs[i].value + ";";
        }
    }
//    for(var i=0;i<textsa.length;i++)
//    {        
//        campos.push(textsa[i].id);
//        cad+=textsa[i].value+";";
//    }


    Cursos_R.push(cad);
    limpiar_cursos_r();
    imprime_Cursos_R();
}

function limpiar_cursos_r()
{
    for (var i = 0; i < campos_cursos_r.length; i++)
    {
        document.getElementById(campos_cursos_r[i]).value = "";
    }
}

function imprime_Cursos_R()
{
    var cadena = "";

    for (var i = 0; i < Cursos_R.length; i++)
    {
        c = Cursos_R[i];
        cs = c.split(";");

        for (var j = 0; j < cs.length-1; j++)
        {
            cadena += campos_cursos_r[j] + "=" + cs[j] + " ";
        }
        cadena += "<br>";

    }
    alert(cadena);
}

