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



/**
 * Dice si una estructura tipo coleccion esta vacia
 * @param {type} t
 * @returns {Boolean}
 */
function Arr_no_es_vacio(t)
{
    if (t.length === 0)
    {
        return false;
    }
    return true;
}

/**
 * Devuelve si se ha seleccionado algún option de un select.
 * @param {type} s
 * @returns {Boolean}
 */
function is_select_selected(s)
{
    if (s.selectedIndex!==-1)
        return true;
    else
        
    return false;
}

/**
 * Lee el contenido del fichero de texto suministrado por un 
 * input type='file'. La salida puede ser un texbox o texarea
 * 
 * @param {type} files
 * @returns {undefined}
 */
function processFiles(files) {
    var file = files[0];

    var reader = new FileReader();

    reader.onload = function (e) {

        var output = document.getElementById("contenido_fichero");
        output.value = e.target.result;
    };
    reader.readAsText(file);
}

function comprueba_si_no_digitos(s)
{
    if (/\D+/.test(s))
    {
        return true;
    }
    return false;
}

function comprueba_si_no_vacio(s)
{
    if (/\w+/.test(s))
    {
        return true;
    }
    return false;
}
