// 1- Escreva uma função chamada snapCrackle que leva um parâmetro denominado: maxValue. +
// 2- Esta função deve fazer um loop de 1 até maxValue (inclusive) e montar uma string com as seguintes condições para cada número: + 
// 3-Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.
// 4-Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" no final da string.
// 5-Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar "SnapCrackle" no final da string.
// 6-Se número não for nem ímpar e nem múltiplo de 5, concatenar o próprio número no final da string. 
// 7-Seus itens devem ser separados sempre por vírgula e espaço
// 8- Esta função deve retornar a string obtida


let string = '0'

function snapCrackle(maxValue) {
    for (let i = 1; i <= maxValue; i++)
        if (i % 2 !== 0 && i % 5 !== 0) {
            string += ', Snap'
        }
        else if (i % 5 === 0 % 2 === 0) {
            string += ', Crackle'
        }
        else if (i % 2 !== 0 && i % 5 === 0) {
            string += ', SnapCrackle'
        } else {
            string += ', ' + i
        }
    return string

}
console.log(snapCrackle(25))
