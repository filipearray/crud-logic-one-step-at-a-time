const tempClient = {
    nome: "Filipe",
    email: "filipeguimaraes@gmail.com",
    celular: "990297113",
    cidade: "Santa City"
};

const getLocalStorage = () => JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient));

// CREATE
const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient);
};

// READ
const readClient = () => getLocalStorage(); 

// UPDATE
const updateClient = (index, client) => {
    const dbClientUpdated = readClient();
    dbClientUpdated[index] = client;
    setLocalStorage(dbClientUpdated);
};

// DELETE
const deleteClient = (index) => {
    const dbClientDeleted = readClient();
    dbClientDeleted.splice(index, 1);
    setLocalStorage(dbClientDeleted);
};