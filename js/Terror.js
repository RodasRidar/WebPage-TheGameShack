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
var personajes=[["../imagenes/VIDEOJUEGOS/OUTLAST.JPG","Outlast es un videojuego de survival horror en primera persona desarrollado y publicado por Red Barrels Games, una compañía fundada por antiguos miembros del equipo de desarrolladores de otros juegos como Prince of Persia, Assassin's Creed, Splinter Cell y Uncharted.1 Outlast fue publicado el 4 de septiembre de 2013 para la plataforma Microsoft Windows y posteriormente para Xbox One, PlayStation 4 y el 31 de marzo de 2015 para Linux y OS X. Fue lanzado para Nintendo Switch el 27 de febrero de 2018"],
				["../imagenes/VIDEOJUEGOS/OUTLAST2.JPG","Outlast 2 es un videojuego de survival horror en primera persona desarrollado y publicado por Red Barrels Games. Es la secuela del videojuego de 2013 Outlast, y cuenta con un periodista llamado Blake Langermann, junto con su esposa Lynn, vagando por el desierto de Arizona para explorar el asesinato de una mujer embarazada, Jane Doe.1 Por desgracia, Blake y Lynn se separan en un accidente de helicóptero, y Blake tiene que encontrar a su esposa mientras viaja a través de un pueblo habitado por un culto que cree que el final de los días está sobre ellos."],
				
				["../imagenes/VIDEOJUEGOS/SLENDER.JPG","Slender Man fue creado en un hilo del foro de Internet Something Awful iniciado el 8 de junio de 2009, con el objetivo de editar fotografías para que contuvieran entidades sobrenaturales. El 10 de junio de 2009, un usuario con el nombre de Victor Surge (nombre real Eric Knudsen) contribuyó con dos fotos sacadas en 1926 de grupos de niños, a las cuales añadió una figura espectral alta y delgada, vestida con un traje negro y una corbata oscura sin cara alguna. Las entradas previas consistían solamente en fotografías; sin embargo, Surge complementó las suyas con fragmentos de texto, de testigos, describiendo los secuestros de los grupos de niños, y dándole como nombre al personaje «Slenderman»:"],
				["../imagenes/VIDEOJUEGOS/SILENT.JPG","Silent Hill (サイレソトヒル Sairento Hiru?, En español Colina Silenciosa) es un videojuego de survival horror publicado por Konami y desarrollado por Team Silent, un grupo de Konami Computer Entertainment Tokyo. Fue lanzado para PlayStation en Nortamérica en enero de 1999, y en Japón y Europa más tarde ese mismo año. Silent Hill emplea una cámara en tercera persona y entornos tridimensionales en tiempo real; los desarrolladores usaron niebla y oscuridad para disfrazar las limitaciones del hardware. Asimismo, la obra presenta como protagonista a un personaje sin cualidades o destreza física por sobre lo normal, en contraste con títulos anteriores del género.1"]]; 

function ver(x){
document.getElementById("personajes").src=personajes[x][0];
	document.getElementById("personajestxt").innerHTML=personajes[x][1];
}