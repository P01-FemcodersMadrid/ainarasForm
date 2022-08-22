// Inicio de la validación de formulario

function validarFormulario() {
    const nombre = document.forms["formulario"]["fnombre"].value;
    if (nombre == "") {
        alert("Te olvidaste el nombre");
        return false;
    }

    const apellidos = document.forms["formulario"]["fapellidos"].value;
    if (apellidos == "") {
        alert("Te olvidaste los apellidos")
        return false;
    }

    const correo = document.forms["formulario"]["fcorreo"].value;
    if (correo == "") {
        alert("Te olvidaste el correo-e")
        return false;
    }
    const consulta = document.forms["formulario"]["fconsulta"].value;
    if (consulta == "") {
        alert("Por favor rellena también este campo")
        return false;
    }
}

// Checkbox valida el formulario al activarse

function chequeando(chk, valida) {
    console.log(valida);
    const enviar = document.getElementById('valida');
    if (chk.checked == true) {
        enviar.disabled = false;
    } else {
        enviar.disabled = true;
    }
}

// Si el checkbox está activo habilita el botón enviar

/* function check() {
    document.getElementById("enviar").checked = true;
    if (enviar == "") {
        return false;
    }
}}
*/