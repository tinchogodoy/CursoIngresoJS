function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var resultado;

	numeroUno=prompt("Ingrese el primer numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("Ingrese el segundo numero");
	numeroDos=parseInt(numeroDos);
	numeroTres=prompt("Ingrese el tercer numero");
	numeroTres=parseInt(numeroTres);

	if(numeroUno>numeroDos^numeroDos>numeroTres)
	{
		resultado=(numeroUno);

	}
	else
	{
		if(numeroDos>numeroUno^numeroDos>numeroTres)
		{
			resultado=(numeroDos);
		}
		else
		{
			if(numeroTres>numeroUno^numeroTres>numeroDos)
			{

				resultado=(numeroTres);

			}
			else
			{

			}

			
		}

	}

	document.write(resultado);
}
