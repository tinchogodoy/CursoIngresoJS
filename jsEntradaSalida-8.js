/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var a;
	var b;
	var n;

	a=document.getElementById('numeroDividendo').value;
	b=document.getElementById('numeroDivisor').value;

	a=parseInt(a);
	b=parseInt(b);
	n=(a%b);//saco el resto de la division con %

	alert ("El resto es "+n+".");

}
