const dropDowns = document.querySelectorAll(".drop-down");

dropDowns.forEach((dropDown) => {
  dropDown.addEventListener("click", () => {
    // adiciona a classe `.activeDropDown` ao elemento clicado
    dropDown.classList.toggle("activeDropDown");

    // itera sobre todos os elementos do tipo `.drop-down`
    dropDowns.forEach((otherDropDown) => {
      // verifica se o elemento atual é diferente do que foi clicado
      if (otherDropDown !== dropDown) {
        // remove a classe `.activeDropDown` dos outros elementos
        otherDropDown.classList.remove("activeDropDown");
      }
    });
  });
});
