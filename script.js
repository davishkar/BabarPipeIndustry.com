document.addEventListener('DOMContentLoaded', function() {
    // Simple JavaScript for hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

   /* document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });*/
    
    
    // Smooth scrolling for in-page links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Adjust offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});

