function validar(){
	
	var dni=document.forms["frm1"].dni.value;
	var exp=/^[0-9]{8}$/;
	if(exp.test(dni)==false){
		alert("El Numero de DNI debe ser de 8 Digitos")
		return;
	}
	var nombre=document.forms["frm1"].nombre.value;
	exp=/^\s*$/;
	
	if(exp.test(nombre)==true){
		alert("Nombre esta vacio,ingresar..");
		return;
	var apellido=document.forms["frm1"].apellido.value;
	exp=/^\s*$/;
	if(exp.test(apellido)==true){
		alert("Apellido esta vacio,ingresar..");
		return;
	}
	var mail=document.forms["frm1"].email.value;
		exp=/^[a-z0-9_,]{3,}[@][a-z]{3,50}[.][a-z]{2,3}$/;
		if(exp.test(mail)==false){
			alert("Correo incorrecto")
			return;
		}
		var nroproducto=document.forms("frm1").nroproducto.value;
		exp=/^[0-9]{9,15}$/;
		if(exp.test(nroproducto)==false){
			alert("Solo ingresar los numeros del Catalogo");
		}
		var tarjeta=document.forms("frm1").tarjeta.value;
		exp=/^[0-12]{8,12}$/;
		if(exp.test(tarjeta)==false){
			alert("La  Tarjeta debe tener 12 digitos");
		}
		
	}
	alert("SU COMPRA  A SIDO REALIZADA CORRECTAMENTE");
}
// JavaScript Document