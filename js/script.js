const baseUrl =
  "https://seminariobackend-bgfgeaakahh8habs.brazilsouth-01.azurewebsites.net/api/cpf";

// 1. Olá Mundo
function olaMundo() {
  fetch(`${baseUrl}/ola-mundo`)
    .then((res) => res.text())
    .then((data) => (document.getElementById("olaOutput").innerText = data))
    .catch(
      (err) => (document.getElementById("olaOutput").innerText = "Erro: " + err)
    );
}

// 2. Gerar CPF
function gerarCPF() {
  const formatado = document.getElementById("formatado").checked;

  fetch(`${baseUrl}/generator?convertToFormatted=${formatado}`)
    .then((res) => res.json())
    .then(
      (data) =>
        (document.getElementById("gerarOutput").innerText = JSON.stringify(
          data,
          null,
          2
        ))
    )
    .catch(
      (err) =>
        (document.getElementById("gerarOutput").innerText = "Erro: " + err)
    );
}

// 3. Validar CPF
function validarCPF() {
  const cpf = document.getElementById("cpfValidar").value;

  fetch(`${baseUrl}/valid?request=${cpf}`)
    .then((res) => res.json())
    .then(
      (data) =>
        (document.getElementById("validarOutput").innerText = JSON.stringify(
          data,
          null,
          2
        ))
    )
    .catch(
      (err) =>
        (document.getElementById("validarOutput").innerText = "Erro: " + err)
    );
}
