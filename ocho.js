function Mostrar()
{

	var nombre;
	var peso;
	var temp;
	var contador=0;
	var respuesta='ok';
	var masPesado;
	var tempBaja;

	
	while(respuesta=='ok')
	{

		nombre=prompt("ingrese nombre");

		while(!isNaN(nombre))
		{
			nombre=prompt("Vuelva a ingresar el nombre");
		}

		peso=prompt("ingrese peso");
		peso=parseInt(peso);

		while(isNaN(peso)^peso<1)
		{
			peso=prompt("Vuelva a ingresar el peso");
			peso=parseInt(peso);
		}

		temp=prompt("ingrese temperatura ambiente");
		temp=parseInt(temp);

		while(isNaN(temp)||temp<-41||temp>40)
		{
			temp=prompt("Vuelva a ingresar la temperatura");
			temp=parseInt(temp);
		}

		contador++
		respuesta=prompt("para continuar, ok");
	}

	document.write();
}
