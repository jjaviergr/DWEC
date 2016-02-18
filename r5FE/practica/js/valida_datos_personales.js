



function validar_estado_civil()
{
    var s = document.getElementById("s_estado");
    return is_select_selected(s);

}

function validar_intervalo_fechas(f1, f2)
{
    alert(f1.length + " " + f2.length);
    alert(f1 + " " + f2);
    if ((f1.length !== 0) && (f2.length !== 0))
    {
        alert("ok1");
        if (navigator.userAgent.indexOf("Chrome") !== -1)
        {
            alert("ok2");
            var c1 = f1.split("-");
            f1 = c1[2] + "/" + c1[1] + "/" + c1[0];
            alert(f1);
            var c2 = f2.split("-");
            f2 = c2[2] + "/" + c2[1] + "/" + c2[0];
            alert(f2);
        }

        var ff1 = new Date(c1[2], c1[1], c1[0]);

        var ff2 = new Date(c2[2], c2[1], c2[0]);
        //alert(ff1.toString() + " " + ff2.toString());

        if (ff1 < ff2)
        {
            //alert('buena');
            return true;
        }
    }
    return false;
}


function validar_lugar_nacimiento(v)
{
    return comprueba_si_no_digitos(v);
}


function validaTelefono(valor)
{
    if (/(\+?\d{2,3})?(\d{3}-\d{6})/.test(valor) || /(\+?\d{2,3})?(\d{9})/.test(valor))
    {
        return true;
    }

    return false;
}

function validar_correo_electronico(v)
{

    if ((/\w+[^+/%&]@\w+[^+/%&]\.\w{3}/.test(v)))
    {
        //alert ('bueno');
        return true;
    }
    //alert ('malo');
    return false;
}


function validar_nombres(v)
{
    comprueba_si_no_digitos(v)
}

function validar_direccion(v)
{
    comprueba_si_no_vacio(v);
}

function valida_fecha_nacimiento(cad_fecha)
{
    var fecha = cad_fecha;

    //var fecha = document.getElementById("f_nac").value;
    if (comprobar_si_f_actual_menor_f_nacimiento(cad_fecha))
    {
        fecha = cad_fecha;
        
        if (navigator.userAgent.indexOf("Chrome") !== -1)
        {           
            var cadena = fecha.split("-");
            fecha = cadena[2] + "/" + cadena[1] + "/" + cadena[0];
        } 
        else
        {
            //if (navigator.userAgent.indexOf("Firefox") !== -1)
        }
        if ((/\d{1,2}\/\d{1,2}\/\d{4}/.test(fecha)))
        {
            var cadena = fecha.split("-");
            var d = Number(cadena[0]);
            var m = Number(cadena[1]);
            var y = Number(cadena[2]);
            if (!(d < 0 || d > 31 || m < 1 || m > 12 || y < 0))
            {
                return true;
            }
        }
    }    
    return false;
}

function borra_poblaciones()
{
    var select = document.getElementById("select_poblaciones");
    //var options=select.getElementsByTagName("option");
    //alert ("Elementos con tag option en select de poblaciones :"+options.length);


    while (select.hasChildNodes())
    {
        select.removeChild(select.firstChild);
    }
    //alert ("option"+options.length);
}


function comprobar_si_f_actual_menor_f_nacimiento(fecha)
{
    var fecha;
    
    if (navigator.userAgent.indexOf("Chrome") !== -1)
    {
        var cadena = fecha.split("-");
        fecha = cadena[2] + "/" + cadena[1] + "/" + cadena[0];
    }

    fecha = new Date(fecha);
    
    var f_hoy = new Date();
    if (fecha < f_hoy)
    {
        //alert('buena');
        return true;
    } else
    {
        //alert('mala');
        return false;
    }
}




