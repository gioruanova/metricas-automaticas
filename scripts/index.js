import { runAllModules } from "./wrapperCalls.js";
import { operationsAnalystView, gerenteView, vicePresidentView, teamLeaderView } from "./views/views.js";

document.addEventListener("DOMContentLoaded", async () => {
    await runAllModules();
    operationsAnalystView("opAnalyst");
    gerenteView("gerente");
    vicePresidentView("vp");
    teamLeaderView("tl");
})
