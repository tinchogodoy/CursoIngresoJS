function Mostrar()
{
	var primerNumero;
	var segundoNumero;
	var resultado

	primerNumero=prompt("Ingrese el primer numero");
	segundoNumero=prompt("Ingrese el segundo numero");

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	if(primerNumero==segundoNumero)
	{
		resultado=(primerNumero*segundoNumero);
		document.write(resultado);
	}	
	else
	{
		if(primerNumero>segundoNumero)
		{
			resultado=(primerNumero-segundoNumero);
			document.write(resultado);

		}
		else
		{
			resultado=(primerNumero+segundoNumero);
			document.write(resultado);
		}

	}


}
