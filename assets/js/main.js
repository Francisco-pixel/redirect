import { initIndex } from './index.js';
import { init404 } from './404.js';

const initializers = {
    'index': initIndex,
    '404': init404,
};

const {page} = document.body.dataset;
initializers[page]?.();