document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form-cnpj");

  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const cnpjInput = document.querySelector("#cnpj");
    const cnpj = cnpjInput.value;
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    if (!cnpjRegex.test(cnpj)) {
      alert("Escreva o CNPJ neste formato: ##.###.###/####-##");
      return;
    }
    const urlParams = new URLSearchParams();
    urlParams.append("cnpj", cnpj);
    window.location.href = `step-1.html?${urlParams.toString()}`;
    return true;
  });
});

window.document.body.addEventListener("scroll", function () {
  let header = document.querySelector(".first-section-header-wrapper");

  let scrollPosition = document.body.scrollTop;
  console.log(scrollPosition);
  if (scrollPosition > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
document.querySelector(".promotion-bar").addEventListener("click", () => {
  document.querySelector(".promotion-bar").classList.toggle("active");
});
