// Obtém o valor do cookie "cnpj"
const cnpjValue = document.cookie
  .split("; ")
  .find((row) => row.startsWith("cnpj="))
  .split("=")[1];

// Usa o valor do CNPJ como quiser
console.log(`O CNPJ é: ${cnpjValue}`);
const cnpjParagraph = document.getElementById("cnpj-value");
cnpjParagraph.textContent = cnpjValue;

const form = document.querySelector(".aguardando-pagamento-form");
const inputMeiComercio = document.querySelector("#mei-comercio");
const inputMeiPrestacao = document.querySelector("#mei-prestacao");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // previne o envio padrão do formulário
  console.log("click");

  let meiComercioValue = inputMeiComercio.value;
  let meiPrestacaoValue = inputMeiPrestacao.value;

  window.location.href = "step-3.html";

  console.log(meiComercioValue, meiPrestacaoValue);
  cleanForm();
});

function cleanForm() {
  inputMeiComercio.value = "";
  inputMeiPrestacao.value = "";
}
