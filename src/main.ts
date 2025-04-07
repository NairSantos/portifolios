import { fetchImages } from "./services/firebase";

// Importa o Bootstrap do window (caso esteja usando via CDN)
const bootstrap = (window as any).bootstrap;

document.addEventListener("DOMContentLoaded", async () => {
  const gallery = document.getElementById("gallery");

  async function loadImages() {
    const images = await fetchImages();
    if (gallery) {
      gallery.innerHTML = "";
    }

    images.forEach((imageUrl) => {
      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = "Imagem do portfólio";

      Object.assign(img.style, {
        width: "300px",
        height: "auto",
        objectFit: "contain",
        margin: "10px",
        cursor: "pointer",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        transition: "transform 0.3s ease-in-out",
      });

      img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.05)";
      });
      img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
      });

      // Modal ao clicar
      img.addEventListener("click", () => {
        const modalImg = document.getElementById("modalImage") as HTMLImageElement;
        const modalElement = document.getElementById("imageModal") as HTMLElement;

        modalImg.src = imageUrl;

        const bsModal = new bootstrap.Modal(modalElement);
        bsModal.show();
      });

      if (gallery) {
        gallery.appendChild(img);
      }
    });
  }

  await loadImages();
});
