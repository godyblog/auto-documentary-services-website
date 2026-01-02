    /* =========================
       MOBILE NAV TOGGLE
       ========================= */
    
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav_menu ul");
    
    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
    
        navToggle.setAttribute("aria-expanded", isOpen);
    });
    
    /* Close menu when a link is clicked (important for UX) */
    const navLinks = navMenu.querySelectorAll("a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            navToggle.setAttribute("aria-expanded", false);
        });
    });
    
    
    /* =========================
       DYNAMIC FOOTER YEAR
       ========================= */
    
    const yearSpan = document.querySelector('.copyright_year');
    
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    
    /* =========================
       WHATSAPP CTA SAFETY
       ========================= */
    
    /*
    This ensures WhatsApp links always open in a new tab,
    even if someone copies and pastes later.
    */
    
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappLinks.forEach(link => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });