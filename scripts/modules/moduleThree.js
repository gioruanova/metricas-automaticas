import { API_KEY, API_KEY_USERS, API_DELAY, MENSAJES_GENERICOS } from "../../helpers/helpers.js";

export async function moduleThree(metrics, users) {
    const metricsContainer = document.getElementById("metrics-container");
    const usersContainer = document.getElementById("users-container");
    const analystSelect = document.getElementById("analyst-select");
    const userSelect = document.getElementById("user-select");
    let selectedAnalyst = 'all';
    let selectedUser = 'all';

    analystSelect.addEventListener("change", (e) => {
        selectedAnalyst = e.target.value;
        renderMetrics();
    });

    userSelect.addEventListener("change", (e) => {
        selectedUser = e.target.value;
        renderUsers();
    });

    function renderMetrics() {
        metricsContainer.innerHTML = '';
        const filteredMetrics = selectedAnalyst === 'all'
            ? metrics
            : metrics.filter(metric => metric.id_usuario === parseInt(selectedAnalyst));

        filteredMetrics.forEach(metric => {
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
    }

    function renderUsers() {
        usersContainer.innerHTML = '';
        const filteredUsers = selectedUser === 'all'
            ? users
            : users.filter(user => user.id === parseInt(selectedUser));

        filteredUsers.forEach(user => {
            const userElement = document.createElement("div");
            userElement.classList.add("user");
            userElement.innerHTML = `
                <h2>Nombre: ${user.name}</h2>
                <p>ID: ${user.id}</p>
            `;
            usersContainer.appendChild(userElement);
        });
    }

    renderMetrics();
    renderUsers();

    users.forEach(user => {
        analystSelect.innerHTML += `<option value="${user.id}">${user.name}</option>`;
        userSelect.innerHTML += `<option value="${user.id}">${user.name}</option>`;
    });


    function clearMetricsFilter() {
        selectedAnalyst = 'all';
        renderMetrics();
    }

    function clearUsersFilter() {
        selectedUser = 'all';
        renderUsers();
    }

    const clearMetricsFilterButton = document.getElementById("clear-metrics-filter");
    const clearUsersFilterButton = document.getElementById("clear-users-filter");

    clearMetricsFilterButton.addEventListener("click", clearMetricsFilter);
    clearUsersFilterButton.addEventListener("click", clearUsersFilter);


}

