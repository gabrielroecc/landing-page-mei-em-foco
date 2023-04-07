const dropDowns = document.querySelectorAll('.drop-down')

dropDowns.forEach(dropDown => {
    dropDown.addEventListener("click", ()=>{
        dropDown.classList.toggle("activeDropDown")
    })
})