window.onload = iniciar;
function iniciar(){
	// VARIABLES DEL PROGRAMA
	// CAJA DE RESULTADO
	var promedio = document.getElementById("promedio");
	var observaciones = document.getElementById("observaciones");
	// DATOS DEL ESTUDIANTE
	promedio.readOnly = true;
	observaciones.readOnly = true;

	var estudiante = document.getElementById("estudiante");
	var nota1 = document.getElementById("nota1");
	var nota2 = document.getElementById("nota2");
	var nota3 = document.getElementById("nota3");
	// BOTONES
	var borrar = document.getElementById("borrar");
	var promediar = document.getElementById("promediar");
	// PANEL DE CALIFICACIONES
	//EVENTOS
	borrar.onclick = function(e){
		resetear();
	}
	promediar.onclick = function(e){
		validar();
	}
	// DEFINCIONES
	function validar(){
		if(estudiante.value == ""){
			alert("Debe ingresar el nombre del estudiante");
		}if(nota1.value=="" || nota2.value=="" || nota3.value==""){
			alert("Todos Las notas son obligatorias");
		}else if(promedio.value==""){
			calcular();
		}if(promedio.value!=""){
			promedio.value = "";
			calcular();
		}else{
			resetear();
		}
	}
	function calcular(){
		var pga = 0;
		observaciones.value ="";
		//var observaciones = "";
		pga = (parseFloat((nota1.value)*.35) + parseFloat((nota2.value)*.35)+parseFloat((nota3.value)*.30)).toFixed(2);
		//promedio.textContent = promedio.textContent + (n1+n2+n3)/3;
		if(pga >0.0 && pga<=2.99){
			observaciones.value="reprobado";
		}
		if(pga >= 3.00 && pga<=3.99){
			observaciones.value="aprueba";
		}
		if(pga >= 4.00 && pga<=4.49){
			observaciones.value="beca del 60 Por Ciento";
		}
		if(pga >= 4.50){
			observaciones.value="beca del 90 Por Ciento";
		}
		promedio.value = pga;
	}
	/* LIMPIAMOS LA INFORMACIÓN */
	function resetear(){
		promedio.value = "";
		nota1.value = "";
		nota2.value = "";
		nota3.value = "";
		estudiante.value = "";
		observaciones.value = "";
	}
}