
function mostrarSesion(sesionId) {
    const sesiones = document.querySelectorAll('.session');
    sesiones.forEach(sesion => (sesion.style.display = 'none'));

    const sesionActiva = document.getElementById(sesionId);
    if (sesionActiva) {
        sesionActiva.style.display = 'block';
    }
}

window.onload = function () {
    mostrarSesion('Biblioteca'); 
};

function redirectToURL() {
    const url = "https://www.google.com"; 
    window.location.href = url;
}
