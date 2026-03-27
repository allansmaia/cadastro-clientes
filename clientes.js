const bancoDeDados = require("./dados");
const { validarNome, validarEmail, validarTelefone } = require("./validacao");
const { gerarId, formatarCliente } = require("./utils");

function cadastrarCliente(nome, email, telefone) {
    const nomeValido = validarNome(nome);
    if (!nomeValido.valido) {
        console.log("Erro: " + nomeValido.mensagem);
        return null;
    }

    const emailValido = validarEmail(email);
    if (!emailValido.valido) {
        console.log("Erro: " + emailValido.mensagem);
        return null;
    }

    const telefoneValido = validarTelefone(telefone);
    if (!telefoneValido.valido) {
        console.log("Erro: " + telefoneValido.mensagem);
        return null;
    }

    const id = gerarId(bancoDeDados);
    const cliente = formatarCliente(id, nome, email, telefone);
    bancoDeDados.clientes.push(cliente);
    console.log("Cliente cadastrado com sucesso!");
    return cliente;
}

function buscarCliente(id) {
    const cliente = bancoDeDados.clientes.find(c => c.id === id);
    if (!cliente) {
        console.log("Cliente nao encontrado.");
        return null;
    }
    return cliente;
}

function removerCliente(id) {
    const index = bancoDeDados.clientes.findIndex(c => c.id === id);
    if (index === -1) {
        console.log("Cliente nao encontrado.");
        return false;
    }
    bancoDeDados.clientes.splice(index, 1);
    console.log("Cliente removido com sucesso!");
    return true;
}

function listarClientes() {
    return bancoDeDados.clientes;
}

module.exports = { cadastrarCliente, buscarCliente, removerCliente, listarClientes };
