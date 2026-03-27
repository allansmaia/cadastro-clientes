function validarNome(nome) {
    if (!nome || nome.trim().length < 3) {
        return {
            valido: false,
            mensagem: "O nome deve conter pelo menos 3 caracteres."
        };
    }
    return { valido: true };
}

function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !regexEmail.test(email)) {
        return {
            valido: false,
            mensagem: "O email deve ser valido."
        };
    }
    return { valido: true };
}

function validarTelefone(telefone) {
    const regexTelefone = /^\d{10,11}$/;
    if (!telefone || !regexTelefone.test(telefone)) {
        return {
            valido: false,
            mensagem: "O telefone deve conter 10 ou 11 digitos."
        };
    }
    return { valido: true };
}
module.exports = { validarNome, validarEmail, validarTelefone };
