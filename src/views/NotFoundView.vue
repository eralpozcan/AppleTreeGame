<script setup>
import router from "@/router/index.js";

function GoBackHome() {
  router.push({ name: "Home" });
}
</script>

<template>
  <section class="notFound">
    <div class="img">
      <img src="@/assets/404.png" alt="404" />
    </div>
    <div class="text">
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
      <a @click="GoBackHome()">Go back to the future</a>
    </div>
  </section>
</template>
