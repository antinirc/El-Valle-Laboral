// Obteniendo elementos por ID (navegador)
const celdaNavegador = document.getElementById('navegador');
const infoNavegador = navigator.userAgent;

// condicional multiple
if (infoNavegador.includes('Edg/')) { 
    celdaNavegador.textContent = 'Microsoft Edge';
} else if (infoNavegador.includes('Firefox')) { 
    celdaNavegador.textContent = 'Firefox';
} else if (infoNavegador.includes('Chrome/')) { 
    celdaNavegador.textContent = 'Google Chrome';
} else if (infoNavegador.includes('Safari')) { 
    celdaNavegador.textContent = 'Safari';
} else { 
    celdaNavegador.textContent = 'Navegador no identificado';
}

// Obteniendo elementos por ID (Sistema)
const celdaSistema = document.getElementById ('sistema');
const infoSistema = navigator.userAgent;

if (infoSistema.includes ('Windows')){
    celdaSistema.textContent = 'Windows';
} else if(infoSistema.includes ('Androi')){
    celdaSistema.textContent = 'Android';
} else if (infoSistema.includes ('Mac OS')){
    celdaSistema.textContent = 'macOS';
} else if (infoSistema.includes ('Linux')){
    celdaSistema.textContent = 'Linux';
} else{ 
    celdaSistema.textContent = 'Sistema no identificado';
}

// Obteniendo elementos por ID (Hora)
const celdaHora = document.getElementById ("hora");
celdaHora.textContent = new Date().toLocaleString("es-AR");