import enlaces from '../../enlaces.json' with { type: 'json' };
import { createTag } from './helpers.js';

export function initIndex() {
    const DOM = {
        CONTAINER: '#links-container',
        A: 'a'
    };

    // Ruta dinámica (Ej: "/redirect/" o "/")
    const BASE_URL = './';

    const container = document.querySelector(DOM.CONTAINER);
    
    // Seguridad: si no estamos en el index, no hacemos nada
    if (!container) return;

    enlaces.forEach(([code, label]) => {
        const properties = {
            href: `${BASE_URL}${code}`,
            textContent: label,
            className: 'btn'
        };
        const a = createTag(DOM.A, properties);
        container.appendChild(a);
    });
}