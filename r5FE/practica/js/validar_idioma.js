var Aidiomas = new Array();
var AnivelI = new Array();
var g_idiomas = ["inglés", "alemán", "español", "francés", "italiano", "chino"];
var g_niveles = ["básico", "avanzado", "nativo"];
function carga_idiomas()
{
    var r = document.getElementById("fidimoas");
    var selects = r.getElementsByTagName("select");
    var o;
    for (var i = 0; i < selects.length; i++)
    {
        if (selects[i].id === "idioma")
        {
            for (var j = 0; j < g_idiomas.length; j++)
            {
                o = document.createElement("option");
                o.innerHTML = g_idiomas[j];
                o.value=g_idiomas[j];
                selects[i].appendChild(o);
            }
        }
    }
}

function carga_niveles()
{
    var r = document.getElementById("fidimoas");
    var selects = r.getElementsByTagName("select");
    for (var i = 0; i < selects.length; i++)
    {
        if (selects[i].id === "nivel_idioma")
        {
            for (var j = 0; j < g_niveles.length; j++)
            {
                var o = document.createElement("option");
                o.innerHTML = g_niveles[j];
                o.value=g_niveles[j];
                selects[i].appendChild(o);
            }
        }
    }
}

function nuevo_idioma()
{
    var r = document.getElementById("fidimoas");
    var selects = r.getElementsByTagName("select");
    for (var i = 0; i < selects.length; i++)
    {
        var s = selects[i];

        if (s.id === "idioma")
        {

            var op = s.getElementsByTagName("option");
           
            for (j = 0; j < op.length; j++)
            {
                if (op[j].selected === true)
                {
                    //alert(op[j].value)
                    Aidiomas.push(op[j].value);
                }
            }

        }
        if (s.id === "nivel_idioma")
        {
            var op = s.getElementsByTagName("option");
            for (j = 0; j < op.length; j++)
            {
                if (op[j].selected === true)
                {                    
                    AnivelI.push(op[j].value);
                }
            }
        }
        
    }

    limpiar_idiomas();
    imprimir_idiomas();
}

function limpiar_idiomas()
{
    var r = document.getElementById("fidimoas");
    var selects = r.getElementsByTagName("select");

    for (var i = 0; i < selects.length; i++)
    {
        var s = selects[i];
        var op = s.getElementsByTagName("option");
        if (op.selected === true)
        {
            op.selected = false;
        }
    }
}

function imprimir_idiomas()
{
    var Vcad = [];
    //alert(Aidiomas.length);
    for (var i = 0; i < Aidiomas.length; i++)
    {
        Vcad.push( "Idioma :" + Aidiomas[i] + " Nivel :" + AnivelI[i]);
    }
    alert("antes "+Vcad[0]);
//    Vcad=quitar_duplicados(Vcad);
    
    
    //alert(Vcad.join());
    return(Vcad.join());
}

//function quitar_duplicados(vector)
//{
//    var a=[];
//    var v=vector.sort;
//    var i=0;
//    
//    while ((i<v.length-1)&&(v.length>1))
//    {
//        if(v[i]===v[i+1])
//        {
//            a.push(v[i+1]);            
//        }
//        else
//        {
//           a.push(v[i]);                  
//        }
//        i++;
//    }
//    
//    alert("a es "+v.length+" a es "+v[0]);
//    return(a);
//}


