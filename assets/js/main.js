import { initIndex } from './index.js';
import { init404 } from './404.js';

// 1. Analizamos la URL
const path = location.pathname;
const lastSegment = path.split('/').filter(Boolean).pop() || '';

// Es un enlace corto si no es la raíz y no tiene extensión de archivo (ej: .html, .css)
const isShortLink = lastSegment !== '' && !lastSegment.includes('.');

if (isShortLink) {
    // 2. Si es un enlace corto, nos aseguramos de que exista la UI del 404
    if (!document.getElementById('spinner')) {
        // Si no existe (porque el servidor cargó el index.html), la inyectamos
        document.body.innerHTML = `
            <main class="card" id="card">
                <div class="spinner" id="spinner"></div>
                <div class="error-icon" id="error-icon">🚀</div>
                <h1 id="title">Redirigiendo...</h1>
                <p class="subtitle" id="message">Por favor, espera un momento.</p>
                <a href="./" class="btn" id="btn-home">Volver al inicio</a>
            </main>
        `;
    }
    // 3. Ejecutamos la lógica de redirección
    init404();
} else {
    // 4. Si es la raíz, ejecutamos el index
    initIndex();
}