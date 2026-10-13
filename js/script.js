
document.addEventListener('DOMContentLoaded', () => {
    const btnTema = document.getElementById('btn_modo');
    const cuerpoDocumento = document.body;


    const temaGuardado = JSON.parse(localStorage.getItem('temaOscuro'));
    if (temaGuardado) {
        cuerpoDocumento.classList.add('modo_oscuro');
        btnTema.textContent = '☀️ Modo Claro';
    }

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

    const btnMenu = document.getElementById('btn_menu');
    const menuPrincipal = document.getElementById('menu_principal');

    btnMenu.addEventListener('click', () => {
        // Alternar clase de visibilidad
        menuPrincipal.classList.toggle('menu-visible');
        
        // Mutar dinámicamente aria-expanded (Requisito de rúbrica)
        const estaExpandido = menuPrincipal.classList.contains('menu-visible');
        btnMenu.setAttribute('aria-expanded', estaExpandido.toString());
    });

    // --- 3. Filtro Dinámico de Proyectos ---
    const proyectosDatos = [
        {
            titulo: "Welcome to terrifier",
            descripcion: "Juego basado en las películas de Terrifier. Búsqueda de reliquias y mecánicas de escape.",
            tecnologias: ["C++", "Visual Studio Code"],
            rol: "Programador del funcionamiento del enemigo",
            estado: "en desarrollo"
        },
        {
            titulo: "Wikipedia de Futbol",
            descripcion: "Espacio con información del mundial, equipos, estadios y un quiz interactivo.",
            tecnologias: ["Java", "Eclipse"],
            rol: "Programador del cuestionario (POO)",
            estado: "en desarrollo"
        }
    ];

    const contenedorProyectos = document.getElementById('contenedor_proyectos');
    const inputBuscador = document.getElementById('buscador_proyectos');

    // Función para renderizar usando .map() y tuberías funcionales
    const renderizarProyectos = (proyectos) => {
        contenedorProyectos.innerHTML = proyectos.map(proyecto => `
            <article style="margin-top: 15px; padding: 10px; border: 1px solid var(--color-bordes-tablas);">
                <h3>${proyecto.titulo}</h3>
                <p>${proyecto.descripcion}</p>
                <p><strong>Tecnologías:</strong> ${proyecto.tecnologias.join(', ')}</p>
                <p><strong>Rol:</strong> ${proyecto.rol}</p>
                <p><h6>Enlace:</h6> <mark>${proyecto.estado}</mark></p>
            </article>
        `).join('');
    };

    // Renderizado inicial
    renderizarProyectos(proyectosDatos);

    // Evento input para buscar en tiempo real usando .filter()
    inputBuscador.addEventListener('input', (evento) => {
        const termino = evento.target.value.toLowerCase();
        
        // Inmutabilidad garantizada: filtramos el array original sin alterarlo
        const proyectosFiltrados = proyectosDatos.filter(proyecto => 
            proyecto.titulo.toLowerCase().includes(termino) || 
            proyecto.tecnologias.some(tec => tec.toLowerCase().includes(termino))
        );
        
        renderizarProyectos(proyectosFiltrados);
    });

    // --- 4. Validación en Tiempo Real ---
    const inputNombre = document.getElementById('nombre');
    const errorNombre = document.getElementById('error_nombre');
    const inputEmail = document.getElementById('email');
    const errorEmail = document.getElementById('error_email');

    inputNombre.addEventListener('input', () => {
        if (inputNombre.validity.patternMismatch || inputNombre.value.trim() === '') {
            errorNombre.style.display = 'block';
        } else {
            errorNombre.style.display = 'none';
        }
    });

    inputEmail.addEventListener('input', () => {
        if (inputEmail.validity.typeMismatch || inputEmail.value.trim() === '') {
            errorEmail.style.display = 'block';
        } else {
            errorEmail.style.display = 'none';
        }
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