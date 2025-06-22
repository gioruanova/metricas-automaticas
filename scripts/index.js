import { runAllModules } from "./wrapperCalls.js";
import { operationsAnalystView, gerenteView, vicePresidentView, teamLeaderView, envioAutomatizado } from "./views/views.js";

document.addEventListener("DOMContentLoaded", async () => {


    if (window.location.pathname === "/index.html") {
        console.log("index");
        await runAllModules();
        operationsAnalystView("opAnalyst");
        gerenteView("gerente");
        vicePresidentView("vp");
        teamLeaderView("tl");
        envioAutomatizado();
    }


})