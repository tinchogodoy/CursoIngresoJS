function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

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

		acumulador=acumulador+numero;
		respuesta=prompt("para continuar, si");
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN