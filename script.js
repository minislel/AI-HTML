document.addEventListener("DOMContentLoaded", function() {
    const learnMoreButton = document.getElementById('learn-more');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function() {
            window.location.href = 'gallery.html';
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.');
            contactForm.reset();
        });
    }

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageUrl = this.style.backgroundImage.slice(5, -2);
            if (imageUrl) {
                const modal = document.createElement('div');
                modal.classList.add('modal');
                modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <img src="${imageUrl}" alt="Zoomed Image">
                    </div>
                `;
                document.body.appendChild(modal);

                const closeButton = modal.querySelector('.close');
                closeButton.addEventListener('click', function() {
                    modal.remove();
                });
            }
        });
    });

    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    // 3D Canvas Drawing
    const canvas = document.getElementById('canvas3d');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        // Przykladowa grafika 3D
        function draw3DShape() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#FF0000';
            ctx.beginPath();
            ctx.moveTo(75, 25);
            ctx.lineTo(125, 75);
            ctx.lineTo(75, 125);
            ctx.lineTo(25, 75);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = '#00FF00';
            ctx.beginPath();
            ctx.moveTo(75, 25);
            ctx.lineTo(75, 125);
            ctx.lineTo(25, 75);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = '#0000FF';
            ctx.beginPath();
            ctx.moveTo(75, 25);
            ctx.lineTo(125, 75);
            ctx.lineTo(75, 125);
            ctx.closePath();
            ctx.fill();
        }

        draw3DShape();
    }
});
