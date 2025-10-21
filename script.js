// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date('January 31, 2026 08:30:00').getTime();
    
    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance < 0) {
            document.getElementById('countdown').innerHTML = '<h3 style="color: var(--primary-color);">Kami sudah menikah! 🎉</h3>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    };
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

updateCountdown();

// Navbar removed for cleaner design

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('.couple-card, .detail-card, .gallery-item, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Music Player Toggle
let isPlaying = false;
const musicPlayer = document.getElementById('musicPlayer');
const bgMusic = document.getElementById('bgMusic');

musicPlayer.addEventListener('click', () => {
    isPlaying = !isPlaying;
    
    if (isPlaying) {
        musicPlayer.innerHTML = '<i class="fas fa-pause"></i>';
        musicPlayer.style.animation = 'spin 3s linear infinite';
        bgMusic.play().catch(e => console.log('Audio play failed:', e));
    } else {
        musicPlayer.innerHTML = '<i class="fas fa-music"></i>';
        musicPlayer.style.animation = '';
        bgMusic.pause();
    }
});

// Add spin animation for music player
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Parse URL Parameters for Personalized Invitation
function getUrlParameters() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name') || params.get('n'),
        pax: params.get('pax') || params.get('p') || params.get('guests') || params.get('g')
    };
}

// Initialize Personalized RSVP
function initializePersonalizedRSVP() {
    const { name, pax } = getUrlParameters();
    
    if (name) {
        const decodedName = decodeURIComponent(name);
        
        // Display guest info in hero greeting
        const heroGreeting = document.getElementById('heroGreeting');
        const heroGuestName = document.getElementById('heroGuestName');
        if (heroGreeting && heroGuestName) {
            heroGuestName.textContent = decodedName;
            heroGreeting.style.display = 'block';
        }
        
        // Display guest info in RSVP section
        document.getElementById('guestName').textContent = decodedName;
        document.getElementById('guestNameHidden').value = decodedName;
        
        if (pax) {
            const paxText = `${pax} Pax`;
            document.getElementById('guestPax').textContent = paxText;
            document.getElementById('guestPaxHidden').value = pax;
        } else {
            document.getElementById('guestPax').textContent = '1 Pax';
            document.getElementById('guestPaxHidden').value = '1';
        }
        
        // Show guest info section
        document.getElementById('guestInfo').style.display = 'block';
    } else {
        // No personalized link - show generic message
        document.getElementById('guestName').textContent = 'Tamu Undangan';
        document.getElementById('guestPax').textContent = '1 Pax';
        document.getElementById('guestPaxHidden').value = '1';
        document.getElementById('guestInfo').style.display = 'block';
    }
}

// Initialize on page load
initializePersonalizedRSVP();

// Hero Slideshow
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Ganti slide setiap 5 detik
    setInterval(nextSlide, 5000);
}

// Start slideshow when page loads
initHeroSlideshow();

// Attendance Button Selection
const attendanceBtns = document.querySelectorAll('.attendance-btn');
const attendanceInput = document.getElementById('attendance');
const submitBtn = document.getElementById('submitBtn');

attendanceBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        attendanceBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Set hidden input value
        attendanceInput.value = this.dataset.value;
        
        // Enable submit button
        submitBtn.disabled = false;
    });
});

// RSVP Form Submission
const rsvpForm = document.getElementById('rsvpForm');
const rsvpSuccess = document.getElementById('rsvpSuccess');
const successMessage = document.getElementById('successMessage');

rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(rsvpForm);
    const data = Object.fromEntries(formData);
    
    // Prepare data for submission
    const rsvpData = {
        name: data.guestName,
        pax: data.guestPax,
        attendance: data.attendance,
        message: data.message || '',
        timestamp: new Date().toISOString()
    };
    
    // Log data (for testing)
    console.log('RSVP Data:', rsvpData);
    
    // Update success message based on attendance
    if (data.attendance === 'yes') {
        successMessage.textContent = `Terima kasih ${data.guestName}! Kami sangat menantikan kehadiran Anda di hari bahagia kami! 🎉`;
    } else {
        successMessage.textContent = `Terima kasih ${data.guestName} atas konfirmasinya. Kami akan merindukan kehadiran Anda. ❤️`;
    }
    
    // Show success message
    document.getElementById('guestInfo').style.display = 'none';
    rsvpForm.style.display = 'none';
    rsvpSuccess.classList.add('show');
    
    // Here you can integrate with your backend
    // Example options:
    
    // 1. Google Sheets (using Google Apps Script)
    // fetch('YOUR_GOOGLE_SCRIPT_URL', {
    //     method: 'POST',
    //     body: JSON.stringify(rsvpData)
    // });
    
    // 2. EmailJS
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', rsvpData);
    
    // 3. Your own backend API
    // fetch('/api/rsvp', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(rsvpData)
    // });
    
    // Scroll to success message
    rsvpSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Gallery lightbox effect (simple version)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // You can add a lightbox library like GLightbox or implement your own
        console.log('Gallery item clicked');
        // For now, just add a subtle animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Parallax effect removed for better scrolling experience

// Navigation removed - smooth scroll experience

// Add confetti effect on page load (optional)
window.addEventListener('load', () => {
    // You can add a confetti library like canvas-confetti
    // For now, we'll just log it
    console.log('Wedding invitation loaded! 💒💍');
});

// Form validation enhancement
const inputs = document.querySelectorAll('.rsvp-form input, .rsvp-form select, .rsvp-form textarea');

inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#ff6b6b';
        } else {
            this.style.borderColor = '#e0e0e0';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--primary-color)';
    });
});

// Add floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.opacity = '0.6';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.transition = 'all 3s ease-in';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.bottom = '110vh';
        heart.style.opacity = '0';
    }, 100);
    
    setTimeout(() => {
        heart.remove();
    }, 3100);
}

// Create hearts periodically
setInterval(createHeart, 3000);

// Print detection
window.addEventListener('beforeprint', () => {
    console.log('Printing wedding invitation...');
});

// Copy invitation link
function copyInvitationLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('Invitation link copied to clipboard! 📋');
    });
}

// You can add a share button that calls this function
// Example: <button onclick="copyInvitationLink()">Share Invitation</button>

console.log('Wedding Invitation Script Loaded ✨');
console.log('Livia Fyoni Kemit & William Surya Darma - 31 Januari 2026');

