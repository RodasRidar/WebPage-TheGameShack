// JavaScript Document
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
$(".livideo").click(function(){

	
	var video=$(this).data("video");
	$("#idvideo").attr("src","https://www.youtube.com/embed/"+video+"?autoplay=1");
});