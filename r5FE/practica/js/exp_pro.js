var Exp_prof = new Array();
var campos_exp_prof=[];
function nueva_exp_prof()
{
    var n=document.getElementById("exp_prof");
    var inputs=n.getElementsByTagName("input");
    var textsa=n.getElementsByTagName("textarea");
    var cad="";
    var campos=campos_exp_prof;
    for(var i=0;i<inputs.length;i++)
    {        
        campos.push(inputs[i].id);
        cad+=inputs[i].value+";";
    }
    for(var i=0;i<textsa.length;i++)
    {        
        campos.push(textsa[i].id);
        cad+=textsa[i].value+";";
    }
    
    
    Exp_prof.push(cad);
    limpiar_exp_pro();
    imprime_Exp_Prof();
}

function limpiar_exp_pro()
{
    for(var i=0;i<campos_exp_prof.length;i++)
    {
        document.getElementById(campos_exp_prof[i]).value="";
    }
}

function imprime_Exp_Prof()
{
    var cadena = "";
    
    for (var i = 0; i < Exp_prof.length; i++)
    {
        c = Exp_prof[i];
        cs = c.split(";");

        for (var j = 0; j < cs.length; j++)
        {
            cadena += campos_exp_prof[j] + "=" + cs[j]+" ";
        }
        cadena+="<br>";

    }
    alert(cadena);
}

