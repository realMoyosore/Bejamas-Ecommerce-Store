document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartPopup = document.querySelector('.cart-popup');

    if (cartIcon && cartPopup) {
        cartIcon.addEventListener('click', function () {
            cartPopup.classList.toggle('active');
        });

    }
});