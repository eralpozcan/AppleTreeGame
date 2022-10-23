<h1 align="center">Apple Tree Game</h1>

<div align="center">
<img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D"></img>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E"></img>
<img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=FCC72C"></img>
<img src="https://img.shields.io/badge/D3.js-F9A03C?style=for-the-badge&logo=d3.js&logoColor=white"></img> 
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"></img>
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"></img>

</div>

### 📔 **About**
This project is a mini-game that lets you collect apples from a tree. Pinia is used to store all states' central state management. Animations are made with the D3.js library. There are simple unit tests written with Vitest.

<h2 align="center">Showcase</h2>
<p align="center">
<img src="https://github.com/Eralpozcan/AppleTreeGame/blob/main/assets/img/showcase.gif" alt="Showcase Image" width="600">
</p>

<p align="center">
<img src="https://github.com/Eralpozcan/AppleTreeGame/blob/main/assets/img/404.png" alt="404 Page" width="600">
</p>

<p align="center">
<img src="https://github.com/Eralpozcan/AppleTreeGame/blob/main/assets/img/tests.png" alt="Unit Tests" width="600">
</p>

### 📜 **Tasks**
 - [x] Vue application.
 - [x] There will be 4 objects on the screen. Apples, a tree, a basket, and a button.
 - [x] After clicking on the tree, it should be shaking for 3 seconds.
 - [x] After the shaking, the apples should be falling down separately.
 - [x] The apples should be in the basket one second after they drop.
 - [x] All effects (shaking, dropping) must be animated.
 - [x] Vuex or state management is a plus.

### ☑️ **Extras**
*This section contains features made outside of the main tasks.*
 - Custom 404 error [page](https://apple-tree-game.vercel.app/test-404).
 - Basic unit tests with [Vitest](https://vitest.dev/).
 - Static analysis platform DeepSource is integrated. Various code quality issues have been fixed. It can be checked [here](https://deepsource.io/gh/Eralpozcan/AppleTreeGame).
 - Dockerfile is created and the container image is shared on [DockerHub](https://hub.docker.com/r/eralpozcan/appletreegame).

### 💻 **Tech Stack**
 - [Vite](https://vitejs.dev/)
 - [Pinia](https://pinia.vuejs.org/)
 - [D3.js](https://d3js.org/)
 - [Vue-Router](https://router.vuejs.org/)
 - [Vitest](https://vitest.dev/)
 - [Docker](https://www.docker.com/)
 - [DeepSource](https://deepsource.io/)

### #️⃣ **Commands**
*Run on Local Machine*
```sh
git clone https://github.com/Eralpozcan/AppleTreeGame.git   // Clone the repository.
cd AppleTreeGame                                            // Change directory.
npm install                                                 // Install dependencies.
npm run dev                                                 // Run development mode.
npm run test:unit                                           // Execute unit tests.
npm run build                                               // Build the project.
```
> After this command, the production files will be generated under `dist/` directory.

##
*Run on Docker*
```docker
docker run --rm -d -p 80:80 --name apple-tree-game eralpozcan/appletreegame
```
> After this command, the container will run on [localhost](http://localhost/).