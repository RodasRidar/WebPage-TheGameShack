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

var personajes=[["../imagenes/respersonajes/5de6bc7602b80.jpeg","Batman es un personaje jugable en Injustice: Gods Among Us e Injustice 2. Dentro de la categoría de personajes del juego, es clasificado como un Personaje con Gadgets. Su Baticueva y su Mansión se presentan como escenarios de combate dentro del juego."],
				["../imagenes/respersonajes/superman.jpg","Clark Joseph Kent, mejor conocido como Superman, es un personaje disponibles en los videojuegos Injustice: Gods Among Us e Injustice 2. Él está clasificado como un Power User. El cuartel general del hombre de acero, la Fortress of Solitude, también aparece como un escenario en el videojuego."],
				
				["../imagenes/respersonajes/Injustice2Supergirl.jpg","De niña, Kara Zor-El fue testigo de la devastación de Krypton antes de ser enviada a la Tierra en una misión para proteger a su primo bebé, Kal-El. Al llegar a la Tierra décadas demasiado tarde, descubrió que Kal adulto había sido encarcelado, debido a sus horribles acciones como el Alto Consejero del Régimen en los últimos cinco años. Todavía decidida a proteger a su familia y su legado, Kara luchará contra los enemigos de su primo como Supergirl."],
				["../imagenes/respersonajes/Injustice2-BRAINIAC-wallpaper-MOBILE-53265.jpg","Brainiac es un genio megalómano que recorre el universo, reuniendo conocimiento para aumentar su destreza intelectual y científica. Obsesionado con establecer su superioridad, Brainiac capturó las ciudades más grandes de Krypton, luego erradicó lo que quedaba ... o eso creía. Los relatos del  último hijo de Krypton han llegado muy lejos entre las estrellas. Ahora, el Coleccionista de mundos viene a la Tierra para terminar su acumulación de Krypton y descubre un nuevo mundo digno de su colección."],
				["../imagenes/respersonajes/Harley-Quinn-I2.png","Harley Quinn es un personaje disponible en los videojuegos Injustice: Gods Among Us e Injustice 2. Usa una variedad de armas, desde un martillo enorme hasta cajas de regalo con trampas explosivas. Por lo tanto, ella es un Gadget User."]]; 

function ver(x){
document.getElementById("personajes").src=personajes[x][0];
	document.getElementById("personajestxt").innerHTML=personajes[x][1];
}