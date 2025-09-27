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

    // Sidebar filter toggle for mobile
    const filterBtn = document.querySelector('.filter-toggle-btn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const closeSidebarBtn = document.querySelector('.close-sidebar');

    if (filterBtn && sidebarOverlay && closeSidebarBtn) {
        filterBtn.addEventListener('click', function() {
            sidebarOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        closeSidebarBtn.addEventListener('click', function() {
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        sidebarOverlay.addEventListener('click', function(e) {
            if (e.target === sidebarOverlay) {
                sidebarOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Optional: CLEAR button resets all checkboxes
    const clearBtn = document.querySelector('.clear-btn');
    if (clearBtn && sidebarOverlay) {
        clearBtn.addEventListener('click', function() {
            sidebarOverlay.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        });
    }

});

