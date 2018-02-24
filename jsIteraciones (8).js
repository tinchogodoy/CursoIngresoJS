function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta=='si')
	{
		contador=contador+1;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero=prompt("Error! ingrese un numero");
			numero=parseInt(numero);
		}

		if(numero<0)
		{
			negativo+=numero;
		}
		else
		{
			if(numero>0)
			{
				positivo*=numero;
			}
			else
			{
				//numero=prompt("ingrese numero distinto de cero");
			}
		}

     

		respuesta=prompt("para continuar, si");
	}


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN