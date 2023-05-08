import { convertToNumber } from "../src/exercicio1"

describe("retorna um Number quanto o valor recebido é uma string", () => {

    test("quanto é input é uma string", () => {
        // given
        const input = "50"

        // when
        const result = convertToNumber(input)

        // then
        const expected = 50
        expect(result).toBe(expected)
    })

    test("Verifica tipo do retorno da função", () => {
        // given
        const input = "50"

        // when
        const result = convertToNumber(input)

        // then
        const expected = "number"
        expect(typeof result).toEqual(expected)
    })

})