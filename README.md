# Portfolio local- Setup

Este projeto exibe um exemplo de portifolio com exibição de imagens diretamente de uma pasta local. Aqui está o guia passo a passo para configurar tudo corretamente.

## 🚀 1. Clonando o Repositório

Abra o terminal e rode:

```sh
# Clonar o repositório
git clone https://github.com/NairSantos/portifolios.git

# Entrar no diretório
cd portifolios

# Trocar para a branch correta
git checkout portifolio_local

# Abrir no Visual Studio Code (opcional)
code .
```

## 📦 2. Instalando as Dependências

```sh
npm install
```
## 🖼️ 3. Adicionando suas imagens
As imagens exibidas no site estão localizadas na pasta:
/public/pokemons

Para que uma imagem apareça na galeria, você deve colocar o nome do arquivo no arquivo ```main.ts``` . Isso é necessário porque o JavaScript/TypeScript não consegue acessar dinamicamente o conteúdo de pastas públicas — então você precisa informar manualmente quais imagens serão carregadas, assim:
```sh
const images = [
  "pikachu.png",
  "bulbasaur.jpg",
  // adicione mais aqui
];
```

## 🏗️ 4. Executando o Projeto

Para rodar o projeto localmente, use:

```sh
npm run dev
```

Acesse `http://localhost:5175/` para ver o site.

---

Este está com tema de Pokémon, mas você pode personalizar com o tema que quiser!
Agora seu portfólio está prontinho para exibir suas artes ou imagens favoritas! 🧑‍🎨✨
<br>
<div align="center"> 
  
  ### Você pode entrar em contato comigo por aqui:
  <a href = "mailto:nair.santos0906@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://br.linkedin.com/in/nair-santos/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
<br>
<img width="120" src="https://i.gifer.com/1kLR.gif">
</div>

