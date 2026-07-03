/**
 * Rosemary Rashidatu Ohenlen Portfolio Engine
 * Built using Vanilla ES6+ JS
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Sticky Navigation Scroll Observer ---
    const navbar = document.getElementById('sticky-navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.remove('py-5', 'border-transparent');
            navbar.classList.add('py-3.5', 'bg-[#050508]/80', 'backdrop-blur-md', 'border-slate-900/80', 'shadow-2xl');
        } else {
            navbar.classList.remove('py-3.5', 'bg-[#050508]/80', 'backdrop-blur-md', 'border-slate-900/80', 'shadow-2xl');
            navbar.classList.add('py-5', 'border-transparent');
        }
    });

    // --- 2. Mobile Drawer Controls ---
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const menuIcon = document.getElementById('menu-icon');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function toggleMobileMenu() {
        const isMenuOpen = mobileMenuOverlay.classList.contains('flex');
        
        if (!isMenuOpen) {
            mobileMenuOverlay.classList.remove('hidden');
            mobileMenuOverlay.classList.add('flex');
            document.body.classList.add('overflow-hidden');
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            mobileMenuOverlay.classList.remove('flex');
            mobileMenuOverlay.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    }

    menuToggleBtn.addEventListener('click', toggleMobileMenu);

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuOverlay.classList.contains('flex')) {
                toggleMobileMenu();
            }
        });
    });

    // --- 3. Viewport Scroll Fade-In Animations ---
    const revealElements = document.querySelectorAll('.reveal-element');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});