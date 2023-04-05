// Dado um array de objetos, vamos retornar em um novo array
// Apenas 3 elementos e seus valores deste array, porém, de maneira aleatória

const produtosNovos: any = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.99 },
    { nome: 'Estojo', qtde: 7, preco: 9.99 },
    { nome: 'Teclado', qtde: 2, preco: 609.99 },
    { nome: 'Tenis', qtde: 3, preco: 350.99 },
    { nome: 'Fone', qtde: 5, preco: 198.99 },
    { nome: 'Mochila', qtde: 15, preco: 150.99 },
]

let produtosSortidos: any = []

while(produtosSortidos.length < 3) {
    let randomNumber = Math.floor(Math.random() * produtosNovos.length)
    if(!produtosSortidos.includes(produtosNovos[randomNumber])) {
        produtosSortidos.push(produtosNovos[randomNumber])
    }
}

console.log(produtosSortidos)


function getRandomObjects(array) {
    let result: any = []
    while(result.length < 3) {
        let randomIndex = Math.floor(Math.random() * array.length)
        let randomObject: any = array[randomIndex]
        if(!result.includes(randomObject)) {
            result.push(randomObject)
        }
    }
    return result
}

// for (let index = 0; index < 15; index++) {
//     console.log(getRandomObjects(produtosNovos))
// }



while(produtosSortidos.length < 3) {
    let randomNumber = Math.floor(Math.random() * produtosNovos.length)
    if(produtosSortidos[randomNumber] !== produtosNovos[produtosSortidos.length]) {
        produtosSortidos.push(produtosNovos[randomNumber])
    }
}


console.log(produtosSortidos)