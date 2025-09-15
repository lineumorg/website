// Main JavaScript functionality for the Lineum donation page

// Navigation scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navigation');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Donation ticker functionality
let currentAmount = 12345;
const goalAmount = 500000;

function updateDonationTicker() {
    // Simulate live updates (in real implementation, this would fetch from Giveth API)
    const randomIncrease = Math.random() * 100;
    currentAmount += randomIncrease;
    
    const formattedAmount = formatCurrency(currentAmount);
    document.getElementById('currentAmount').textContent = formattedAmount;
    
    const progressPercentage = Math.min((currentAmount / goalAmount) * 100, 100);
    document.getElementById('progressFill').style.width = progressPercentage + '%';
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(Math.floor(amount));
}

// Initialize ticker and set up periodic updates
updateDonationTicker();
setInterval(updateDonationTicker, 10000); // Update every 10 seconds

// FAQ functionality
let openFAQ = 0; // First FAQ starts open

function toggleFAQ(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    
    // Close currently open FAQ if it's different from clicked one
    if (openFAQ !== null && openFAQ !== index) {
        const currentAnswer = document.getElementById(`faq-answer-${openFAQ}`);
        const currentIcon = document.getElementById(`faq-icon-${openFAQ}`);
        currentAnswer.classList.remove('open');
        currentIcon.classList.remove('rotated');
    }
    
    // Toggle clicked FAQ
    if (openFAQ === index) {
        // Close if same FAQ is clicked
        answer.classList.remove('open');
        icon.classList.remove('rotated');
        openFAQ = null;
    } else {
        // Open new FAQ
        answer.classList.add('open');
        icon.classList.add('rotated');
        openFAQ = index;
    }
}

// Initialize first FAQ as open
document.addEventListener('DOMContentLoaded', () => {
    const firstAnswer = document.getElementById('faq-answer-0');
    const firstIcon = document.getElementById('faq-icon-0');
    if (firstAnswer && firstIcon) {
        firstAnswer.classList.add('open');
        firstIcon.classList.add('rotated');
    }
});

// Animate progress bars when they come into view
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.bar-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateProgressBars();
});

// Add click handlers for external links
function setupExternalLinks() {
    // Social media links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(link.href, '_blank');
        });
    });
}

// Initialize external links
document.addEventListener('DOMContentLoaded', setupExternalLinks);

// Add subtle parallax effect to hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-bg-img');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add entrance animations for cards when they come into view
function setupScrollAnimations() {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', setupScrollAnimations);

// Button hover effects
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            if (!button.classList.contains('btn-donation')) {
                button.style.transform = 'translateY(0)';
            }
        });
    });
});

// Error handling for missing images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', () => {
            console.warn(`Failed to load image: ${img.src}`);
            // You could set a fallback image here
            // img.src = 'fallback-image.jpg';
        });
    });
});
