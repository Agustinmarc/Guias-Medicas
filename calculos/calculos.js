// JavaScript source code
function calcular_imc () {
	var peso = document.form_imc.peso.value;
	var talla = document.form_imc.talla.value;
	var text_resultado = document.getElementById("resultado_imc");

	if (peso > 0 && talla > 0) {
		var resultado = peso / (talla * talla);
		resultado = resultado.toFixed(1);
		var aclaracion = "";
		if (resultado < 18.5)
			aclaracion = " (bajo peso)";
        if (resultado >= 18.5 && resultado < 25)
            aclaracion = " (peso normal)";
        if (resultado >= 25 && resultado < 30)
            aclaracion = " (sobrepeso)";
        if (resultado >= 30 && resultado < 35)
            aclaracion = " (obesidad grado I)";
        if (resultado >= 35 && resultado < 40)
            aclaracion = " (obesidad grado II)";
        if (resultado >= 40)
            aclaracion = " (obesidad grado III)";

		text_resultado.innerHTML = resultado.toLocaleString() + aclaracion;
	}
	else
		text_resultado.innerHTML = "Valor invalido";
}
