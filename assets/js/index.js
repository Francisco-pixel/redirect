        import enlaces from '../../enlaces.json' with { type: 'json' };
        import {createTag} from './helpers.js';
        const DOM = {
            CONTAINER: '#links-container',
            A:'a'
        };
        
        const BASE_URL = '/redirect/';

        const container = document.querySelector(DOM.CONTAINER);

        enlaces.forEach(([code, label]) => {
            const propertys={
                href:`${BASE_URL}${code}`,
                textContent:label
            }
            const a = crearTag(DOM.A,propertys);
            container.appendChild(a);
        });