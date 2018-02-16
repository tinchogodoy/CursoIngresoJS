function Mostrar()
{

var a;

a=document.getElementById('edad').value;

if (a<18)//pregunto si es menor de 18 sino sera adulto
{
	if(a>12)//pregunto si es adolescente sino irá por niño
	{
	alert ("Usted es un adolescente.");	
	}
	else 
	{
	alert ("Usted es un niño.");	
	}
}	
else
{

alert ("Usted es un adulto.");

}	

}//FIN DE LA FUNCIÓN