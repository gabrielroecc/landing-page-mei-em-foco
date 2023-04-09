const form = document.querySelector("#form-cnpj");
const cnpjInput = document.querySelector("#cnpj");
const cnpjInfo = document.querySelector("#cnpj-info");
let cnpjInfo2 = document.querySelector("#cnpj-info-2");
const razaoSocial = document.querySelector("#razao-social");
const steps = document.querySelector("#inside-steps");
const sectionHome = document.querySelector(".section-home");
const headerHome = document.querySelector(".first-section-header");
const aguardandoPagamentoDiv = document.querySelector(".aguardando-pagamento");
const step1de5 = document.querySelector(".step-area-1-5");
const progressBar = document.querySelector(".progress-bar");
const button1to2 = document.querySelector(".button-1-to-2");
const button2to3 = document.querySelector(".button-2-to-3");
const divStep3to5 = document.querySelector(".step-area-3-5");
const formPaymentMethod = document.querySelector(".method-payments");
const backTo3to4 = document.querySelector(".back-to-3-to-4");
const otherDeclaration = document.querySelector(".other-declaration");
const enterCardPatment = document.querySelector(".button-4-to-5");
const creditCardMethos = document.querySelector(
  ".method-credit-card-payment-selected "
);
const creditCardDiv = document.querySelector(
  ".method-credit-card-payment-selected"
);
pixDiv = document.querySelector(".method-pix-payment-selected");
let cnpjSalvo;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cnpj = cnpjInput.value;
  const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
  if (!cnpjRegex.test(cnpj)) {
    alert("Escreva o CNPJ neste formato: ##.###.###/####-##");
    return;
  }
  console.log(cnpj);
  steps.classList.add("active");
  sectionHome.classList.add(".none");
  headerHome.classList.add(".none");
  cnpjInfo.innerHTML = cnpj;
  cnpjSalvo = cnpj;
});

// selecione todos os elementos da classe steps-choose
const stepsChooseElements = document.querySelectorAll(".steps-choose");

// para cada elemento, adicione um ouvinte de evento 'click'
stepsChooseElements.forEach((stepsChooseElement) => {
  stepsChooseElement.addEventListener("click", () => {
    // remova a borda lateral de todos os elementos
    stepsChooseElements.forEach((element) => {
      element.classList.remove("selected");
    });

    // adicione a borda lateral apenas ao elemento clicado
    stepsChooseElement.classList.add("selected");
  });
});

button1to2.addEventListener("click", () => {
  const selectedStep = document.querySelector(".steps-choose.selected");
  if (selectedStep === null) {
    alert("Por favor, selecione um passo.");
    return;
  }
  const stepText = selectedStep.querySelector(
    ".choose-situation-text"
  ).textContent;

  if (stepText === "Aguardando pagamento") {
    aguardandoPagamentoDiv.classList.remove("none");
    aguardandoPagamentoDiv.classList.add("active");
    step1de5.classList.add("none");
    progressBar.classList.add("percentage-40");
    cnpjInfo2.innerHTML = cnpjSalvo;
  } else if (stepText === "Entregue") {
    console.log("Entregues");
  } else if (stepText === "Boleto Gerado") {
    console.log("Boleto gerado");
  }
});

button2to3.addEventListener("click", (event) => {
  event.preventDefault();
  const meiComercio = document.querySelector("#mei-comercio").value;
  const meiPrestacao = document.querySelector("#mei-prestacao").value;
  const funcionarios = document.querySelector(
    'input[name="funcionarios"]:checked'
  );
  const terms = document.querySelector("#terms");

  if (!meiComercio || !meiPrestacao || !funcionarios || !terms) {
    alert("Preencha todos os campos antes de continuar.");
  } else {
    divStep3to5.classList.remove("none");
    divStep3to5.classList.add("active");
    progressBar.classList.add("percentage-60");
    aguardandoPagamentoDiv.classList.add("none");
  }
});

formPaymentMethod.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedPaymentMethod = document.querySelector(
    'input[name="payment-method"]:checked'
  ).value;

  if (selectedPaymentMethod === "credit") {
    pixDiv.classList.remove("active");
    creditCardDiv.classList.add("active");
    divStep3to5.classList.add("none");
    progressBar.classList.add("percentage-80");
    creditCardMethos.classList.remove("none");
  } else if (selectedPaymentMethod === "pix") {
    creditCardDiv.classList.remove("active");
    pixDiv.classList.remove("none");
    pixDiv.classList.add("active");
    divStep3to5.classList.add("none");
    progressBar.classList.add("percentage-80");
  }

  // aqui você pode adicionar a lógica para enviar o formulário ou fazer outras coisas
});
backTo3to4.addEventListener("click", () => {
  divStep3to5.classList.remove("none");
  creditCardMethos.classList.add("none");
  progressBar.classList.remove("percentage-80");
});

const copyButton = document.querySelector(".copy-pix-code");
const qrCode = document.querySelector(".qrcode-payment-code");

copyButton.addEventListener("click", () => {
  const textToCopy = qrCode.textContent;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Texto copiado para a área de transferência!");
    })
    .catch((err) => {
      console.error("Erro ao copiar o texto: ", err);
    });
});
otherDeclaration.addEventListener("click", () => {
  step1de5.classList.remove("none");
  pixDiv.classList.add("none");
  progressBar.classList.remove("percentage-80");
  progressBar.classList.remove("percentage-60");
  progressBar.classList.remove("percentage-40");
});

const cardForm = document.querySelector(".credit-card-form");
const nameInput = document.querySelector("#name-credit-card-input");
const numberInput = document.querySelector("#number-credit-card-input");
const validateInput = document.querySelector("#validade-card-input");
const cvvInput = document.querySelector("#cvv-code-input");
const successPayment = document.querySelector(".success-payment-wrapper");

enterCardPatment.addEventListener("click", (event) => {
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

  console.log("Dados enviados com sucesso");
  // Aqui você pode enviar os dados do formulário para o servidor ou fazer qualquer outra ação necessária
  successPayment.classList.add("active");
  creditCardDiv.classList.remove("active");
  progressBar.classList.add("percentage-100");
});
const buttonBackToPage = document.querySelector(".button-back-to-page");

buttonBackToPage.addEventListener("click", () => {
  // Volta para o início da página
  window.scrollTo(0, 0);

  // Recarrega a página
  window.location.reload();
});
