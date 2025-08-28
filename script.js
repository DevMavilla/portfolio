// Configuração do particles.js
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            // ALTERAÇÃO AQUI: Troquei a cor para laranja
            color: { value: "ff8000" },  // Código hexadecimal para laranja
            shape: { type: "circle", stroke: { width: 0, color: "#ffffffff" } },
            opacity: { value: 1.5, random: false },
            size: { value: 10, random: true },
            line_linked: {
                enable: true,
                distance: 250,
                // ALTERAÇÃO AQUI: Troquei a cor das linhas para laranja
                color: "#ff8000",  // Código hexadecimal para laranja
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 10, line_linked: { opacity: 2 } },
                push: { particles_nb: 10 }
            }
        },
        retina_detect: true
    });
    
    // O restante do seu código permanece igual...
    // Navegação suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Filtro de projetos
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Em um projeto real, aqui seria implementada a filtragem dos projetos
        });
    });
    
    // Animação ao scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.project-card, .skill-category').forEach(el => {
        observer.observe(el);
    });
    
    // Formulário de contato
    const form = document.getElementById('form-contato');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        form.reset();
    });
});
