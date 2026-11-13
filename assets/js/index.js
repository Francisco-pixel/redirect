import enlaces from '../../enlaces.json' with { type: 'json' };
import { createTag } from './helpers.js';

export function initIndex() {
    const DOM = {
        CONTAINER: '#links-container',
        A: 'a',
        P: 'p'
    };

    const BASE_URL = './';
    const container = document.querySelector(DOM.CONTAINER);
    
    if (!container) return;
    
    if (!enlaces || enlaces.length === 0) {
        const emptyMessage = createTag(DOM.P, {
            textContent: 'No hay enlaces disponibles por el momento.',
            className: 'subtitle',
            style: 'margin-top: 1rem;'
        });
        container.appendChild(emptyMessage);
        return; // Detenemos la ejecución
    }

    
    enlaces.forEach(([code, label]) => {
        const a = createTag(DOM.A, {
            href: `${BASE_URL}${code}`,
            textContent: label,
            className: 'btn'
        });
        container.appendChild(a);
    });
}