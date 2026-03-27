const { cadastrarCliente, buscarCliente, removerCliente, listarClientes } = require("./clientes");
const { exibirClientes } = require("./utils");

console.log("=== Sistema de Cadastro de Clientes ===\n");

// Cadastrando clientes
console.log("--- Cadastrando clientes ---");
cadastrarCliente("Allan Maia", "allan@email.com", "11999999999");
cadastrarCliente("Maria Silva", "maria@email.com", "11988888888");
cadastrarCliente("Joao Santos", "joao@email.com", "11977777777");

// Tentando cadastrar com dados invalidos
console.log("\n--- Testando validacoes ---");
cadastrarCliente("Al", "email-invalido", "123");

// Listando todos os clientes
console.log("\n--- Lista de clientes ---");
const clientes = listarClientes();
exibirClientes(clientes);

// Buscando um cliente
console.log("\n--- Buscando cliente ID 1 ---");
const cliente = buscarCliente(1);
exibirClientes([cliente]);

// Removendo um cliente
console.log("\n--- Removendo cliente ID 2 ---");
removerCliente(2);

// Listando apos remocao
console.log("\n--- Lista apos remocao ---");
exibirClientes(listarClientes());
