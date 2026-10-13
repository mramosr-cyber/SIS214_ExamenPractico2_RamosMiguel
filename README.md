# SIS214_ExamenPractico2_RamosMiguel

**Estudiante:** Miguel Mateo Ramos Rodas  
**Carrera:** Ingeniería de Sistemas  
**Universidad:** Universidad Católica Boliviana "San Pablo"  
**Asignatura:** Tecnologías Web I (SIS-214)

---

## Enlaces del Proyecto
- **Despliegue en Producción (GitHub Pages):** [https://mramosr-cyber.github.io/SIS214_ExamenPractico2_RamosMiguel/]
- **Repositorio en GitHub:** [https://github.com/mramosr-cyber/SIS214_ExamenPractico2_RamosMiguel.git]

---

## Descripción General
Este proyecto consiste en el diseño, arquitectura e implementación de una Landing Page interactiva orientada a un Portafolio Profesional personal. Desarrollado bajo estándares profesionales de ingeniería de frontend, el proyecto integra una estructura semántica HTML5 accesible, un diseño web adaptativo (Mobile-First) con CSS3, y lógica de negocio ejecutada en el navegador mediante JavaScript moderno (ES6+).

---

## Tecnologías y Herramientas Utilizadas
- **HTML5:** Marcado semántico y estructuración de la información.
- **CSS3:** Arquitectura basada en tokens de diseño (Variables CSS), CSS Grid, Flexbox y Media Queries (Mobile-First).
- **JavaScript (ES6+):** Manipulación del DOM, asincronía (Fetch API, async/await), tuberías funcionales (`.map`, `.filter`) y almacenamiento local.
- **Git y GitHub:** Control de versiones y despliegue continuo.

---

## Arquitectura de la Solución y Lógica (JavaScript)
La aplicación fue desarrollada de forma modular cumpliendo con las siguientes funcionalidades interactivas:

1. **Conmutador de Tema (Dark / Light Mode):** Alternancia de clases en el DOM con persistencia del estado visual mediante `localStorage` y serialización JSON.
2. **Menú Hamburguesa Responsivo:** Navegación adaptativa para móviles con control dinámico del atributo de accesibilidad `aria-expanded`.
3. **Filtro Dinámico en Tiempo Real:** Buscador de proyectos que garantiza la inmutabilidad de los datos originales utilizando métodos funcionales (`.filter()` encadenado con `.map()`).
4. **Validación Interactiva de Formulario:** Intercepción del evento `submit` mediante `event.preventDefault()` y validación al vuelo utilizando el evento `input`.
5. **Módulo Asíncrono (API REST):** Consumo de la API pública de GitHub mediante `Fetch API` y `async/await`, con un robusto manejo de errores (`try...catch`), validación de códigos HTTP y gestión de los estados de interfaz (Cargando, Éxito, Error).

---

## Accesibilidad y Estructura Semántica (HTML5)
Se siguieron rigurosamente las pautas de accesibilidad web (WCAG):
- **Estructura semántica:** Uso exclusivo de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, y `<footer>`.
- **Enlace de salto accesible (Skip Link):** Permite a los lectores de pantalla ir directamente al contenido principal.
- **Atributos WAI-ARIA:** Implementación de `aria-label`, `aria-labelledby`, `aria-describedby` y `aria-expanded` en componentes dinámicos.
- **Asociación de formularios y multimedia:** Campos vinculados con `<label for="...">` y textos alternativos (`alt`) en imágenes.

---

## Instrucciones para Ejecución Local

Para visualizar y ejecutar este proyecto en un entorno local, sigue estos pasos:

1. Clona este repositorio en tu máquina local usando la terminal:
   ```bash
   git clone [https://github.com/tu-usuario/SIS214_ExamenPractico2_RamosMiguel.git](https://github.com/tu-usuario/SIS214_ExamenPractico2_RamosMiguel.git)