function Mostrar()
{
	//Genero el número RANDOM entre 0 y 10 
	var nota;

	nota=Math.floor(Math.random() * 11);// random de 0 a 10

	if(nota<4)
	{

	    alert("Vamos, la proxima se puede "+nota);

	}
	else
	{
		if(nota>8)
		{
			alert("EXELENTE "+nota);	
		}
		else
		{	
			alert("APROBÓ "+nota);
		}
	}

}//FIN DE LA FUNCIÓN