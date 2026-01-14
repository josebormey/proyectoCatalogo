function cambiarTexto() {
  const texto = document.getElementById("texto1");
  if (texto.innerHTML.includes("cambiar")) {
    texto.innerHTML = "¡Texto cambiado dinámicamente con JavaScript!";
  } else {
    texto.innerHTML = "Haz clic en el botón para cambiar este texto.";
  }
}
