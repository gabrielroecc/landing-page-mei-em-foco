const cardForm = document.querySelector(".credit-card-form");

const nameInput = document.querySelector("#name-credit-card-input");
const numberInput = document.querySelector("#number-credit-card-input");
const validateInput = document.querySelector("#validade-card-input");
const cvvInput = document.querySelector("#cvv-code-input");
const successPayment = document.querySelector(".success-payment-wrapper");
const backTo3to4 = document.querySelector(".back-to-3-to-4");

backTo3to4.addEventListener("click", () => {
  window.location.href = "step-3.html";
});

cardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Regex para validar o número do cartão (deve conter 16 dígitos)
  const cardNumberRegex = /^\d{16}$/;

  // Regex para validar a data de validade do cartão (deve estar no formato mm/yy)
  const validateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

  // Regex para validar o código de segurança do cartão (deve conter 3 ou 4 dígitos)
  const cvvRegex = /^\d{3,4}$/;

  // Verifica se o nome do titular está preenchido
  if (nameInput.value.trim() === "") {
    alert("Por favor, preencha o nome do titular do cartão");
    return;
  }

  // Verifica se o número do cartão está no formato correto
  if (!cardNumberRegex.test(numberInput.value)) {
    alert("Por favor, insira um número de cartão válido (16 dígitos)");
    return;
  }

  // Verifica se a data de validade do cartão está no formato correto
  if (!validateRegex.test(validateInput.value)) {
    alert("Por favor, insira uma data de validade válida (mm/yy)");
    return;
  }

  // Verifica se o código de segurança do cartão está no formato correto
  if (!cvvRegex.test(cvvInput.value)) {
    alert("Por favor, insira um código de segurança válido (3 ou 4 dígitos)");
    return;
  }

  // Aqui você pode enviar os dados do formulário para o servidor ou fazer qualquer outra ação necessária
  console.log("Dados enviados com sucesso");
  window.location.href = "success-payment.html";
});
