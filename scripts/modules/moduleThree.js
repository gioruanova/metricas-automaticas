import { API_KEY, API_KEY_USERS, API_DELAY, MENSAJES_GENERICOS } from "../../helpers/helpers.js";

export async function moduleThree(metrics, users) {
    console.log(metrics);
    console.log(users);

    const metricsContainer = document.getElementById("metrics-container");
    const usersContainer = document.getElementById("users-container");

    metrics.forEach(metric => {
        const metricElement = document.createElement("div");
        metricElement.classList.add("metric");
        metricElement.innerHTML = `
            <h2>Nombre: ${metric.name}</h2>
            <p>Fecha: ${metric.fecha}</p>
            <p>Casos trabajados: ${metric.casos_trabajados}</p>
            <p>Casos resueltos: ${metric.casos_resueltos}</p>
            <p>Casos pendientes: ${metric.casos_pendientes}</p>
            <p>Tiempo promedio de proceso: ${metric.tiempo_promedio_proceso_min} minutos</p>
            <p>Tiempo máximo de proceso: ${metric.tiempo_maximo_proceso_min} minutos</p>
            <p>Eficiencia: ${metric.eficiencia_porcentaje}%</p>
            <p>Retrabajos: ${metric.retrabajos}</p>
        `;
        metricsContainer.appendChild(metricElement);
    });

    users.forEach(user => {
        const userElement = document.createElement("div");
        userElement.classList.add("user");
        userElement.innerHTML = `
            <h2>Nombre: ${user.name}</h2>
            <p>ID: ${user.id}</p>
            
        `;
        usersContainer.appendChild(userElement);
    });


}

