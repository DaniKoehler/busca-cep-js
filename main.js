function enviarCep() {
    var cep = document.getElementById("txtCep").value;
    if (cep.length < 8 || cep.length > 8) {
        alert("CEP Invalido " + cep.length);
    } else {
        alert("CEP Valido " + cep.length);
    }
}