function cambiarTexto() {
  const texto = document.getElementById("texto1");
  if (texto.innerHTML.includes("cambiar")) {
    texto.innerHTML = "¡Texto cambiado dinámicamente con JavaScript!";
  } else {
    texto.innerHTML = "Haz clic en el botón para cambiar este texto.";
  }
}

$(document).on("pageshow", "#imagenes", function() {
    $(".media").each(function(index) {
        let img = $(this);
        setTimeout(function() {
            img.addClass("fade-blinds");
        }, index * 400); // efecto escalonado entre imágenes
    });
});
