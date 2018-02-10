/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


//Declaro las variables afuera "solo variables"
var a
var b
var n

function sumar()
{	
	
a=document.getElementById('numeroUno').value;
b=document.getElementById('numeroDos').value;

a=parseInt(a); //Hago que letras (string) sea numero (entero)
b=parseInt(b); // Hago q letra (string) sea numero (entero)
n=(a+b);//suma

alert ("La suma es "+n);

}

function restar()
{

a=document.getElementById('numeroUno').value;//tomo el valor de la barra del html
b=document.getElementById('numeroDos').value;//tomo el valor de la barra del html

a=parseInt(a); //Hago que letras (string) sea numero (entero)
b=parseInt(b); // Hago q letra (string) sea numero (entero)
n=(a-b);//resta

alert ("La resta es "+n);//Muestro resultado

}

function multiplicar()
{ 
	
a=document.getElementById('numeroUno').value;
b=document.getElementById('numeroDos').value;

a=parseInt(a); //Hago que letras (string) sea numero (entero)
b=parseInt(b); // Hago q letra (string) sea numero (entero)
n=(a*b);//multiplica

alert ("La multiplicacion es "+n);//muestro resultado

}

function dividir()
{
	
a=document.getElementById('numeroUno').value;
b=document.getElementById('numeroDos').value;

a=parseInt(a); //Hago que letras (string) sea numero (entero)
b=parseInt(b); // Hago q letra (string) sea numero (entero)
n=(a/b);//divicion



alert ("La division es "+n);


}

