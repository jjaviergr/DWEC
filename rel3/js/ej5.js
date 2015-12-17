      
           
           function cuenta(n1,n2)
           {
               contador=0;
               for (i=n1;i<n2;i++)
                   contador++;
               return contador;
           }
       function ej5(){    
          // var fnac=new Date("02-11-1976");
            var fnac=new Date("76,11,2");
            var fhoy=new Date();
            document.write("<br>Fecha de nacimiento :"+ fnac.toLocaleString());
            document.write("<br>Fecha de hoy :"+ fhoy.toLocaleString());
            
            hyear=fhoy.getFullYear();
            fyear=fnac.getFullYear();
            
            hmes=fhoy.getMonth();            
            fmes=fnac.getMonth();
            
            hdia=fhoy.getDate();
            fdia=fnac.getDate();
            
            
            /*
            document.write("<br>"+hdia+" "+hmes+" "+hyear+"<br>");
            document.write("<br>"+fdia+" "+fmes+" "+fyear+"<br>");
            */
            
            var danos,meses,vardias;
            
            if (fyear>hyear) // esto es para un año del futuro.
               danos=cuenta(fyear,100)+hyear;
            else
               danos=cuenta(fyear,hyear);
            
            if (fmes>hmes)
            {
               meses=cuenta(fmes,12)+hmes;
               danos--;
            }
            else
               meses=cuenta(fmes,hmes);

            if (fdia>hdia)
            {
               vardias=cuenta(fdia,30)+hdia;
               meses--;
            }
            else
            {
               vardias=cuenta(fdia,hdia);

            }
                
            document.write("<br><br>Diferencia :<br>Años :"+danos);
            document.write(" Meses :"+meses);
            document.write(" Dias :" +vardias);
            
           
            
            fmim=new Date("76,11,2");
            document.write("<br><br>Diferencia:<br>Fecha milenio :"+ fmim.toLocaleString());
            fnac=new Date("2048,1,1");
            
            
            
            hyear=fmim.getFullYear();
            fyear=fnac.getFullYear();
            
            hmes=fmim.getMonth();            
            fmes=fnac.getMonth();
            
            hdia=fmim.getDate();
            fdia=fnac.getDate();
            /*
            document.write("<br>"+hdia+" "+hmes+" "+hyear+"<br>");
            document.write("<br>"+fdia+" "+fmes+" "+fyear+"<br>");
            */
            
            if (fyear=>hyear)
               danos=cuenta(hyear,fyear);
            else
               danos=cuenta(hyear,100)+fyear;
            
            if (fmes>hmes)
            {
               meses=cuenta(fmes,12)+hmes;
               danos--;
            }
            else
               meses=cuenta(fmes,hmes);

            if (fdia>hdia)
            {
               vardias=cuenta(fdia,30)+hdia;
               meses--;
            }
            else
            {
               vardias=cuenta(fdia,hdia);

            }
                
            document.write("<br>anos :"+danos);
            document.write(" meses :"+meses);
            document.write(" dias :" +vardias);
       }

