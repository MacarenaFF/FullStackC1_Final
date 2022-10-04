function validarFormulario() {
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let request = document.getElementById("request").value;
    let checkbox = document.getElementById("checkBox");
    //let boleana = false;
    //Test campo obligatorio
    if (name == null || name.length == 0) {
        alert(
            "The  name field must not be empty."
        );
        return false;
    }
    //Test apellido
    if (lastname == null || lastname.length == 0) {
        alert("The Last name field must not be empty.");
        return false;
    }

    //Test email
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("The Last name field must not be empty.");
        return false;
    }
    //Consulta
    if (request == null || request.length == 0) {
        alert("The request field must not be empty");

        return false;
    }

    //checkbox
    if (!checkbox.checked){
        alert("Check the checkbox :)"); 
        return false;
    }
  return true;}

