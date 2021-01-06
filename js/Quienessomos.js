var lista=["../imagenes/baner/baner1.png","../imagenes/baner/baner2.jpg","../imagenes/baner/baner3.jpg","../imagenes/baner/baner4.png"];
var c=0;
var rotacion;
function carrusel(){
	$("#baner").attr("src",lista[c]);
	c++;
	if(c>=lista.length)c=0;
	rotacion=setTimeout("carrusel()",1500);
	
}
var lista2=["../imagenes/esports-Nuestramision.jpg","../e-sport1.jpg","../e-sport2.jpg","../e-sport3.jpg"];
var x=0;
var rotacion1;
function carrusel1(){
	$("#baner1").attr("src",lista2[x]);
	x++;
	if(x>=lista2.length)x=0;
	rotacion1=setTimeout("carrusel1()",1500);
	
}
$(document).ready(function(){
 carrusel();
carrusel1();
	$(".amenu").click(function(){
		var x=$(this).data("x");
		clearTimeout(rotacion);
		rotacion=null;
		c=x;
		carrusel();
	});
	
	$(".amenu").click(function(){
		var a=$(this).data("x");
		clearTimeout(rotacion1);
		rotacion=null;
		x=a;
		carrusel1();
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


