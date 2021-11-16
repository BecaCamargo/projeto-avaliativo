function verificar(){
	var nome = document.geElementById('nome').value;
	var email = document.geElementById('email').value;
	var celular = document.geElementById('celular').value;
	var cpf = document.geElementById('cpf').value;
	var assunto = document.geElementById('asssunto').value;
	var detalhes = document.geElementById('detalhes').value;
	var tipodepessoa = document.getElementById('tipodepessoa').value;
	var senha = document.geElementById('senha').value;
	var confirmarsenha = document.geElementById(confirmarsenha)

if (!nome || !email || !celular || !cpf || !cpf || !assunto || !detalhes || !tipodepessoa || !senha || !confirmarsenha)
{
	alert("Campos não preenchidos, favor preencher.");
	} else {
		alert("Campos preenchidos com sucesso")
	}


	function maskFone (){
	const numeroAtual = document.getElementById('celular').value
	const isCelular = numeroAtual.lenght  === 11;
	const isFone = numeroAtual.lenght === 10; 
	let = numeroAjustado;
	if(isCelular){
		const part1 = numeroAtual.slice(0,2);
		const part2 = numeroAtual.slice(2,7);
		const part3 = numeroAtual.slice(7,11);
		numeroAjustado = `(${part1}) ${part2}-${part3}`
	}
}
	