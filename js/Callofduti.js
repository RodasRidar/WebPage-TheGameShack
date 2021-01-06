var lista=["../imagenes/baner/baner1.png","../imagenes/baner/baner2.jpg","../imagenes/baner/baner3.jpg","../imagenes/baner/baner4.png"];
var c=0;
var rotacion;
function carrusel(){
	$("#baner").attr("src",lista[c]);
	c++;
	if(c>=lista.length)c=0;
	rotacion=setTimeout("carrusel()",1500);
	
}
$(document).ready(function(){
 carrusel();
	$(".amenu").click(function(){
		var x=$(this).data("x");
		clearTimeout(rotacion);
		rotacion=null;
		c=x;
		carrusel();
	});
	$(".juegos").mouseover(function(){
	$(this).css("transition","all 1.5s ease") 
	$(this).css("transform","rotateY(360deg)") 
	$(this).css("border","solid 2px black")
}); 

$(".juegos").mouseout(function(){
		$(this).css("transition","all 1s ease") 
		$(this).css("transform","rotateY(0deg)") 
		$(this).css("border","solid 0px black") 
		
	});
}); 

var personajes=[["../imagenes/personaje1callofduty.jpg","John Soap MacTavish fue el protagonista escocés de la saga Modern Warfare. Apareció en Call of Duty 4: Modern Warfare como Sargento, sirviendo en el 22do Regimiento del SAS como francotirador, soldado de asalto y experto en demoliciones, y en Call of Duty: Modern Warfare 2 y Call of Duty: Modern Warfare 3 como capitán y comandante de campo de la Fuerza Operativa 141 junto con el capitán John Price, el sargento Gary Roach Sanderson y el teniente Simon Ghost Riley bajo su mando."],
				["../imagenes/personaje2callofduty.jpg","Sargento Paul Jackson era un operador de la 1° Fuerza de Reconocimiento de la USMC y uno de los dos personajes jugables en el Acto 1 de Call of Duty 4: Modern Warfare. El fue también uno de los 30,000 marines que murieron en la explosión nuclear en la ciudad capital provocada por Vladimir Makarov."],
				
				["../imagenes/personaje3callofduty.jpg","El capitán John Price, apodado Bravo Seis, es un oficial del SAS que aparece en Call of Duty 4: Modern Warfare, Call of Duty: Modern Warfare 2 y en Call of Duty: Modern Warfare 3 . Suele llevar puesto un sombrero, y el arma que más utiliza es una carabina M4A1 modificada. Forma parte de la Fuerza Operativa 141 y del 22º regimiento del SAS. 15 años antes de Call of Duty 4: Modern Warfare era teniente."],
				["../imagenes/personaje4callofduty.jpg","asdfsdf"],
				["../imagenes/personaje5callofduty.jpg","fasfasfdsa"]]; 

function ver(x){
document.getElementById("personajes").src=personajes[x][0];
	document.getElementById("personajestxt").innerHTML=personajes[x][1];
}