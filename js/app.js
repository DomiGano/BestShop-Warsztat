let btnDropdown = document.querySelector(".select__input")
let select = document.querySelector(".calc__select")
let selectDropdown = select.querySelectorAll("li")
let calcSummary = document.querySelector(".calc__summary")
let summaryBoxes = calcSummary.querySelectorAll(".list_item")

btnDropdown.addEventListener("click", function() {
   select.classList.toggle("open")
})

selectDropdown.forEach( function (element) {
    element.addEventListener("click", function() {
        btnDropdown.innerText = element.innerText
        select.classList.remove("open")
        btnDropdown.style.color = "black"

    })
})