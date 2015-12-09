  function ej4(){
  var animales="Raton,Bufalo,Tigre,Gato,Dragon,Serpiente,Caballo,Cabra,Mono,Gallo,Perro,Jabali";
           cfecha=prompt("Pon Fecha Nacimiento(dd/mm/yyyy ))");
           //cfecha="02/11/1976";
           var fecha=new Date(cfecha);
           var year=fecha.getFullYear();
           var pos=year % 12;
           var contador=1;
           var tuanimal="";
           for (i=0;(i<animales.length) ;i++)
           {
               if (animales.charAt(i)==',')
                  contador++;
               if (contador==pos)
                  tuanimal += animales.charAt(i);
               if (contador>pos)
                   break;
           }           
           document.write(tuanimal.replace(",",""));


  }