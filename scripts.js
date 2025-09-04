function verificarContrasena() {
    const contrasenaCorrecta = "password123";
    const passwordIngresada = document.getElementById("passwordInput").value;

    if (passwordIngresada === contrasenaCorrecta) {
        document.querySelector(".bloqueado").style.display = "none";
        document.querySelector(".desbloqueado").style.display = "block";
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}
