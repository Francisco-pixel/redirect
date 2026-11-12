// main.js
import { initIndex } from './index.js';
import { init404 } from './404.js';

// 1. Obtenemos el último pedazo de la URL (ej: "google", "index.html", "")
const path = location.pathname;
const lastSegment = path.split('/').filter(Boolean).pop() || '';

const isShortLink = lastSegment !== '' && !lastSegment.includes('.');


if (isShortLink) {
    init404(); 
} else {
    initIndex();
}