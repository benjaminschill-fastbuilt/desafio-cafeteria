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

async function buscarEnderecoEntrega(CEP) {
    const cepLimpo = String(CEP).replace(/\D/g, '');

    try{
        if (cepLimpo.length !== 8) { 
            throw new Error('Formato de CEP inválido. Digite 8 números.');
        }

        const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);

        if (!resposta.ok) { 
            throw new Error('Erro na requisição ao ViaCEP');
        }

        const dados = await resposta.json();

    if (dados.erro) {
      throw new Error('CEP não encontrado.');
    }

    return dados;
    }
    catch (erro) { 
        console.error(`Falha ao buscar endereço: ${erro.message}`);
        return null;
    }
}

buscarEnderecoEntrega("89012-190").then((endereco) => { 
    console.log(endereco);
});