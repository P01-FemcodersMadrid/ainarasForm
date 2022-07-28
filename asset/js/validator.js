function validateForm() {
  let nombre = document.forms["myForm"]["fnombre"].value;
  if (nombre == "") {
    alert("No escribiste tu nombre");
    return false;
  }
} 

function validateForm() {
  let apellidos = document.forms["myForm"]["fapellido"].value;
  if (apellidos == "") {
  let = regex = [A-Za-z]
    alert("te olvidaste de los apellidos");
    return false;
  }
} 

function validateForm() {
  let correo = document.forms["myForm"]["fcorreo"].value;
  if (correo == "") {
  let = regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    alert("eseeee corrreoooo");
    return false;
  }
} 


/*function validateForm() {
    let x = document.forms["myForm"]["nombre"].value;
    if (x == "") {
      alert("Por favor escribe tu nombre");
      return false;
    }
    let y = document.forms["myForm"]["apellidos"].value;
    if (y == "") {
    let = regex = [A-Za-z]
        alert("Te olvidaste los apellidos");
        return false;
      }
    let z = document.forms["myForm"]["correo"].value;
    let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!regex.test(z)) {
      document.getElementById("resultado").innerHTML = "Correo invalido";
    } else {
      document.getElementById("resultado").innerHTML = "";
    }
}*/
