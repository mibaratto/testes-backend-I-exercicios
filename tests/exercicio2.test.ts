import { convertDate } from "../src/exercicio2"

describe("retorna data formatada", () => {

    test("quanto é input é uma string", () => {
        // given
        const input = "2023/05/08"

        // when
        const result = convertDate(input)

        // then
        const expected = "08/05/2023"
        expect(result).toBe(expected)
    })

})

//input - output
//"2023/05/08" = "08/05/2023"
//
