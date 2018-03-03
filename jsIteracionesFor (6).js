function Mostrar()
{

	var contadorPares=0;
	var numero;


	numero=prompt("ingrese un numero");
	numero=parseInt(numero);
	

	for (var i = 1; i < numero; i++) {
		
		if(i%2==0)
		{
			contadorPares++;
			console.log(i);
		}
	}



}//FIN DE LA FUNCIÓN