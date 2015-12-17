function ej1(){

nombre=new String();
palabra=new String();

nombre=prompt("Introduce una palabra :");
palabra=prompt("Introduce una letra");

vector=nombre.split(palabra);

cantidad=vector.length-1
document.write("La cantidad de veces que se repita la palabra "
        +palabra + " es "+cantidad);

   
   }