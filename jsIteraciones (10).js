function Mostrar()
{        //INCOMPLETO!!!!!!!!!!!

	var contador=0;
	var numero;
	var acumulaPositivos;
	var acumulaNegativos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorPares;
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("ingrese un numero");
	    numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero=prompt("Error! ingrese un numero");
			numero=parseInt(numero);
		}

		if(numero>0)
		{
			contadorPositivos++;
			acumulaPositivos+=numero;

		}
		else
		{
			if(numero<0)
			{
				contadorNegativos++;
				acumulaNegativos+=numero;
			}
			else
			{

			}		



		}	

		respuesta=prompt("presione no para salir");



	
	}

	document.write(contadorPositivos);
	document.write(contadorNegativos);


}//FIN DE LA FUNCIÓN