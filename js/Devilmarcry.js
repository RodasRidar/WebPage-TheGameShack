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

var personajes=[["../imagenes/dante10.jpg","Dante es un personaje ficticio y el protagonista principal de la serie de videojuegos Devil May Cry, creado y publicado por Capcom. En los primeros cuatro videojuegos, Dante es un mercenario, investigador privado y vigilante de caza de demonios dedicado a exterminarlos a ellos y a otros enemigos sobrenaturales, una misión que sigue en busca de aquellos que mataron a su madre y corrompieron a su hermano."],
				["../imagenes/nero10.jpg","Nerón es un personaje ficticio y uno de los principales protagonistas de la serie de videojuegos Devil May Cry , creada y publicada por Capcom . Apareció por primera vez en Devil May Cry 4 en 2008. Nero es un adolescente que trabaja para la Orden de la Espada; usa sus poderes demoníacos heredados de Sparda para cazar enemigos. En Devil May Cry 4 , Nero conoce a un cazador de demonios llamado Dante , el protagonista principal de la serie, con quien descubre que está relacionado"],
				
				["../imagenes/nico10.jpg","Nico es una artesana experta,que aparece en Devil May Cry 5. Ella es la nueva compañera de Nero y responsable de la creación del Devil Breaker como reemplazo del Devil Bringer, como tambien de nuevas brazos protesicos."],
				["../imagenes/urizen10.jpg","Urizen es un demonio que toma el título de Rey Demonio , presentado en Devil May Cry 5 como el antagonista central de hecho, la mitad demoníaca del alma de Vergil hecha carne; la encarnación de su ansia de poder."],
				["../imagenes/vergil10.jpg","Vergil es el mayor de los hijos gemelos de Sparda y Eva. Es el principal antagonista de Devil May Cry 3: Dante's Awakening. Después que su madre falleciera, tanto él como Dante tomaron diferentes caminos."]]; 

function ver(x){
document.getElementById("personajes").src=personajes[x][0];
	document.getElementById("personajesdmctxt").innerHTML=personajes[x][1];
}