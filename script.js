const tempClient = {
    nome: "Filipe",
    email: "filipeguimaraes@gmail.com",
    celular: "990297113",
    cidade: "Santa City"
};

const getLocalStorage = () => JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

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