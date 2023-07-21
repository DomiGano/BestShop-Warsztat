let btnDropdown = document.querySelector(".select__input")
let select = document.querySelector(".calc__select")
let selectDropdown = select.querySelectorAll("li")
let calcSummary = document.querySelector(".calc__summary")
let summaryBoxes = calcSummary.querySelectorAll(".list_item")

let productInput = document.querySelector("#products")
let ordersInput = document.querySelector("#orders")

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

productInput.addEventListener("input", function () {
    calcSummary.querySelectorAll("[data-id='products'] span").forEach(function (element ) {
        if(productInput.value > 0) {
            calcSummary.querySelector("[data-id='products']").classList.add("open")
            if(element.className == "item__calc") {
                element.innerText = productInput.value + " * $0.5"
            } if(element.className == "item__price") {
                element.innerText = productInput.value * 0.5 + "$"
            }
        } else {
            calcSummary.querySelector("[data-id='products']").classList.remove("open")

        }     
    })
    // console.log(productInput.value) 
})