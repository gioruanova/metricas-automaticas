import { moduleOne } from "./modules/moduleOne.js";
import { moduleTwo } from "./modules/moduleTwo.js";
import { moduleThree } from "./modules/moduleThree.js";


export async function runAllModules() {
    const metrics = await moduleOne();
    const users = await moduleTwo();
    moduleThree(metrics, users);
}