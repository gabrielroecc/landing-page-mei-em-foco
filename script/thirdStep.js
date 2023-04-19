const formPaymentMethod = document.querySelector(".method-payments");

formPaymentMethod.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedPaymentMethod = document.querySelector(
    'input[name="payment-method"]:checked'
  ).value;

  if (selectedPaymentMethod === "credit") {
    window.location.href = "step-4-card.html";
  } else if (selectedPaymentMethod === "pix") {
    window.location.href = "step-4-pix.html";
  }
});
