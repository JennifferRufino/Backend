function validacao(){
	
	var nome = $("#nome").val();
	var cpf = $("#cpf").val();

	// primeiro tipo de validação
	if(nome == ""){
		alert("Por favor digite seu nome")
		$("nome").focus();
		return false;
	}

	if(cpf == ""){
		alert("Por favor digite seu cpf")
		$("cpf").focus();
		return false;
	}
	if(nome && cpf){
		exit
	}
	return true
	
}

