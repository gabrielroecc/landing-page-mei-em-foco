document.querySelector(".img-instruction").addEventListener("click", () => {
  document.querySelector(".showInstructions").classList.toggle("active");
  document.querySelector(".showInstructions2").classList.remove("active");
});
document.querySelector(".img-instruction-2").addEventListener("click", () => {
  document.querySelector(".showInstructions2").classList.toggle("active");
});
