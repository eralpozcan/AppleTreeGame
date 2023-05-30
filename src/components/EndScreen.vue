<script setup>
import { useAppleTreeStore } from "../stores/index";
import router from "@/router/index.js";
const appleStore = useAppleTreeStore();

function resetNow() {
  appleStore.setAppleIsGroundStatus(false);
  appleStore.setPlayingStatus(false);
  appleStore.setAppleIsBasketStatus(false);

  router.push({ name: "Home" });
}
</script>

<template>
  <main class="end-screen">
    <h1>Return Main Page</h1>
    <button class="home-button" @click="resetNow()">Reset Button</button>
  </main>
</template>

<style scoped>
.end-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  transition: margin 0.5s ease-out;
}

.home-button {
  border: 0;
  background-color: #fff;
  color: #516dff;
  padding: 15px 20px;
  font-family: inherit;
  cursor: pointer;
}
</style>
