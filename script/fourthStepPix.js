const otherDeclaration = document.querySelector(".other-declaration");
const copyButton = document.querySelector(".copy-pix-code");
const qrCode = document.querySelector(".qrcode-payment-code");
const checkImg = document.querySelector(".checkImg");
const copyText = document.querySelector(".copy-text");

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
const button2to3 = document.querySelector(".button-2-to-3");
const divStep3to5 = document.querySelector(".step-area-3-5");
const backTo3to4 = document.querySelector(".back-to-3-to-4");
const enterCardPatment = document.querySelector(".button-4-to-5");
const timerContainer = document.querySelector(".timer-container");
const progressBar2 = document.getElementById("progress-bar-1");
const timer = document.getElementById("timer");

let pixDiv = document.querySelector(".method-pix-payment-selected");
timerContainer.classList.add("none");

copyButton.addEventListener("click", () => {
  const textToCopy = qrCode.textContent;
  console.log("click");
  setTimeout(() => {
    copyButton.classList.add("loading-copy");

    setTimeout(() => {
      checkImg.classList.add("active");

      setTimeout(() => {
        copyButton.classList.add("loading-copy-expand");
        checkImg.classList.add("active-left");
        copyText.classList.add("active");

        progressBar.classList.add("percentage-100");
        timerContainer.classList.remove("none");
      }, 700);
    }, 700);
  }, 400);

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      remainingTime = 5 * 60;
      startTimer();
    })
    .catch((err) => {
      console.error("Erro ao copiar o texto: ", err);
    });
});

otherDeclaration.addEventListener("click", () => {
  window.location.href = "home.html";
  clearInterval(intervalId);
});

let remainingTime = 5 * 60; // 5 minutes in seconds
let intervalId;

function startTimer() {
  intervalId = setInterval(updateTimer, 1000);
}

function updateTimer() {
  remainingTime--;
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timer.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  let progress = (remainingTime / (5 * 60)) * 100;
  progressBar2.style.transform = `scaleX(${progress / 100})`;

  if (remainingTime === 0) {
    clearInterval(intervalId);
  }
}
