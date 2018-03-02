function Mostrar()
{

	var resultado;
	var primero;
	var segundo;

	primero=prompt("ingrese primer numero");
	
	segundo=prompt("ingrese el segundo numero");
	

	if(primero==segundo)
	{
		resultado=(primero+segundo);
		document.write(resultado);
	}
	else
	{
		primero=parseInt(primero);
		segundo=parseInt(segundo);
		if(primero>segundo)
		{
			mayores=(primero*segundo);
			document.write(mayores);
		}
		else
		{
			menores=(primero-segundo);
			document.write(menores);
		}

	}




}
