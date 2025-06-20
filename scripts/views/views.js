export function operationsAnalystView() {
    const operationsAnalystView = document.getElementById("operations-analyst-view");
    operationsAnalystView.addEventListener("click", () => {
        alert("Vista generada: Analista de operaciones");
    });


}

export function gerenteView(){
    const gerenteView = document.getElementById("gerente-view");
    gerenteView.addEventListener("click", () => {
        alert("Vista generada: Gerente");
    });
}

export function vicePresidentView(){
    const vicePresidentView = document.getElementById("vice-president-view");
    vicePresidentView.addEventListener("click", () => {
        alert("Vista generada: Vicepresidente");
    });
}