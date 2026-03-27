function gerarId(bancoDeDados) {
    return bancoDeDados.proximoId++;
}
function formatarCliente(id, nome, email, telefone) {
    return {
        id: id,
        nome: nome.trim(),
        email: email.trim().toLowerCase(),
        telefone: telefone.trim()
    };
}

function exibirClientes(clientes) {
    console.log("---------------------");
    clientes.forEach(cliente => {
        console.log(`ID: ${cliente.id}`);
        console.log(`Nome: ${cliente.nome}`);
        console.log(`Email: ${cliente.email}`);
        console.log(`Telefone: ${cliente.telefone}`);
        console.log("---------------------");
    });
}

module.exports = { gerarId, formatarCliente, exibirClientes };
