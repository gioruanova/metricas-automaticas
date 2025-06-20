import { runAllModules } from "./wrapperCalls.js";
import { operationsAnalystView, gerenteView, vicePresidentView } from "./views/views.js";

document.addEventListener("DOMContentLoaded", async () => {
    await runAllModules();
    operationsAnalystView();
    gerenteView();
    vicePresidentView();
})