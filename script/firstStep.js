const urlParams = new URLSearchParams(window.location.search);
const cnpjValue = urlParams.get("cnpj");
const cnpjParagraph = document.getElementById("cnpj-value");
cnpjParagraph.textContent = cnpjValue;
document.cookie = `cnpj=${cnpjValue}; path=/;`;
