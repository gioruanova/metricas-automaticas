import { API_KEY, API_KEY_USERS, API_DELAY, MENSAJES_GENERICOS } from "../../helpers/helpers.js";

export async function moduleOne() {
    try {
        const response = await fetch(API_KEY);
        if (!response.ok) {
            throw new Error(`${MENSAJES_GENERICOS.api_error}: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data.reportes;
    } catch (error) {
        console.error(MENSAJES_GENERICOS.api_error, error);
    }
}



