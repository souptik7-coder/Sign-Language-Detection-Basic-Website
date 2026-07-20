const title = document.getElementById("title");
const text = title.textContent;

let index = 0;
let deleting = false;

function typeEffect() {

    if (!deleting) {
        title.textContent = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
            deleting = true;
            setTimeout(typeEffect, 1500); // Pause after typing
            return;
        }
    } else {
        title.textContent = text.substring(0, index - 1);
        index--;

        if (index === 0) {
            deleting = false;
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}

window.onload = typeEffect;

// Image Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeModal = document.querySelector(".close-modal");
    
    const snapshotImages = document.querySelectorAll('.snapshots img');
    
    snapshotImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "flex";
            modal.style.justifyContent = "center";
            modal.style.alignItems = "center";
            
            // Allow display to apply before adding show class for transition
            setTimeout(() => {
                modal.classList.add("show");
            }, 10);
            
            modalImg.src = this.src;
        });
    });
    
    function closeImageModal() {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300); // Match CSS transition duration
    }
    
    closeModal.addEventListener('click', closeImageModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeImageModal();
        }
    });

    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                themeBtn.textContent = '🌙 Dark Mode';
            } else {
                themeBtn.textContent = '☀️ Light Mode';
            }
        });
    }

    // Hamburger Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});