/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;
var numero;




function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 

	numeroSecreto=Math.floor((Math.random()*101)+1);

	alert("Ya tengo el numero secreto. Adivina el numero!!! ");//alert(numeroSecreto );
	contadorIntentos=0;
	document.getElementById('intentos').value=contadorIntentos;
}

function verificar()
{

	numero=document.getElementById('numero').value;
	numero=parseInt(numero);


	
	contadorIntentos=contadorIntentos+1;
	document.getElementById('intentos').value=contadorIntentos;


	if(numeroSecreto==numero&&numeroSecreto<10)
	{
		
		document.getElementById('intentos').value=contadorIntentos;
		alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos.");
		
	}
	else
	{


		if(numeroSecreto<numero&&numeroSecreto<10)
		{

			alert("Se pasó para llegar al numero secreto");
		}

		
		else
		{
			alert("Falta para llegar al numero secreto");
		}
		if(contadorIntentos>9)
		{
			alert("Se terminaron los intentos. Vuelva a comenzar!")
		}

	}

}