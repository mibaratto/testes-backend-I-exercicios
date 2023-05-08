// ### Exercício 3

// Crie uma lista de usuários (você decide quais propriedades existem na sua tipagem) e desenvolva um teste garantindo que o Astrodev está presente nessa lista.
// Crie pelo menos um teste que valida sua implementação.

interface User {
    name: string;
    email: string;
}

const userList:Array<User> = [
    {name: "Michelle", email: "mi@mail"},
    {name: "Astrodev", email: "astrodev@mail"}
]

export const getUserNameList = (): Array<String>  => {
     const userNames = userList.map((user) => {
        return user.name
    })
    console.log(userNames)
    return userNames
}

