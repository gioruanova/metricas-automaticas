function checkRol(rol, rolToValidate) {
    let rolCheck = false;
    if (rol == rolToValidate) {
        rolCheck = true;
    }
    return rolCheck;
}



export function operationsAnalystView(rol) {
    let rolCheck = checkRol(rol, "opAnalyst");
    const operationsAnalystView = document.getElementById("operations-analyst-view");
    operationsAnalystView.addEventListener("click", () => {
        if (rolCheck) {
            alert("Vista generada: Analista de operaciones");
        } else {
            alert("ERROR: Perfil Incorrecto");
        }
    });
}

export function gerenteView(rol) {
    let rolCheck = checkRol(rol, "gerente");
    const gerenteView = document.getElementById("gerente-view");
    gerenteView.addEventListener("click", () => {
        if (rolCheck) {
            alert("Vista generada: Gerente");
        } else {
            alert("ERROR: Perfil Incorrecto");
        }
    });
}

export function vicePresidentView(rol) {
    let rolCheck = checkRol(rol, "vp");
    const vicePresidentView = document.getElementById("vice-president-view");
    vicePresidentView.addEventListener("click", () => {
        if (rolCheck) {
            alert("Vista generada: VP");
        } else {
            alert("ERROR: Perfil Incorrecto");
        }
    });
}

export function teamLeaderView(rol) {
    let rolCheck = checkRol(rol, "tl");

    const teamLeaderView = document.getElementById("team-leader-view");
    teamLeaderView.addEventListener("click", () => {
        if (rolCheck) {
            alert("Vista generada: TL");
        } else {
            alert("ERROR: Perfil Incorrecto");
        }
    });
}


export function envioAutomatizado() {
    const envioAutomatizado = document.getElementById("envio-automatizado");
    envioAutomatizado.addEventListener("click", () => {
        alert("Generando envio automatico y calendarizado de metricas segun valores en servidor");
    });
}