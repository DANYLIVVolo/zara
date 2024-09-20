// script.js
document.addEventListener('DOMContentLoaded', () => {
    const basketCountElement = document.getElementById('basket-count');
    let basketCount = 0;

    // Event delegation for "Buy" buttons
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.matches('.buy-button')) {
            event.preventDefault();

            // Retrieve product details
            const productName = event.target.getAttribute('data-product-name');
            const productPrice = event.target.getAttribute('data-product-price');

            // Log product details (you can replace this with actual basket logic)
            console.log(`Product added: ${productName}, Price: ${productPrice}`);

            // Update basket count
            basketCount++;
            basketCountElement.textContent = basketCount;
        }
    });
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    let cart = [];
    const basketCountElement = document.getElementById('basket-count');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutForm = document.getElementById('checkout-form');
    const productNameInput = document.getElementById('product-name');
    const customerNameInput = document.getElementById('customer-name');
    const phoneNumberInput = document.getElementById('phone-number');

    // Simulate adding items to the cart
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.matches('.buy-button')) {
            event.preventDefault();
            const productName = event.target.getAttribute('data-product-name');
            const productPrice = parseFloat(event.target.getAttribute('data-product-price'));

            // Add item to cart
            cart.push({ name: productName, price: productPrice });

            // Update basket count and total price
            updateBasket();
        }
    });

    function updateBasket() {
        const itemCount = cart.length;
        const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

        basketCountElement.textContent = itemCount;
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const productName = productNameInput.value;
        const customerName = customerNameInput.value;
        const phoneNumber = phoneNumberInput.value;
        const deliveryMethod = document.querySelector('input[name="delivery"]:checked')?.value;

        if (!productName || !customerName || !phoneNumber || !deliveryMethod) {
            alert('Будь ласка, заповніть всі поля.');
            return;
        }

        // Handle form submission
        console.log('Form Submitted:', {
            productName,
            customerName,
            phoneNumber,
            deliveryMethod
        });

        // Clear cart and form
        cart = [];
        updateBasket();
        checkoutForm.reset();
    });
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const basketCountElement = document.getElementById('basket-count');
    const totalPriceElement = document.getElementById('basket-total');
    let basketCount = 0;
    let totalPrice = 0;

    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.matches('.buy-button')) {
            event.preventDefault();

            // Get the price of the product from the data attribute
            const productPrice = parseFloat(event.target.getAttribute('data-price'));

            // Update basket count and total price
            basketCount++;
            totalPrice += productPrice;

            basketCountElement.textContent = basketCount;
            totalPriceElement.textContent = totalPrice.toFixed(2);
        }
    });
});
