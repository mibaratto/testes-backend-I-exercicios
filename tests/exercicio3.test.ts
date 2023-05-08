import { getUserNameList } from "../src/exercicio3"

describe("retorna nomes de usuarios", () => {

    test("quando o resultado contém Astrodev", () => {

        // when
        const result = getUserNameList()

        // then
        const expected = "Astrodev"
        expect(result).toContainEqual(expected)
    })

})

//input - output
