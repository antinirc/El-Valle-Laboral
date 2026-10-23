// Obteniendo elementos por ID (navegador)
const celdaNavegador = document.getElementById('navegador');
const infoNavegador = navigator.userAgent;

// condicional multiple
if (celdaNavegador) {
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
}

// Obteniendo elementos por ID (Sistema)
const celdaSistema = document.getElementById ('sistema');
const infoSistema = navigator.userAgent;

if(celdaSistema){
    if (infoSistema.includes ('Windows')){
        celdaSistema.textContent = 'Windows';
    } else if(infoSistema.includes ('Android')){
        celdaSistema.textContent = 'Android';
    } else if (infoSistema.includes ('Mac OS')){
        celdaSistema.textContent = 'macOS';
    } else if (infoSistema.includes ('Linux')){
        celdaSistema.textContent = 'Linux';
    } else{ 
        celdaSistema.textContent = 'Sistema no identificado';
    }
}

// Obteniendo elementos por ID (Hora)
const celdaHora = document.getElementById ("hora");
if (celdaHora){
    celdaHora.textContent = new Date().toLocaleString("es-AR");
}
//Recordar de donde viene cada visitante para volver atrás correctamente
const parametros = new URLSearchParams(window.location.search);
const origen = parametros.get("origen");

const ofertas = {
    desarrollador: "desarrollador.html",
    maestranza: "maestranza.html",
    administracion: "administracion.html",
    mantenimiento: "mantenimiento.html"
};

document.querySelectorAll(".volverAtras").forEach(enlace => {
    enlace.href = ofertas[origen] || "ofertas.html";
});

// Volver a la simulación conservando el origen de la oferta
document.querySelectorAll(".volverSimulacion").forEach(enlace => {
    enlace.href = `simulacion.html?origen=${origen || ""}`;
});

const botonConcientizacion = document.querySelector(".botonConcientizacion");

if (botonConcientizacion) {
    botonConcientizacion.href = `concientizacion.html?origen=${origen || ""}`;
}