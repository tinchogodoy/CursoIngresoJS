function Mostrar()
{

	var contadorDivisores=0;
	var numero;


	numero=prompt("ingrese un numero");
	numero=parseInt(numero);
	

	for (var i = 0; i <= numero; i++) {
		
		

		if(numero%i==0)
		{
			
			contadorDivisores++;
		}
	}
		
	if(contadorDivisores>2)
	{
	alert(" NO ES PRIMO");
	
	} 
	else 
	{
	alert("Es PRIMO");
	}
}//FIN DE LA FUNCIÓN