class AppHead extends HTMLElement {
    connectedCallback() {
        // Evitamos que el componente se procese dos veces
        if (this.hasChildNodes() || document.querySelector('meta[charset]')) return;

        const title = this.getAttribute('title') || 'Mi Proyecto';
        const cssAttr = this.getAttribute('css') || 'main';

        // 1. Inyectar el Título en el <head> real
        document.title = title;

        // 2. Inyectar los Meta tags
        const metaCharset = document.createElement('meta');
        metaCharset.setAttribute('charset', 'UTF-8');
        document.head.appendChild(metaCharset);

        const metaViewport = document.createElement('meta');
        metaViewport.setAttribute('name', 'viewport');
        metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        document.head.appendChild(metaViewport);

        // 3. Inyectar la fuente de Google
        const fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap';
        document.head.appendChild(fontLink);

        // 4. Inyectar los CSS dinámicos
        cssAttr.split(',')
            .map(css => css.trim())
            .filter(css => css)
            .forEach(css => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                // Nota: Quité el ?t=Date.now() porque no lo necesitas si usas el .nojekyll, 
                // pero puedes volver a ponerlo si estás en fase de pruebas.
                link.href = `./assets/css/${css}.css`; 
                document.head.appendChild(link);
            });

        // 5. Ocultamos la etiqueta <app-head> del <body>
        this.style.display = 'none'; 
    }
}

customElements.define('app-head', AppHead);