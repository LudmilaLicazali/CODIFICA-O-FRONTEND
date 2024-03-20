var frase = "Ola, tudo bem?";
    document.write(frase + "<br>");
    tamanho = frase.length;
    for (var i = 0; i < tamanho;) {
        document.write("<br>Caractere na posição " + i + " : " + frase.charAt(i));
        i++;
    }
    document.write("<br><br>Primeiro caractere: " + frase.charAt(0) + "<br />");
    document.write("Último caractere: " + frase.charAt(frase.length - 1));

// /* O método charAt() retorna o caractere da posição especificada da string (do índice especificado). */



//Exercício 5.2: Mesmo exercício anterior, mas agora lendo uma frase do teclado.

var frase=window.prompt("digite uma frase: "); 
document.write(frase+"<br>"); 
tamanho=frase.length; 
for (var i=0; i< tamanho;) 
{ 
document.write("<br>Caractere na posição "+i+" : "+frase.charAt(i)); 
i++; 
} 
document.write("<br><br>Primeiro caractere: " + frase.charAt(0) + "<br />"); 
document.write("Último caractere: " + frase.charAt(frase.length-1)); 
/* 
O método charAt() retorna o caractere da posição especificada da string (do 
índice especificado). 
*/ 
        

//Exercício 6: Apresentar a data em diversos formatos.


hoje = new Date();
document.write("Data e hora completa: " + hoje); 
document.write("<br>Apenas o dia: " + hoje.getDate());
document.write("<br>Apenas o mês (0 a 11): " + hoje.getMonth());
document.write("<br>Apenas o ano: " + hoje.getFullYear());
document.write("<br>Apenas o dia da semana (0 a 6): " + hoje.getDay());
document.write("<br>Apenas a hora e minutos: "+hoje.getHours()+": "+hoje.getMinutes()); 

// os comandos acima servem para quando você que puxar data e hora nos seus projetos