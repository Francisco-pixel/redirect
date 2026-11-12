    import enlaces from '../../enlaces.json' with { type: 'json' };
    const DOM = {
            SPINNER: '#spinner',
            ERROR_ICON:'#error-icon',
            TITLE:'#title',
            MESSAGE:'#message',
            BTN_HOME:'#btn-home'
        };

    const MESSAGE={
        MESSAGE:'El enlace corto que buscas no existe o ha expirado.',
        TITLE:'Enlace no encontrado',
    }   
    
    const STYLE={
        SPINNER:'none',
        ERROR_ICON:'block',
        BTN_HOME:'inline-block'
    }
    // Mapa de URLs
    const shortUrls = enlaces.reduce((acc,item)=>{
      const [key,label,link]=item;
      acc[key]=link;
      return acc;
    },{});

    // Obtener el código de la URL (ej: /redirect/google -> google)
    const code = location.pathname.split('/').filter(Boolean).at(-1) || '';

    if (code && shortUrls[code]) {
      // El enlace existe -> Redirigir
      const target = shortUrls[code];
      const sep = target.includes('?') ? '&' : '?';
      
      // Pequeño delay para que se vea la animación (opcional, quita el setTimeout si quieres inmediatez)
      setTimeout(() => {
        location.replace(target + sep + 't=' + Date.now());
      }, 600); 

    } else {
      // El enlace NO existe -> Cambiar a UI de error
      document.title = MESSAGE.TITLE;
      
      // Ocultar spinner y mostrar error
      document.querySelector(DOM.SPINNER).style.display =STYLE.SPINNER;
      document.querySelector(DOM.ERROR_ICON).style.display = STYLE.ERROR_ICON;
      
      // Cambiar textos
      document.querySelector(DOM.TITLE).innerText = MESSAGE.TITLE;
      document.querySelector(DOM.MESSAGE).innerText = MESSAGE.MESSAGE;
      
      // Mostrar botón para volver
      document.querySelector(DOM.BTN_HOME).style.display = STYLE.BTN_HOME;
    }