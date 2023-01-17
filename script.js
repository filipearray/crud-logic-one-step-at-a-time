const tempClient = {
    nome: "Filipe",
    email: "filipeguimaraes@gmail.com",
    celular: "990297113",
    cidade: "Santa City"
};

const getLocalStorage = () => JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

// DELETE
const deleteClient = (index) => {
    const dbClientDeleted = readClient();
    dbClientDeleted.splice(index, 1);
    setLocalStorage(dbClientDeleted);
};
/* Step 10: O splice funciona da seguinte maneira. O splice() precisa de pelo menos um parâmetro, que é o index de início, onde a operação de splice começa. 

let meses = ["Janeiro", "Fevereiro", "Segunda", "Terça"];
let dias = meses.splice(2);
console.log(dias); ["Segunda", "Terça"] 

No código acima, o número 2 é passado para o método, o que significa que o splice() começará a remover elementos a partir do índice 2. 

Você também pode definir quantos elementos deseja remover do array, passando um segundo argumento numérico conhecido como contador de remoção. No dbClientDeleted, é 1. Então digamos que o index vai ser 2, então ele vai, i0? Não, i1? Não, i2? Sim! i3? Não. Um suposto index 3 seria exclúido se o removeCount fosse 2. Uma vez que você omite o removeCount, ele vai apagar todos os indexes depois do index declarado. */


// UPDATE
const updateClient = (index, client) => {
    const dbClientUpdated = readClient();
    dbClientUpdated[index] = client;
    setLocalStorage(dbClientUpdated);
}
// Step 9: Essa função vai receber um índice e vai receber o tempClient. O dbClientUpdated é o database normal, mas ali, ao passar o index (1 por exemplo), você faria o index 1 ficar igual ao tempClient que você passou. Então os dados que estavam armazenados antes no index 1 serão atualizados pelo tempClient. Depois o set LS aparece atualizando eles.

// READ
const readClient = () => getLocalStorage(); 
// Step 8: Ele irá ler o que tem no getLocalStorage. Ou seja, o getLocalStorage poderia fazer essa função sem ter que declarar o readClient, mas como precisamos ser didáticos, o read ficará assim.

// CREATE
const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient)
};