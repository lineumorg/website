
‎    // Intersection Observer for fade-in animations
‎    const observerOptions = {
‎        threshold: 0.1,
‎        rootMargin: '0px 0px -50px 0px'
‎    };
‎    
‎    const observer = new IntersectionObserver(function(entries) {
‎        entries.forEach(entry => {
‎            if (entry.isIntersecting) {
‎                entry.target.style.opacity = '1';
‎                entry.target.style.transform = 'translateY(0)';
‎            }
‎        });
‎    }, observerOptions);
‎    
‎    // Observe all fade-in elements
‎    document.querySelectorAll('.fade-in, .fade-in-delay-1, .fade-in-delay-2, .fade-in-delay-3, .fade-in-delay-4, .fade-in-delay-5, .fade-in-delay-6').forEach(el => {
‎        observer.observe(el);
‎    });
‎
‎    // Add hover effects for feature cards
‎    const featureCards = document.querySelectorAll('.feature-card');
‎    featureCards.forEach(card => {
‎        card.addEventListener('mouseenter', function() {
‎            this.style.transform = 'translateY(-0.5rem)';
‎        });
‎        
‎        card.addEventListener('mouseleave', function() {
‎            this.style.transform = 'translateY(0)';
‎        });
‎    });
‎    
‎    // Add hover effects for field items
‎    const fieldItems = document.querySelectorAll('.field-item');
‎    fieldItems.forEach(item => {
‎        item.addEventListener('mouseenter', function() {
‎            this.style.transform = 'translateY(-0.25rem)';
‎        });
‎        
‎        item.addEventListener('mouseleave', function() {
‎            this.style.transform = 'translateY(0)';
‎        });
‎    });
‎    
‎    // Add click tracking for external links (optional analytics)
‎    const externalLinks = document.querySelectorAll('a[target="_blank"]');
‎    externalLinks.forEach(link => {
‎        link.addEventListener('click', function() {
‎            const destination = this.href;
‎            console.log('External link clicked:', destination);
‎            // Add your analytics tracking code here if needed
‎        });
‎    });
‎});
