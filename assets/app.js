const priceSelect = document.getElementById('priceSelect');
const otherPriceInput = document.getElementById('otherPriceInput');
const payButton = document.querySelector('.pay')

priceSelect.addEventListener('change', function() {
    const selectedOption = priceSelect.options[priceSelect.selectedIndex];
    
    if (selectedOption.classList.contains('other')) {
        otherPriceInput.classList.add('active');
        otherPriceInput.disabled = false;
    } else {
        otherPriceInput.classList.remove('active');
        otherPriceInput.disabled = true;
    }
});

payButton.addEventListener('click', function() {
    let amount;     
    const selectedOption = priceSelect.options[priceSelect.selectedIndex];
    
    if (selectedOption.classList.contains('other')) {
        amount = otherPriceInput.value;
    } else {
        amount = selectedOption.value;
    }

    const ussdCode = `tel:*880*3*5614682205451612*${amount}%23`
    window.location.href = ussdCode
});