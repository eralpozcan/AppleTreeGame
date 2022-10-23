<h1 align="center">Apple Tree Game</h1>
<p align="center"> Shake the tree to collect the apples. </p>


<div align="center">
<img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D"></img>
<img src="https://img.shields.io/badge/d3.js-F9A03C?style=for-the-badge&logo=d3.js&logoColor=white"></img> 
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"></img>
<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"></img>
</div>

### :notebook: **About**
This repository, it is basically provided to collect apples from a tree. 
Scenario; The tree shakes and the apples on it fall to the ground, after a while these apples are added to the basket.

#### :ballot_box_with_check: **Desired Conditions**
 - Vue Application ✔️
 - There will be 4 objects on the screen. Apples, tree, basket, and a button. ✔️
 - After clicking on the tree, it should be shaking for 3 seconds. ✔️
 - After this effect, the apples should be falling down separately. ✔️
 - The apples should be in the basket one second after they drop. ✔️
 - All effects (shaking,dropping) must be animated. ✔️
 - Vuex or State management is plus ✔️


Features made outside of these desired conditions are explained in the extras section.

#### :ballot_box_with_check: **Extras**
 - 404 Error Page
 - Write basic unit test with [Vitest](https://vitest.dev/)
 - Static analysis platform DeepSource is connected. And various code quality issues have been fixed. It can be checked here [DeepSource](https://deepsource.io/gh/Eralpozcan/AppleTreeGame)
 - The docker file was written and actively shared on [Docker Hub](https://hub.docker.com/r/eralpozcan/appletreegame).


### Tech Stack
 - [Vite](Vite)
 - [Pinia](https://pinia.vuejs.org/)
 - [D3.js](https://d3js.org/)
 - [Vue-Router](https://router.vuejs.org/)
 - [Vitest](https://vitest.dev/)
 - [Docker](https://www.docker.com/)
 - [DeepSource](https://deepsource.io/)



### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
