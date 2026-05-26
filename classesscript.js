document.addEventListener('DOMContentLoaded', () => {
    // قائمة الهاتف المحمول المتجاوبة
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
        });
    }

    // تلوين وتثبيت الـ Navbar تلقائياً
    const navbar = document.getElementById('navbar');
    
    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            // نتحقق إذا كنا في صفحات فرعية مثل الصفوف ليظل الشريط ظاهراً دائماً بلونه الأبيض
            const isSubPage = window.location.pathname.includes('classes.html') || 
                              window.location.pathname.includes('about.html');
            
            if (!isSubPage) {
                navbar.classList.remove('navbar-scrolled');
            }
        }
    };

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll();

    // تأثير حركة نزول وظهور بطاقات الصفوف بسلاسة
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        for (let i = 0; i < revealElements.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = revealElements[i].getBoundingClientRect().top;
            
            if (elementTop < windowHeight - 100) {
                revealElements[i].classList.add('active');
            }
        }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});