import { fetchImages } from "./services/firebase";

const gallery = document.getElementById("gallery") as HTMLElement;

// Carregar imagens no carregamento da página
async function loadImages() {
    gallery.innerHTML = ""; // Limpa a galeria antes de adicionar as imagens
    const images = await fetchImages();

    images.forEach(imageSrc => {
        const img = document.createElement("img");
        img.src = imageSrc; // Use o atributo src do HTMLImageElement
        img.style.width = "200px";  // Ajuste o tamanho das imagens
        img.style.margin = "10px";
        gallery.appendChild(img);
    });
}

loadImages();
