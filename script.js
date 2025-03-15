// Interactividad básica (por ejemplo, alternar la navegación superpuesta al hacer clic, aunque el sitio original podría usar lógica más compleja)
document.addEventListener('DOMContentLoaded', () => {
    const toggleNav = document.querySelector('.toggle-nav');
    const navSuperpuesta = document.querySelector('.navegacion-superpuesta');

    // Placeholder para alternar la navegación (agrega un botón o menú hamburguesa en HTML si es necesario)
    // toggleNav.addEventListener('click', () => {
    //     navSuperpuesta.style.display = navSuperpuesta.style.display === 'block' ? 'none' : 'block';
    // });

    // Desplazamiento suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});