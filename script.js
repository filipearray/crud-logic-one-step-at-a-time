const tempClient = {
    nome: "Filipe",
    email: "filipeguimaraes@gmail.com",
    celular: "990297113",
    cidade: "Santa City"
}; // Step 1: Essa constante será criada para não interagir com os dados da tela. Quando nós chamarmos o createClient, nós passaremos esse tempClient.

const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem("db_client"))

    db_client.push(client);

    localStorage.setItem("db_client", JSON.stringify(db_client))

}; // Step 1: Esse cliente precisa do nome, e-mail, celular e a cidade. É necessário enviar os dados para o localStorage (LS). Como funciona o LS? Nós passaremos uma chave e o valor dela dentro dos parênteses. Basicamente o primeiro argumento é uma KEY que receberá o segundo argumento, um VALUE. Eles ficarão salvos até que você delete eles.

// Step 2: esse LS set vai pegar as keys e values do tempClient. No caso, o db_client é a key, será o banco de dados, e o client vão ser as informações recebidas pela função, que será posteriormente a tempClient. Basta colocar createClient(tempClient) que assim será guardado.

// Step 3: Há um porém, quando se trata de objetos serem usados como argumento para serem guardados, a key só aceita STRINGS. Mas isso pode ser facilmente resolvido com o JSON.stringify().

// Step 4: O envio está funcionando, mas ao mudar os dados do tempClient - de forma bruta, mudando manualmente as values - o db_client ao invés de criar um novo Client na database, ele substitui as informações do anterior, tem algo errado. Para mudar isso podemos colocar esses dados em um ARRAY e então fazer um push sempre que houver novos objetos. Não esqueça que mudamos a value de client para db_client da key "db_client"

// Step 5: Porém, continuou substituindo. Isso porque estamos pegando a partir de um array vazio, e isso não pode acontecer. O ideal seria ler o que já está no banco de dados. com o LS get. Ele lerá o banco e adicionará com PUSH o novo cliente.
// Após fazer isso, perceberá que ainda há algo errado. Ele traz os dados, mas em STRING. Então transforme novamente o LS get em JSON com o parse ao invés do stringify.
// A partir de agora, enquanto você estiver mudando os dados de forma manual e bruta, você perceberá que ao invés de substituir, agora ele vai acumular os dados.


