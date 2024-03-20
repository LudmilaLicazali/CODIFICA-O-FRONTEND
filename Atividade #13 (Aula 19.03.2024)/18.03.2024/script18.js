// function clique(){
//     alert('Clicou no botão')
// }



// function clique(){
//     alert('clique botao')
//     botao.addEventlistener('clique', clique);
// }

// let botao = document.querySelector('.botao')

// botao.addEventListener('click', clique);


// let botao = document.querySelector('.botao')
// botao.addEventListener('click', () => {
//     clique();
// });
    
// function clique(){
//     const teste = document.querySelector('#teste2');

//     console.log(teste.children[1] .children)
// esse meu exemplo não deu certo }



// function clique(){
//     const teste = document.querySelector('#teste2');
//     const ul = teste.querySelector ('ul');
//     ul.innerHTML += '<li> item alterado</li>' 
//     // o camando = ( sozinho) vai alterar o item quando cliclar no botao e se for += ele vai incluir um novo elemento quandop o botao for clicado.

//     //usando o aoendcild
//     ul.children[0].apendchild('novo item');


//    console.log(ul) }

   

//exemplo para acrescentar um elemento usando o createElement//
// function clique(){
//     //aqui são as variaveis//
//     const teste = document.querySelector('#teste2');
//     const ul = teste.querySelector ('ul');
//     //e aqui o objeto a ser criado//
//     let newLi = document.createElement('li')
//    newLi.innerHTML = 'acrescimo de item'
//    ul.appendChild(newLi);
// }


//atividade treste//
//acrescentar itens usando o appendd que adiciona no fianl e o:
// ul.appedd(newLi); -> acrescenta o novo iten no final
// ul.prepend(newli); -> acrescenta o novo iten no inicio

// function clique(){
//     //aqui são as variaveis//
//     const teste = document.querySelector('#teste2');
//     const ul = teste.querySelector ('ul');
//     //e aqui o objeto a ser criado//
//     let newLi = document.createElement('li')
//    newLi.innerHTML = 'Novo usando append'
//    ul.appendChild(newLi);
// }

// function clique(){
//     //aqui são as variaveis//
//     const teste = document.querySelector('#teste2');
//     const ul = teste.querySelector ('ul');
//     //e aqui o objeto a ser criado//
//     let newLi = document.createElement('li')
//    newLi.innerHTML = 'Novo usando prepend'
//    ul.prepend(newLi);
// }


// EXERCICIO  INCLUIR 5 REGISTROS AO CLICAR NO BOTAO DE UMA VEZ

// function clique(){
 

function clique() {
    const teste = document.querySelector('#teste2');
    const ul = teste.querySelector('ul');
    for (let i = 0; i < 5; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = 'novo elemento';
        ul.prepend(newLi);
    }
}