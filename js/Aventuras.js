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
var personajes=[["../imagenes/VIDEOJUEGOS/UNCHARTED.jpg","Uncharted: El tesoro de Drake (en inglés Uncharted: Drake's Fortune), es un videojuego de acción y aventura. Desarrollado por la empresa Naughty Dog, y publicado por Sony Computer Entertainment para la consola PlayStation 3. Una continuación para el juego fue lanzada el 8 de noviembre de 2007, en PlayStation Network. Aunque en EE.UU. se fijó fecha para el 19 de noviembre, fue lanzado el día 16 en unas áreas seleccionadas."],
				
				["../imagenes/VIDEOJUEGOS/THELEGEND.jpg","The Legend of Zelda (ゼルダの伝説 Zeruda no Densetsu?) es una serie de videojuegos de acción-aventura creada por los diseñadores japoneses Shigeru Miyamoto y Takashi Tezuka,1 y desarrollada por Nintendo, empresa que también se encarga de su distribución internacional. Su trama por lo general describe las heroicas aventuras del joven guerrero Link, que debe enfrentarse a peligros y resolver acertijos para ayudar a la Princesa Zelda a derrotar a Ganondorf o Ganon (Dependiendo de su forma)y salvar su hogar, el reino de Hyrule."],
				["../imagenes/VIDEOJUEGOS/MAXPAYNE.jpg","Max Payne es un videojuego de disparos en tercera persona y entorno 3D desarrollado para Microsoft Windows por la empresa finlandesa Remedy Entertainment, escrito por Sam Lake, producido por 3D Realms y publicado por Gathering of Developers en julio de 2001. El juego también fue llevado a otras plataformas como Xbox, PlayStation 2, Macintosh y Game Boy Advance. También se tenía que planificar una versión para Dreamcast, pero se canceló por razones que se desconocen."],["../imagenes/VIDEOJUEGOS/DARKSOULS.jpg","Dark Souls (ダークソウル Dāku Souru?) es un videojuego de rol de acción, desarrollado por la empresa From Software para las plataformas PlayStation 3, Xbox 360 y Microsoft Windows, distribuido por Namco Bandai Games. Anteriormente conocido como Project Souls, es el segundo videojuego de la serie Souls. Su lanzamiento fue el 22 de septiembre de 2011 en Japón, 4 de octubre en Norteamérica, 6 de octubre de 2011 en Australasia y 7 de octubre de 2011 en Europa. El 24 de agosto de 2012, se lanzó la edición Prepare to Die para PC, presentando contenido adicional previamente inaccesible para los usuarios de PlayStation 3 y Xbox 360. El 23 de octubre de 2012, el contenido adicional de la versión PC fue publicado como contenido descargable para consolas bajo el título Artorias del Abismo. Dark Souls tiene lugar en el reino ficticio de Lordran. Los jugadores toman el papel de un personaje humano no-muerto que ha sido elegido para realizar un peregrinaje para descubrir el destino de los no-muertos. El argumento de Dark Souls se va contando fundamentalmente a través de descripciones de objetos del juego, y diálogos con personajes no jugables (PNJs). Los jugadores deben ir reuniendo pistas para poder entender la historia. Dark Souls se labró un gran reconocimiento por su extenuante dificultad e implacable desafío. El mundo de juego está lleno de armas, armaduras y objetos consumibles que tienen como objetivo ayudar al jugador durante su viaje."]];

function ver(x){
document.getElementById("personajes").src=personajes[x][0];
	document.getElementById("personajestxt").innerHTML=personajes[x][1];
}