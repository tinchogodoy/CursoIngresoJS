
function Mostrar()
{

	var base;
	var altura;
	var perimetro;
	var superficie;


	base=document.getElementById('laBase').value;

//base=parseInt(base);

altura=prompt("Ingrese la altura");
//altura=parseInt(altura);

superficie=((base*altura)/2);
perimetro=((base)*3);


alert("EL Perimetro es "+perimetro+" y la sup. es "+superficie)






}
