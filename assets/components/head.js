class AppHead extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Mi Proyecto';
        const cssAttr = this.getAttribute('css') || 'main';
        
        const cssLinks = cssAttr.split(',')
            .map(css => css.trim())
            .filter(css => css)
            .map(css => `<link rel="stylesheet" href="./assets/css/${css}.css?t=${Date.now()}">`)
            .join('');

        this.innerHTML = `
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
            ${cssLinks}
          </head>
        `;
    }
}

customElements.define('app-head', AppHead);