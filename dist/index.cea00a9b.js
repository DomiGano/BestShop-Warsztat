let btnDropdown = document.querySelector(".select__input");
let select = document.querySelector(".calc__select");
let selectDropdown = select.querySelectorAll("li");
let calcSummary = document.querySelector(".calc__summary");
let summaryBoxes = calcSummary.querySelectorAll(".list_item");
let checkboxes = document.querySelectorAll("[type='checkbox'");
let productInput = document.querySelector("#products");
let ordersInput = document.querySelector("#orders");
btnDropdown.addEventListener("click", function() {
    select.classList.toggle("open");
});
selectDropdown.forEach(function(element) {
    element.addEventListener("click", function() {
        btnDropdown.innerText = element.innerText;
        select.classList.remove("open");
        btnDropdown.style.color = "black";
        if (element.innerText == "Basic") {
            calcSummary.querySelector("[data-id='package']").classList.add("open");
            calcSummary.querySelectorAll("[data-id='package'] span").forEach(function(element) {
                if (element.className == "item__calc") element.innerText = "Basic";
                if (element.className == "item__price") element.innerText = "0$";
            });
        }
        if (element.innerText == "Premium") {
            calcSummary.querySelector("[data-id='package']").classList.add("open");
            calcSummary.querySelectorAll("[data-id='package'] span").forEach(function(element) {
                if (element.className == "item__calc") element.innerText = "Premium";
                if (element.className == "item__price") element.innerText = "60$";
            });
        }
        if (element.innerText == "Professional") {
            calcSummary.querySelector("[data-id='package']").classList.add("open");
            calcSummary.querySelectorAll("[data-id='package'] span").forEach(function(element) {
                if (element.className == "item__calc") element.innerText = "Professional";
                if (element.className == "item__price") element.innerText = "25$";
            });
        }
    });
});
productInput.addEventListener("input", function() {
    calcSummary.querySelectorAll("[data-id='products'] span").forEach(function(element) {
        if (productInput.value > 0) {
            calcSummary.querySelector("[data-id='products']").classList.add("open");
            if (element.className == "item__calc") element.innerText = productInput.value + " * $0.5";
            if (element.className == "item__price") element.innerText = "$" + productInput.value * 0.5;
        } else calcSummary.querySelector("[data-id='products']").classList.remove("open");
    });
});
ordersInput.addEventListener("input", function() {
    calcSummary.querySelectorAll("[data-id='orders'] span").forEach(function(element) {
        if (ordersInput.value > 0) {
            calcSummary.querySelector("[data-id='orders']").classList.add("open");
            if (element.className == "item__calc") element.innerText = ordersInput.value + " * $1";
            if (element.className == "item__price") element.innerText = "$" + ordersInput.value * 1;
        } else calcSummary.querySelector("[data-id='orders']").classList.remove("open");
    });
});
checkboxes.forEach(function(element) {
    element.addEventListener("click", function() {
        if (element.id == "accounting") calcSummary.querySelector("[data-id='accounting']").classList.toggle("open");
        if (element.id == "terminal") calcSummary.querySelector("[data-id='terminal']").classList.toggle("open");
    });
});

//# sourceMappingURL=index.cea00a9b.js.map
