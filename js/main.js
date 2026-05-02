function buttonClickLinkLinkedin() {
    window.open("https://www.linkedin.com/in/jonathansanchezp/", "_blank");
}

function buttonClickLinkGithub() {
    window.open("https://github.com/jonathan-sp25", "_blank");
}

function buttonClickLinkEmail() {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=jonathan.sanchez.perez25@gmail.com&subject=Consulta&body=Hola", "_blank");
}

function buttonClickDetailProject1() {
    window.location.href = "/../page/proyecto-dashboard-shopify.html";
}

function buttonClickDetailProject2() {
    window.location.href = "/../page/proyecto-salidas-grupales.html";
}

function buttonClickDetailProject3() {
    window.location.href = "/../page/proyecto-tutorias-estudiantiles.html";
}


function buttonClickDemoProject1() {
    window.location.href = "/../demo/proyecto-dashboard-shopify/index.html";
}

function buttonClickDemoProject2() {
    window.location.href = "/../demo/proyecto-salidas-grupales/index.html";
}

function buttonClickDemoProject3() {
    window.location.href = "/../demo/proyecto-tutorias-estudiantiles/index.html";
}

function buttonClickOpenEmail() {
    const email = "jonathan.sanchez.perez25@gmail.com";
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
}

function buttonClickCopyEmail() {
    const email = "jonathan.sanchez.perez25@gmail.com";
    const input = document.createElement("input");
    input.value = email;
    document.body.appendChild(input);

    input.select();
    document.execCommand("copy");

    document.body.removeChild(input);

    alert("Correo copiado");
}

function buttonClickSendMessage() {
    const email = "jonathan.sanchez.perez25@gmail.com";
    const subject = "Consulta";
    const body = "Hola,%0AQuiero información sobre tus proyectos.";

    window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&subject=${subject}&body=${body}`,
        "_blank"
    );
}