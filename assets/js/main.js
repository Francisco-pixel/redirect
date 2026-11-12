import { initIndex } from './index.js';
import { init404 } from './404.js';

// Verificamos en qué página estamos mirando el DOM
const isHomePage = document.getElementById('links-container') !== null;
const isRedirectPage = document.getElementById('spinner') !== null;

// Ejecutamos la lógica correspondiente
if (isHomePage) {
    initIndex();
} else if (isRedirectPage) {
    init404();
}