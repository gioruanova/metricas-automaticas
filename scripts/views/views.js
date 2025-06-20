export function operationsAnalystView(rol) {
    let rolCheck = false;
    if (rol == 'opAnalyst') {
        rolCheck = true;
    }
    const operationsAnalystView = document.getElementById("operations-analyst-view");
    operationsAnalystView.addEventListener("click", () => {
        if (rolCheck) {
            alert("Vista generada: Analista de operaciones");
        } else{
            alert("ERROR: Perfil Incorrecto");
        }
    });
}

export function gerenteView(rol){
     let rolCheck = false;
    if (rol == 'gerente') {
        rolCheck = true;
    }
    const gerenteView = document.getElementById("gerente-view");
    gerenteView.addEventListener("click", () => {
         if (rolCheck) {
            alert("Vista generada: Gerente");
        } else{
            alert("ERROR: Perfil Incorrecto");
        }
    });
}

export function vicePresidentView(rol){
     let rolCheck = false;
    if (rol == 'vp') {
        rolCheck = true;
    }
    const vicePresidentView = document.getElementById("vice-president-view");
    vicePresidentView.addEventListener("click", () => {
         if (rolCheck) {
            alert("Vista generada: VP");
        } else{
            alert("ERROR: Perfil Incorrecto");
        }
    });
}

export function teamLeaderView(rol){
     let rolCheck = false;
    if (rol == 'tl') {
        rolCheck = true;
    }
    const teamLeaderView = document.getElementById("team-leader-view");
    teamLeaderView.addEventListener("click", () => {
         if (rolCheck) {
            alert("Vista generada: TL");
        } else{
            alert("ERROR: Perfil Incorrecto");
        }
    });
}

