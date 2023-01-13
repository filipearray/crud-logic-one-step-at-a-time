const tempClient = {
    nome: "Filipe",
    email: "filipeguimaraes@gmail.com",
    celular: "990297113",
    cidade: "Santa City"
}; // Essa constante será criada para não interagir com os dados da tela. Quando nós chamarmos o createClient, nós passaremos esse tempClient.

const createClient = (client) => {

    localStorage.setItem("db_client", JSON.stringify(client))

}; // Esse cliente precisa do nome, e-mail, celular e a cidade. É necessário enviar os dados para o localStorage (LS). Como funciona o LS? Nós passaremos uma chave e o valor dela dentro dos parênteses. Basicamente o primeiro argumento é uma KEY que receberá o segundo argumento, um VALUE. Eles ficarão salvos até que você delete eles.


