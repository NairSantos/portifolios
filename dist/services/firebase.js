var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export function fetchImages() {
    return __awaiter(this, void 0, void 0, function* () {
        const storageRef = ref(storage, "artworks/");
        const result = yield listAll(storageRef);
        const urls = yield Promise.all(result.items.map(item => getDownloadURL(item)));
        return urls;
    });
}
export function uploadImage(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const storageRef = ref(storage, `artworks/${file.name}`);
        yield uploadBytes(storageRef, file);
        alert("Imagem enviada!");
    });
}
