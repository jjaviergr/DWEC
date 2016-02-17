/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/**
 *  Esto es un función que graba una lista de formularios en cookies.
 *  Los nombres de cookie van en 'lista' y coinciden con las 'id' de los form
 * @param {type} lista
 * @returns {undefined}
 */
function Guardar_Lista_en_Cookies(lista)
{

    var cadena = "";
    //alert(lista.length);
    for (var i = 0; i <= lista.length; i++)
    {
        cadena = document.getElementById(lista[i]).value;
        // alert(i+" grabando Textbox "+lista[i]);
        cadena = cadena.replace(";", "\\+");
        //alert ("Despues de replace :"+cadena);       

//        if ((i >= 4) && (i <= 5))
//        {
//            cadena = document.getElementById(lista[i]).checked;
//            // alert(i+" grabando Radio "+lista[i]);
//        }
        //alert ("Antes de replace : "+cadena);
        setCookie(lista[i], cadena, 30);
    }

}

/**
 * Imprime en un alert una lista de cookies con nombres definidos en 'lista'
 * @param {type} lista
 * @returns {undefined}
 */
function myFunctionComprobar(lista)
{
    //var lista = ["nombre", "apellidos", "dni"];
    // alert("comprobando");
    var cadena = "";

    for (var i = 0; i < lista.length; i++)
    {
        cadena = getCookie(lista[i]);

        cadena = cadena.replace("\\+", ";");
        alert(cadena);
    }
}

/**
 * Guarda una cookie con su nombre'cname', valor 'cvalue' y su expiración 'exdays'
 * @param {type} cname
 * @param {type} cvalue
 * @param {type} exdays
 * @returns {undefined}
 */
function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

/**
 * Recupera una cookie
 * @param {type} cname
 * @returns {String}
 */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1);
        if (c.indexOf(name) === 0)
            return c.substring(name.length, c.length);
    }
    return "";
}
/**
 * Recupera a una cookie de nombre 'username'
 * @returns {undefined}
 */
function checkCookie()
{
    var user = getCookie("username");
    if (user !== "")
    {
        alert("Welcome again " + user);
    } else
    {
        alert(user);
    }
}


/************/

function no_es_vacio(t)
{
    if (t.length === 0)
    {
        return false;
    }
    return true;
}

function is_select_selected(s)
{
    //var s = document.getElementById("s_estado");
    var options = s.getElementsByTagName("option");
    var i = 0;

    while ((options[i].selected !== true) && (i < options.length))
    {
        if (options[i].selected === true)
        {
            return true;
        }
        i++;
        return false;
    }
}
