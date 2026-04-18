// Chờ cho trang web tải xong hoàn toàn
document.addEventListener('DOMContentLoaded', () => {
    
    // ===== XỬ LÝ CÁC NÚT CLICKABLE =====
    const buttons = document.querySelectorAll('.clickable');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.innerText;
            console.log(`Bạn đã nhấn vào nút: ${buttonText}`);
            alert(`Cảm ơn bạn đã quan tâm đến ${buttonText}!`);
        });
    });

    // ===== SMOOTH SCROLL CHO NAVIGATION =====
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== SCROLL ANIMATION - FADE IN =====
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

    // Áp dụng animation cho các elements
    const animatedElements = document.querySelectorAll(
        '.service-card, .portfolio-card, .process-step, .pricing-card, .feedback-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== XỬ LÝ PRICING BUTTONS =====
    const pricingButtons = document.querySelectorAll('.pricing-btn');
    pricingButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const cardName = btn.closest('.pricing-card').querySelector('.pricing-name').textContent;
            console.log(`Đã chọn gói: ${cardName}`);
            alert(`Bạn đã chọn gói ${cardName}. Chúng tôi sẽ liên hệ với bạn sớm!`);
        });
    });

    // ===== PARALLAX EFFECT CHO HERO VIDEO =====
    const heroSection = document.querySelector('section');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (heroSection && scrolled < window.innerHeight) {
            const video = heroSection.querySelector('video');
            if (video) {
                video.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        }
    });

    // ===== HOVER EFFECT CHO SERVICE CARDS =====
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 20px 60px rgba(37, 99, 235, 0.15)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = 'none';
        });
    });

    // ===== COUNTER ANIMATION (nếu có số liệu) =====
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = Math.floor(target);
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    // ===== LOADING ANIMATION =====
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    console.log('🚀 EOS Landing Page đã sẵn sàng!');
});
