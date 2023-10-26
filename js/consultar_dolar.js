document.addEventListener("DOMContentLoaded", function() {
    // Elemento HTML donde voy a mostrar el responce de la API del BCRA
    const datoElement = document.getElementById("dato");

    // URL de la API y proxy para evitar el problema del error CORS
    const apiUrl = "usd";
    const proxyUrl = "https://bcra-proxy-cors.vercel.app";

    // Solicitud GET a la API utilizando el proxy
    fetch(`${proxyUrl}/${apiUrl}`, {
        headers: {
            Authorization: "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3Mjk3MDA3NTcsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJmZWxpY2UudmFuZXNhQGdtYWlsLmNvbSJ9.AmTs1ii2ZKf1t3cZ-hXGoZ5iU10_8wO9CMpbb42KbqHqcal_1k7L6J_pPxowYUFHmD_RWrIW_P9kJpKU2ObaMQ",
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudieron obtener los datos.');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        if (Array.isArray(data) && data.length > 0) {
            // Obtener el ultimo elemento del array
            const ultimoDato = data[data.length - 1];
            console.log(ultimoDato);

            // Mostrar el ultimo dato en el elemento HTML <h3 class="titulos_beneficios"
            datoElement.innerHTML = `<h3 class="container">Fecha de ultima cotización del dolar, en tiempo real: ${ultimoDato.d}, Monto: ${ultimoDato.v} $</h3>`;
        } else {
            datoElement.textContent = "No se encontraron datos.";
        }
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
        datoElement.textContent = "No se pudieron obtener los datos.";
    });
});
