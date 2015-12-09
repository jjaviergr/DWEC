  function ej6(){
            var base,altura,area,perimetro;
            var lado1,lado2;
            var radio;
            
            
            var figuras="Triangulo,rectángulo,circulo,pentágono,hexágono";
            var cadena="";
            
            
                        
            var resultado=0;
            
            
            var contador=2;
            
            for (i=0;i<figuras.length;i++)
            {
                if (figuras.charAt(i)==",")
                {
                    cadena+="\n"+contador+".";
                    contador++;
                }
                else
                {
                    cadena+=figuras.charAt(i);
                }
            }
            
            var eleccion=prompt("Escoge un numero \n1."+cadena);
            //document.write(isNaN(eleccion)==false);
            if (isNaN(eleccion)==false)
            {   document.write(eleccion);
                switch(eleccion)
                {
                    case "1":base=prompt("Introduce base triangulo ");
                             altura=prompt("Introduce altura triangulo ");
                             base=parseInt(base);
                             area=base*altura/2;
                             var basec=Math.pow(base,2);
                             var alturac=Math.pow(altura,2);
                             
                             var suma=basec+alturac;
                             var raiz=Math.sqrt(suma);
                             
                             var otra_suma=parseInt(base)+parseInt(altura)+raiz;
                             
                             perimetro=otra_suma;break;
                    case "2":lado1=prompt("Introduce un lado del rectangulo");
                             lado2=prompt("Introduce otro lado del rectangulo");
                             perimetro=2*parseInt(lado1) + 2*parseInt(lado2);
                             area=parseInt(lado1)*parseInt(lado2);break;
                    case "3":radio=prompt("Introduce radio de circulo ");          
                             perimetro=2*(Math.PI)*parseInt(radio);
                             area=2*(Math.PI)*Math.pos(radio,2);break;                             
                    case "4":lado1=prompt("Introduce lado de pentagono ");
                             perimetro=5*parseInt(lado1);
                             area=5*lado1/(4*Math.atan(36));break;
                    case "5":lado1=prompt("Introduce lado de hexagono ");
                             perimetro=6*lado1;
                             var apotema=Math.sqrt(Math.pow(lado1,2)-Math.pow((lado1/2),2));
                             area=perimetro*apotema/2;break;         
                   
                    default:;
                }
            }
            
            document.write("<p>El perimetro es :"+perimetro+"</p>");
            document.write("<p>El area es :"+area+"</p>");
  }
