class AppHead extends HTMLElement {
    connectedCallback() {
        // Evitar duplicados
        if (document.querySelector('meta[charset]')) return;

        const title = this.getAttribute('title') || 'Mi Proyecto';
        const cssAttr = this.getAttribute('css') || 'main';

        // Convertimos los CSS en etiquetas <link>
        const cssLinks = cssAttr.split(',')
            .map(css => `<link rel="stylesheet" href="./assets/css/${css.trim()}.css">`)
            .join('');

        // Creamos un fragmento de HTML temporal
        const template = document.createElement('template');
        template.innerHTML = `
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
            ${cssLinks}
        `;

        // Movemos todo el contenido del template directamente al <head> de la página
        document.head.appendChild(template.content);
        
        // Ocultamos la etiqueta <app-head> si el navegador la dejó en el body
        this.style.display = 'none';
    }
}

customElements.define('app-head', AppHead);