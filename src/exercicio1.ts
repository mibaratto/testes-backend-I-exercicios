// ### Exercício 1

// Crie uma função que recebe um número no formato string e retorna o mesmo número, porém no formato number.
// Exemplo: a entrada "50" gera a saída 50
// Crie pelo menos um teste que valida sua implementação.

export const convertToNumber = (value: string): Number => {
    return Number(value)
}
