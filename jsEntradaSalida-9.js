/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var a;//
	var n;

	a=document.getElementById('sueldo').value;
	//b=document.getElementById('resultado').value;

	a=parseInt(a);
	//b=parseInt(b);
	n=(a*1.1);//calculo el 10% del valor de "a"

	document.getElementById('resultado').value=(n);
//muestro en id=resultado (la barra resultado de la pagina) el resultado


}
