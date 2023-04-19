const navMenuMobile = document.querySelector(".nav-list-mobile");
const hambIcon = document.querySelector(".hamb-icon");
hambIcon.addEventListener("click", () => {
  console.log("Click");
  navMenuMobile.classList.toggle("active");
});
