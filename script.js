// شريط التنقل المتحرك
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
        navbar.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    }
    
    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 200) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// قائمة الهاتف المحمول
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// التنقل السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// معالجة نموذج الاتصال
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // الحصول على قيم النموذج
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // التحقق من صحة البيانات
    if (name && email && message) {
        // عرض رسالة نجاح
        alert('شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.');
        
        // إعادة تعيين النموذج
        contactForm.reset();
        
        // في التطبيق الحقيقي، يمكنك إرسال البيانات إلى الخادم هنا
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ name, email, message })
        // });
    } else {
        alert('يرجى ملء جميع الحقول المطلوبة.');
    }
});

// تأثيرات التمرير (Scroll Animations)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// إضافة تأثيرات التمرير للعناصر
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .team-member, .stat-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// تحديث الرابط النشط في شريط التنقل
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// إضافة تأثير hover للبطاقات
document.querySelectorAll('.service-card, .team-member').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// تحسين الأداء: Lazy loading للصور (إذا تم إضافة صور لاحقاً)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback للمتصفحات القديمة
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========== تأثيرات متقدمة ==========

// Counter Animation للأرقام
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
        }
    }, 16);
}

// Observer للأرقام
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const text = entry.target.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            if (number) {
                entry.target.textContent = '0' + (text.includes('+') ? '+' : '') + (text.includes('%') ? '%' : '');
                animateCounter(entry.target, number);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item h3').forEach(stat => {
    counterObserver.observe(stat);
});

// Stagger Animation للعناصر
function staggerAnimation(elements, delay = 100) {
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) scale(1)';
        }, index * delay);
    });
}

// Scroll Reveal متقدم
const scrollRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            if (entry.target.classList.contains('service-card')) {
                entry.target.style.animation = `slideInUp 0.6s ease forwards`;
            }
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

document.querySelectorAll('.service-card, .team-member, .stat-item, .about-text, .contact-info').forEach(el => {
    scrollRevealObserver.observe(el);
});

// Parallax Effect للخلفية
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 800);
    }
});

// Magnetic Button Effect
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0) scale(1)';
    });
});

// Floating Animation للبطاقات
function addFloatingAnimation() {
    document.querySelectorAll('.service-card, .team-member, .stat-item').forEach((card, index) => {
        card.style.animation = `float 6s ease-in-out infinite`;
        card.style.animationDelay = `${index * 0.2}s`;
    });
}

// Mouse Cursor Effect
let cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .service-card, .team-member').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});

// Wave Animation للعناصر
function createWaveEffect(element) {
    element.addEventListener('mouseenter', function() {
        this.style.animation = 'wave 0.6s ease';
    });
}

document.querySelectorAll('.service-card, .team-member').forEach(el => {
    createWaveEffect(el);
});

// Typing Effect للنصوص (اختياري)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Scroll Progress Indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// Ripple Effect للأزرار
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    addFloatingAnimation();
    
    // Stagger animation للخدمات
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) rotateX(10deg)';
        card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
    });
    
    // Stagger animation للفريق
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(30px) scale(0.9)';
        member.style.transition = `all 0.5s ease ${index * 0.15}s`;
    });
});