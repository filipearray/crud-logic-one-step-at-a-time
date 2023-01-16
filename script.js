const tempClient = {
    nome: "Filipe",
    email: "filipeguimaraes@gmail.com",
    celular: "990297113",
    cidade: "Santa City"
};

const getLocalStorage = () => JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

// READ
const readClient = () => getLocalStorage(); 
// Step 8: Ele irá ler o que tem no getLocalStorage. Ou seja, o getLocalStorage poderia fazer essa função sem ter que declarar o readClient, mas como precisamos ser didáticos, o read ficará assim.

// CREATE
const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient)
};