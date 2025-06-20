import { runAllModules } from "./wrapperCalls.js";
import { operationsAnalystView } from "./views/views.js";


document.addEventListener("DOMContentLoaded", async () => {
    await runAllModules();

    operationsAnalystView();
})