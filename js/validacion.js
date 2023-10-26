document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("miFormulario");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        const nombreApellidoRegex = /^[A-Za-zÀ-ÿ\s-]{4,40}$/;
        const telefonoRegex = /^[0-9-]+$/;
        const emailRegex = /^[A-Za-zÀ-ÿ0-9\s\.\-\_]+@[A-Za-zÀ-ÿ0-9\s]+\.(com|com\.ar)$/;

        // Validar los campos
        const campos = [
            { id: "nombre", mensaje: "Por favor, complete el campo con su nombre." },
            { id: "apellido", mensaje: "Por favor, complete el campo con su apellido." },
            { id: "email", mensaje: "Por favor, complete el campo 'email' con su correo electrónico." },
            { id: "telefono", mensaje: "Por favor, complete el campo con su número de teléfono." },
            { id: "modelo", mensaje: "Por favor, ingresa el modelo de tu auto." },
            { id: "tipoVehiculo", mensaje: "Por favor, selecciona su tipo de vehículo." },
            { id: "tipoServicio", mensaje: "Por favor, selecciona el servicio en el cual está interesado." },
            { id: "comentario", mensaje: "Por favor, complete su consulta." }
        ];

        for (const campo of campos) {
            const elemento = document.getElementById(campo.id);
            if (elemento.value === "") {
                alert(campo.mensaje);
                return;
            }
        }

        // Validación del nombre y apellido
        const nombre = document.getElementById("nombre");
        if (!nombreApellidoRegex.test(nombre.value)) {
            alert("Por favor, ingresa un nombre válido, debe contener entre 4 y 40 caracteres, y solo admiten letras.");
            return;
        }

        const apellido = document.getElementById("apellido");
        if (!nombreApellidoRegex.test(apellido.value)) {
            alert("Por favor, ingresa un apellido válido, debe contener entre 4 y 40 caracteres, y solo admiten letras.");
            return;
        }

        // Validación del correo electrónico
        const email = document.getElementById("email");
        if (!emailRegex.test(email.value)) {
            alert("Por favor, ingresa un correo electrónico válido, ejemplo: usuario@dominio.com o .com.ar");
            return;
        }

        // Validación del teléfono
        const telefono = document.getElementById("telefono");
        if (!telefonoRegex.test(telefono.value)) {
            alert("Por favor, ingresa un teléfono válido, solo se aceptan números y guiones medios.");
            return;
        }           

        alert("Formulario enviado con éxito!");
        formulario.reset(); // Limpiar el formulario después de enviarlo
    });
});