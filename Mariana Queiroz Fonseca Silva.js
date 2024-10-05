// Criando um objeto para armazenar os países e o número de medalhas
const medalhas = {
    'Brasil': 5,
    'Argentina': 1,
    'Uruguai': 3
};

// Convertendo o objeto em um array de entradas (pares chave-valor)
const listaMedalhas = Object.entries(medalhas);

// Ordenando a lista em ordem decrescente com base no número de medalhas
listaMedalhas.sort((a, b) => b[1] - a[1]);

// Exibindo o ranking
console.log("Ranking de Medalhas por País (em ordem decrescente):");
listaMedalhas.forEach(([pais, medalha], index) => {
    console.log(`${index + 1}º lugar: ${pais} - ${medalha} medalhas`);
});