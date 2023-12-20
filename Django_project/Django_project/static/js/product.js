function minusQuantity() {
    var quantityElement = document.getElementById('quantity');
    var currentValue = parseInt(quantityElement.value);

    if (!isNaN(currentValue) && currentValue > 1) {
        quantityElement.value = currentValue - 1;
    }
}

function plusQuantity() {
    var quantityElement = document.getElementById('quantity');
    var currentValue = parseInt(quantityElement.value);

    if (!isNaN(currentValue)) {
        quantityElement.value = currentValue + 1;
    }
}

