function verificarContrasena() {
  // Define la contraseña correcta
  const contrasenaCorrecta = "1234";

  // Obtiene el valor que ingresó el usuario
  const input = document.getElementById("passwordInput");
  const contrasenaIngresada = input.value;

  // Obtiene las secciones que se van a mostrar u ocultar
  const seccionBloqueada = document.querySelector(".bloqueado");
  const seccionDesbloqueada = document.querySelector(".desbloqueado");

  // Compara las contraseñas
  if (contrasenaIngresada === contrasenaCorrecta) {
    // Si la contraseña es correcta, oculta la sección bloqueada y muestra la desbloqueada
    seccionBloqueada.style.display = "none";
    seccionDesbloqueada.style.display = "block";
    alert("¡Contraseña correcta! El contenido ha sido desbloqueado.");
  } else {
    // Si la contraseña es incorrecta, muestra un mensaje de error
    alert("Contraseña incorrecta. Intenta de nuevo.");
  }
}
