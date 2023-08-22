function login() {
    let miEmail = document.getElementById("txtEmail").value;
    let miPass = document.getElementById("txtPass").value;

    try {
        fetch('http://localhost:3000/usuarios/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: miEmail,
                pass: miPass
            })
        })
        .then(respuesta => respuesta.text())
        .then(data => {
            if(data === "")
                alert("Login incorrecto");
            else
                window.location.href = "home.html";
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}

function crear() {
    let miEmail = document.getElementById("txtEmail").value;
    let miPass = document.getElementById("txtPass").value;

    try {
        fetch('http://localhost:3000/usuarios/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: miEmail,
                pass: miPass
            })
        })
        .then(alert("Usuario creado"))
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}