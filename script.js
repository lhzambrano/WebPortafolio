// Inicializar EmailJS
(function() {
    emailjs.init('tGOAF0eWwy_L1g8er8'); 
})();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Enviar formulario
document.getElementById("form-contacto").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm('service_d54sxgh', 'template_b05zpuv', this)
        .then(function() {
            document.getElementById("respuesta").innerHTML = "Mensaje enviado correctamente 🎉";
            document.getElementById("form-contacto").reset();
        }, function(error) {
            document.getElementById("respuesta").innerHTML = "Error al enviar el mensaje 😞";
            console.error("Error:", error);
        });
});

// Toggle menú responsive
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Mostrar u ocultar el botón Ir Arriba
window.addEventListener('scroll', () => {
    const botonArriba = document.getElementById('ir-arriba');
    if (window.scrollY > 300) {
        botonArriba.style.display = 'block';
    } else {
        botonArriba.style.display = 'none';
    }
});

// Scroll suave al hacer clic en Ir Arriba
document.getElementById('ir-arriba').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});