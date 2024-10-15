// Change navbar style on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Quote slider logic
let quotes = document.querySelectorAll('.quote');
let currentQuoteIndex = 0;

function showNextQuote() {
    quotes[currentQuoteIndex].style.display = 'none';
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quotes[currentQuoteIndex].style.display = 'block';
}

// Change quote every 5 seconds
setInterval(showNextQuote, 5000);


