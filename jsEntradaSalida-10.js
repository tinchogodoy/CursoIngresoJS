/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var a;//
	var n;

	a=document.getElementById('importe').value;
	//del Id de la pagina tomo el valor
	a=parseInt(a);//vuelvo el valor string a un numero entero.
	n=(a*0.75) //calculo el 25% del valor a y se lo resto a "a"

	document.getElementById('resultado').value=(n);
//muestro en id=resultado (la barra resultado de la pagina) el resultado

}
