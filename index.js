const cardapio = [
    {id: 1, nome: "Café Expresso", categoria: "bebida", preco: 5.00},
    {id: 2, nome: "Cappuccino", categoria: "bebida", preco: 8.50},
    {id: 3, nome: "Pão de queijo", categoria: "comida", preco: 4.50},
    {id: 5, nome: "Bolo de cenoura", categoria: "comida", preco: 7.00},
    {id: 4, nome: "Suco de laranja", categoria: "bebida", preco: 9.00}
];

console.log(cardapio);

const darBoasVindas = (nome) => { 
    return `Olá, ${nome}! Bem vindo à cafeteria.`;
}

console.log(darBoasVindas("Benjamin"));

const formatarPreco = (preco) => { 
    return `R$ ${preco.toFixed(2).replace('.', ',')}`;
}

console.log (formatarPreco(9.3));

const bebidas = cardapio.filter((item) => item.categoria === "bebida");

console.log(bebidas);

const maiusculas = cardapio.map((item) => item.nome.toUpperCase());

console.log(maiusculas);

const resumoProduto = (produto) => { 
    const { nome, preco } = produto; 
    return `Produto: ${nome} - Valor: ${formatarPreco(preco)}`
}

console.log(resumoProduto(cardapio[1]));

