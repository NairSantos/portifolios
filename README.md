# Portfolio - Setup e Deploy

Este projeto exibe um exemplo de portifolio com upload e exibição de imagens diretamente do Firebase Storage. Aqui está o guia passo a passo para configurar tudo corretamente.

## 🚀 1. Clonando o Repositório

Abra o terminal e rode:

```sh
# Clonar o repositório
git clone https://github.com/NairSantos/portifolios.git

# Entrar no diretório
cd portifolios

# Trocar para a branch correta
git checkout portifolio_firebase

# Abrir no Visual Studio Code (opcional)
code .
```

## 📦 2. Instalando as Dependências

```sh
npm install
```

## 🔥 3. Configurando o Firebase

1. Acesse o [Firebase Console](https://console.firebase.google.com/).
2. Crie um novo projeto e anote o **Project ID**.
3. No menu **Build**, selecione **Storage** e clique em **Começar**.
4. Defina as regras de segurança para permitir leitura e escrita:

```json
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

5. No menu **Configurações do projeto**, vá até **SDK do Firebase** e copie as credenciais.
6. No projeto, crie o arquivo `.env` e adicione:

```env
VITE_FIREBASE_API_KEY="SUA_API_KEY"
VITE_FIREBASE_AUTH_DOMAIN="SEU_AUTH_DOMAIN"
VITE_FIREBASE_PROJECT_ID="SEU_PROJECT_ID"
VITE_FIREBASE_STORAGE_BUCKET="SEU_STORAGE_BUCKET"
VITE_FIREBASE_MESSAGING_SENDER_ID="SEU_SENDER_ID"
VITE_FIREBASE_APP_ID="SEU_APP_ID"
VITE_FIREBASE_MEASUREMENT_ID="SEU_MEASUREMENT_ID"
```

## 🏗️ 4. Executando o Projeto

Para rodar o projeto localmente, use:

```sh
npm run dev
```

Acesse `http://localhost:5174/` para ver o site.

---

Agora seu **Portfolio** está pronto para receber sua imagens! 🖼️✨
<br>
<div align="center"> 
  
  ### Você pode entrar em contato comigo por aqui:
  <a href = "mailto:nair.santos0906@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://br.linkedin.com/in/nair-santos/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
<br>
<img width="120" src="https://i.gifer.com/1kLR.gif">
</div>
