// ==========================
// CreateLK Website Script
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    // Website loading message
    console.log("CreateLK Website Loaded Successfully");

    // Mobile Menu Toggle Logic
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            // Toggles the menu open/closed
            mainNav.classList.toggle('active');
            
            // Changes the button text dynamically
            if (mainNav.classList.contains('active')) {
                menuToggle.innerHTML = '✕ Close';
            } else {
                menuToggle.innerHTML = '☰ Menu';
            }
        });
    }

    // Smooth scrolling for page anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            
            // Ensures it's an actual anchor link on the page and not just "#"
            if (targetId.length > 1 && document.querySelector(targetId)) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: "smooth"
                });
                
                // If mobile menu is open, close it after clicking a link
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    menuToggle.innerHTML = '☰ Menu';
                }
            }
        });
    });

});

// Simple order button tracking function
function orderMessage() {
    alert("Thank you for choosing CreateLK. We will contact you soon.");
}
