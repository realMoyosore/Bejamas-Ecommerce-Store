document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.cart');
    const cartPopup = document.querySelector('.cart-popup');

    if (cartIcon && cartPopup) {
        cartIcon.addEventListener('click', function () {
            cartPopup.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!cartPopup.contains(e.target) && !cartIcon.contains(e.target)) {
                cartPopup.classList.remove('active');
            }
        });
    }

     // Sidebar filter checkboxes
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.addEventListener('change', function(e) {
        });
    }
    
});

