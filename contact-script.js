// الانتظار حتى تحميل عناصر الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        // الاستماع لحدث إرسال النموذج (Submit)
        contactForm.addEventListener('submit', function(event) {
            // منع الصفحة من إعادة التحميل التلقائي
            event.preventDefault(); 
            
            // جلب الاسم الذي كتبه المستخدم في الخانة
            const userName = document.getElementById('name').value;
            
            // إظهار تنبيه تفاعلي ترحيبي يوضح نجاح العملية
            alert(`شكراً لك يا ${userName}! تم إرسال رسالتك بنجاح إلى إدارة مدرسة دير أبي سعيد.`);
            
            // إعادة تعيين وتفريغ خانات الفورم بالكامل
            contactForm.reset();
        });
    }
});