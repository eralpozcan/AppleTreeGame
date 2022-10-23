<h1 align="center">Apple Tree Game</h1>
<p align="center"> Shake the tree to collect the apples. </p>


<div align="center">
<img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D"></img>
<img src="https://img.shields.io/badge/d3.js-F9A03C?style=for-the-badge&logo=d3.js&logoColor=white"></img> 
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"></img>
<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"></img>
</div>

<p align="center">
<img src="/assets/readme/readmeproject.gif" alt="Apple Tree Game">
</p>



### :notebook: **About**
This repository, it is basically provided to collect apples from a tree. 
Scenario; The tree shakes and the apples on it fall to the ground, after a while these apples are added to the basket.

### :ballot_box_with_check: **Desired Conditions**
 - Vue Application ✔️
 - There will be 4 objects on the screen. Apples, tree, basket, and a button. ✔️
 - After clicking on the tree, it should be shaking for 3 seconds. ✔️
 - After this effect, the apples should be falling down separately. ✔️
 - The apples should be in the basket one second after they drop. ✔️
 - All effects (shaking,dropping) must be animated. ✔️
 - Vuex or State management is plus ✔️


Features made outside of these desired conditions are explained in the extras section.

### :ballot_box_with_check: **Extras**
 - 404 Error Page [Check](https://apple-tree-game.vercel.app/abc)
 - Write basic unit test with [Vitest](https://vitest.dev/)
 - Static analysis platform DeepSource is connected. And various code quality issues have been fixed. It can be checked here [DeepSource](https://deepsource.io/gh/Eralpozcan/AppleTreeGame)
 - The docker file was written and actively shared on [Docker Hub](https://hub.docker.com/r/eralpozcan/appletreegame).


### ✨ **Tech Stack**
 - [Vite](Vite)
 - [Pinia](https://pinia.vuejs.org/)
 - [D3.js](https://d3js.org/)
 - [Vue-Router](https://router.vuejs.org/)
 - [Vitest](https://vitest.dev/)
 - [Docker](https://www.docker.com/)
 - [DeepSource](https://deepsource.io/)




<details><summary><strong>Project Setup without Docker</strong></summary>


#### *Step 1*
```
git clone https://github.com/Eralpozcan/AppleTreeGame.git
cd AppleTreeGame
```
#### *Step 2*
```sh
npm install
```
#### *Step 3*
- If you want to run it in **development** mode.
```sh
    npm run dev
```
- If you want to build for **Production**.
```sh
    npm run build
```
- If you just want to run **unit tests** with [Vitest](https://vitest.dev/).
```sh
    npm run test:unit
```

</details>



<details><summary><strong>Project Setup with Docker</strong></summary>
<p>

```sh
docker pull eralpozcan/appletreegame
```
or 

```sh
docker run eralpozcan/appletreegame
```

</p>
</details>

