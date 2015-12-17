     function ej2(){
     //a
           var cadena=prompt("Introduce un cadena :");
           // var cadena="aAeEoOuU";
           //b
           if (typeof cadena ==="string")
           {
               cadena=cadena.replace(",",".");
               document.write("<br>b)"+cadena);
           }
           else
           {
               document.write("b)Esta cadena no es un número");
           }
           
           //c
           longitud=cadena.length;
           mitad=longitud/2;
           document.write("<br>c)"+cadena.slice(0,mitad));
           //d
           document.write("<br>d)"+cadena.charAt(cadena.length-1));
           //e
           var ultimo="";
           var cadena2="";
           for (i=0 ;i < cadena.length; i++)
           {            
               if (cadena.charAt(i)!=ultimo)
               {
                   cadena2+=cadena.charAt(i);
                  
               }              
               ultimo=cadena.charAt(i);         
           }
           document.write("<br>e)"+cadena2);     
          
         
           //f
           ultimo="";
           cadena2="";
           for (i=0; i <cadena.length; i++)
           {
               if (cadena.charAt(i)===cadena.charAt(i).toUpperCase())
               {
                   cadena2+=cadena.charAt(i).toLowerCase();
               }
               else    
               {
                  cadena2+=cadena.charAt(i).toUpperCase();
               }
               
           }
           document.write("<br>f)"+cadena2);

     }