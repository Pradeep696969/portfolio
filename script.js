// 1. Sleek Blend-Mode Cursor Logic
const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    window.requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
});

document.querySelectorAll('a, .btn-glow, .btn-outline').forEach(link => {
    link.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    link.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
});

// 2. High-End 3D Card Tilt Effect
const tiltElements = document.querySelectorAll('.tilt-card, .tilt-element');

tiltElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; 
        const rotateY = ((x - centerX) / centerX) * 10;
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        element.style.transition = 'none'; 
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        element.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'; 
    });
});

// 3. Scroll Reveal Engine
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; 
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();