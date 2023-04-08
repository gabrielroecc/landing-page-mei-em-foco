const navMenuMobile = document.querySelector(".nav-list-mobile");
const closeMenuIcon = document.querySelector(".close-menu-icon");
const hambIcon = document.querySelector(".hamb-icon");
hambIcon.addEventListener("click", () => {
  navMenuMobile.classList.add("active");
  closeMenuIcon.classList.add("active");
  hambIcon.classList.add("active");
});
closeMenuIcon.addEventListener("click", () => {
  console.log("fechou");
  navMenuMobile.classList.remove("active");
  closeMenuIcon.classList.remove("active");
  hambIcon.classList.remove("active");
});
