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
});
var personajes=[["../imagenes/respersonajes/3c69e4e4876b79ed0c7ffba781786349.png","Chris Redfield (クリス・レッドフィールド Kurisu Reddofīrudo) es un personaje ficticio de la serie de videojuegos Resident Evil de género survival horror desarrollados por Capcom. Hermano de Claire Redfield, compañero de Jill Valentine, Barry Burton, Rebecca Chambers, Sheva Alomar, y rival de Albert Wesker."],
				["../imagenes/respersonajes/evelin.jpg","Eveline, cuyo nombre en clave es E-001, era un ser humano genéticamente modificado concebido como parte de la próxima generación de investigaciones sobre armas biológicas, dirigido por un fabricante no identificado de B.O.W., diseñado para eliminar enemigos sin necesidad de combatir. Como resultado de la fusión de una bacteria anómala en su genoma durante la etapa embrionaria, obtuvo la capacidad de controlar las mentes de las personas que entraron en contacto con ella. Eveline fue la única en ser el primer arma biológica de Tipo-E, así como su obsesión enfermiza por crear una familia que satisfaga sus propias necesidades."],
				
				["../imagenes/respersonajes/jack.jpg","Jack Baker es un personaje y antagonista de Resident Evil 7 .Él tiene una esposa llamada Marguerite Baker y un hijo llamado Lucas Baker. Jack tiene un aspecto de un campesino de alrededor de 60 años, este hace aparición por primera vez en RE7 al poco tiempo de iniciar el juego, se presenta junto a su familia durante una cena en honor a Ethan, durante esta llega a atacar a su hijo Lucas y obliga a Ethan a comer lo que parece ser alimentos echados a perder, tiende a ser un enemigo recurrente durante las primeras horas de juego, actuando de cierta manera como un Nemesis al perseguirnos por toda la casa, la primera batalla se da lugar en el garaje de la primera casa, donde tras asesinar a un policía empieza una batalla en la cual este trata de matarnos"],
				["../imagenes/respersonajes/etan.jpg","Nació en 1984 y de adulto conoció a una mujer llamada Mia[1] con el tiempo se volvieron novios y en 2011 se casaron, convirtiéndola en su esposa como a tomar su apellido, ellos decidieron vivir en Texas donde vivieron felizmente.[2] Durante su relación, Ethan preguntaba sobre el trabajo de Mia, ignorando que trabajaba para Las Conexiones que se dedica a la fabricación y producción de Bio Organic Weapon (B.O.W.), ella siempre le mentía causando que empezara a desconfiar en ella y que afectaba en su relación."],
				["../imagenes/respersonajes/mia.jpg","Nació en 1984 y de adulto conoció a una mujer llamada Mia[1] con el tiempo se volvieron novios y en 2011 se casaron, convirtiéndola en su esposa como a tomar su apellido, ellos decidieron vivir en Texas donde vivieron felizmente.[2] Durante su relación, Ethan preguntaba sobre el trabajo de Mia, ignorando que trabajaba para Las Conexiones que se dedica a la fabricación y producción de Bio Organic Weapon (B.O.W.), ella siempre le mentía causando que empezara a desconfiar en ella y que afectaba en su relación."]]; 

function ver(x){
document.getElementById("personajes").src=personajes[x][0];
	document.getElementById("personajestxt").innerHTML=personajes[x][1];
}