
document.addEventListener('DOMContentLoaded', () => {
    const btnTema = document.getElementById('btn_modo');
    const cuerpoDocumento = document.body;

    // 1. Cargar preferencia guardada
    const temaGuardado = JSON.parse(localStorage.getItem('temaOscuro'));
    if (temaGuardado) {
        cuerpoDocumento.classList.add('modo_oscuro');
        btnTema.textContent = '☀️ Modo Claro';
    }

    // 2. Alternar y guardar preferencia
    btnTema.addEventListener('click', () => {
        cuerpoDocumento.classList.toggle('modo_oscuro');
        const esOscuro = cuerpoDocumento.classList.contains('modo_oscuro');
        
        if (esOscuro) {
            btnTema.textContent = '☀️ Modo Claro';
        } else {
            btnTema.textContent = '🌙 Modo Oscuro';
        }
        
        // Guardar en localStorage usando JSON.stringify
        localStorage.setItem('temaOscuro', JSON.stringify(esOscuro));
    });

    const formulario = document.getElementById('formulario_contacto');

    formulario.addEventListener('submit', (evento) => {

        evento.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const aceptacion = document.getElementById('aceptacion').checked;

        if (nombre == '' || email == '' || mensaje == '' || telefono == '') {
            alert('Complete todos los campos de texto obligatorios.');
            return;
        }

        // Validación 2: Casilla de términos y condiciones
        if (!aceptacion) {
            alert('Debe aceptar las condiciones para enviar su  mensaje.');
            return; 
        }

        alert('¡Mensaje enviado con éxito!.');
        formulario.reset();
    });

});