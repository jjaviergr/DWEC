function click_check_cursos_realizados()
{
    var r = document.getElementById("cr");
    var e = r.getElementsByTagName("*");
    var check = document.getElementById("ch_cursos");
    
    if (check.checked)
    {
        for (var i = 0; i < e.length; i++)
        {
            if ((e[i].type !== "checkbox"))
            {
                e[i].disabled = true;
            }
        }
    }
    
    if (!check.checked)
    {
        for (var i = 0; i < e.length; i++)
        {
            if ((e[i].type !== "checkbox"))
            {
                e[i].disabled = false;
            }
        }
    }
}
function click_check_exp_prof()
{
    var r = document.getElementById("exp_prof");
    var e = r.getElementsByTagName("*");
    var check = document.getElementById("check_exp");
    
    if (check.checked)
    {
        for (var i = 0; i < e.length; i++)
        {
            if ((e[i].type !== "checkbox"))
            {
                e[i].disabled = true;
            }
        }
    }
    
    if (!check.checked)
    {
        for (var i = 0; i < e.length; i++)
        {
            if ((e[i].type !== "checkbox"))
            {
                e[i].disabled = false;
            }
        }
    }

}

function desactiva(e)
{
    for (var i = 0; i < e.length; i++)
    {
        e[i].disabled = true;
    }
}

function activa(e)
{
    for (var i = 0; i < e.length; i++)
    {
        e[i].disabled = false;
    }
}

function click_check_studios()
{

    var r = document.getElementById("finfo_acad");
    var e = r.getElementsByTagName("*");

    var check = document.getElementById("check_estudios");

    if (check.checked)
    {

        for (var i = 0; i < e.length; i++)
        {
            //console.log(e);
            if (e[i].type !== "checkbox")
            {
                //console.log(e.length);
                e[i].disabled = true;
            }
        }
    }

    if (!check.checked)
    {
        for (var i = 0; i < e.length; i++)
        {
            if (e[i].type !== "checkbox")
            {
                e[i].disabled = false;
            }
        }
    }
}