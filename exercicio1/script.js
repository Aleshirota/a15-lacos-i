//Utilizando o laço while, escreva um código que recebe um prompt perguntando
 //se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” 
 //deve representar “não”. Crie também uma let conta para guardar o valor total.

//Toda vez que a resposta for sim, o laço deve se repetir, e devemos 
//adicionar R$2.50 ao valor total. Quando a resposta não for sim,
// devemos imprimir o valor total da conta.


let coxinha = prompt ("Deseja comer mais coxinhas: 's' para sim ou 'n' para não")
let conta = 0

while (coxinha==="s"){
conta = conta + 2.50
//console.log (coxinha)
coxinha = prompt ("Deseja comer mais coxinhas: sim ou não")
//console.log (coxinha)
//console.log(conta)
}
console.log (`Valor total é:" ${conta}`)
