// Exercício 2: Mesmo Exercício 1, mas acrescentar na tag head os seguintes comandos: janela para ler

//a propriedade window fucniona parecido com o console.log

    // nome1 = window.prompt("Qual seu nome?");
    // document.write("Olá, " + nome1 + "!");

//o comando acima vai mostras uma janela popup do igual o alert pedindo para entrar com o nome e mostrando a frase do write.







//Exercício 3: Alterar o script do Exercício 2 para: testar leitura da janela

// nome1 = window.prompt("Qual seu nome?");
// if (nome1 != null && nome1 != "") {
//     document.write("Olá, " + nome1 + "!");
// }
// else {
//     document.write("Olá, visitante!");
// }
// o teste do comando de cima geralmente não é usado sozinho como no exemplo, essa fucnionalidade geralmente em formularios que precisão de preenchimento obrigatório ou seja notNULL. É um comando de teste para armazenamento usados em outras etapas do codigo.

//Exercício 4: Acrescentar um script no body do Exercício 3: função para validar leitura nos campos do FORM E  também  acrescentar  o  comando  de  “chamar”  a função validar(); no  botão Enviar,  conforme  abaixo: <INPUT TYPE="SUBMIT" VALUE="Enviar os dados"  onClick="validar();">
 
 
function validar() 
{ 
if (document.cadastro.nome.value == "") 
{ window.alert("Você deve preencher o campo Nome."); 
document.cadastro.nome.focus(); 
return false; 
} 
if (document.cadastro.observacoes.value == "") 
{ window.alert("Você deve colocar alguma observação..."); 
document.cadastro.observacoes.focus(); 
return false; 
} 
}

//o focus é o foco da tela, por exemplo o cursor do mouse piscando no local de preenchimento até o usuario digitar aoguma coisa.


//Exercício 5: (arquivo novo) Apresentar os caracteres de uma string e suas posições.

