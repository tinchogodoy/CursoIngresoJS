function Mostrar()
{

	var a;
	var estadoCivil;

	a=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value

	if (a<18&&estadoCivil!="Soltero")//pregunto si es menor de 18 y si no es soltero.
	{
		
	alert ("Usted es muy pequeño para NO ser soltero.");	
		
	}	


}//FIN DE LA FUNCIÓN 