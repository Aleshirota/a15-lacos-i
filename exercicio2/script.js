//Crie um programa que peça um input de número para o usuário. 
//Com este número, o código deve imprimir a tabuada do número, de 1 a 10.

//Exemplo com entrada 7:

//7
//14
//21
//28
//35
//42
//49
//56
//63
//70



let numero = Number (prompt("Digite um numero"))

for (let multiplicacao = 1;multiplicacao<=10;multiplicacao++){
console.log (`${multiplicacao} * ${numero} = ${numero*multiplicacao}`)
}



