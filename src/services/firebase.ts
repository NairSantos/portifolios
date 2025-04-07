/// <reference types="vite/client" />
import { initializeApp } from "firebase/app";
import { uploadBytes, getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyANy7W6TDltfyPQ5dN6XOWQy5kstInyzXM",
    authDomain: "pokemon-art-portfolio.firebaseapp.com",
    projectId: "pokemon-art-portfolio",
    storageBucket: "pokemon-art-portfolio.firebasestorage.app",
    messagingSenderId: "993400172920",
    appId: "1:993400172920:web:f17fbcb459089a95ac588d",
    measurementId: "G-WWNZKE1MM7"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Função para buscar imagens do Storage
export async function fetchImages(): Promise<string[]> {
    const storageRef = ref(storage, "img/"); // Pegando imagens da pasta img
    const result = await listAll(storageRef);

    const urls = await Promise.all(
        result.items.map(async (item) => {
            return await getDownloadURL(item); // Obtém a URL
        })
    );

    return urls; // Retorna um array de URLs (não elementos <img>)
}

