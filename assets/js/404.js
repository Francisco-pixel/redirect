import enlaces from '../../enlaces.json' with { type: 'json' };

export function init404() {
    const DOM = {
        SPINNER: '#spinner',
        ERROR_ICON: '#error-icon',
        TITLE: '#title',
        MESSAGE: '#message',
        BTN_HOME: '#btn-home'
    };

    const MESSAGE = {
        MESSAGE: 'El enlace corto que buscas no existe o ha expirado.',
        TITLE: 'Enlace no encontrado'
    };

    const STYLE = {
        SPINNER: 'none',
        ERROR_ICON: 'block',
        BTN_HOME: 'inline-block'
    };

    // Mapa de URLs
    const shortUrls = enlaces.reduce((acc, item) => {
        const [key, label, link] = item;
        acc[key] = link;
        return acc;
    }, {});

    // Obtener el código de la URL (ej: /redirect/google -> google)
    const code = location.pathname.split('/').filter(Boolean).at(-1) || '';

    if (code && shortUrls[code]) {
        const target = shortUrls[code];
        const sep = target.includes('?') ? '&' : '?';
        
        setTimeout(() => {
            location.replace(target + sep + 't=' + Date.now());
        }, 600); 

    } else {
        document.title = MESSAGE.TITLE;
        
        document.querySelector(DOM.SPINNER).style.display = STYLE.SPINNER;
        document.querySelector(DOM.ERROR_ICON).style.display = STYLE.ERROR_ICON;
        
        document.querySelector(DOM.TITLE).innerText = MESSAGE.TITLE;
        document.querySelector(DOM.MESSAGE).innerText = MESSAGE.MESSAGE;
        
        // Calcular la ruta raíz para el botón de volver
        const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
        const btnHome = document.querySelector(DOM.BTN_HOME);
        btnHome.href = basePath;
        btnHome.style.display = STYLE.BTN_HOME;
    }
}