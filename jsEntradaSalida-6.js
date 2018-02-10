/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{

var a;
var b;
var n;

a=document.getElementById('numeroUno').value;
b=document.getElementById('numeroDos').value;

a=parseInt(a); //Hago que letras (string) sea numero (entero)
b=parseInt(b); // Hago q letra (string) sea numero (entero)
n=(a+b);



alert ("La suma es "+n);


}

