const inicializar = () => {
    // Seleccionar elementos
    const modal = document.getElementById("modal-imagen");
    const modalImg = document.getElementById("imagen-modal");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");

    // Añadir evento click a las imágenes
    document.querySelectorAll(".item-imagen img").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src; // Muestra la imagen seleccionada
            captionText.innerHTML = this.alt; // Añade el texto alternativo como título
        });
    });

    // Cerrar el modal
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
};
