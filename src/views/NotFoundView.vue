<script setup>
import router from '../router';

function GoBackHome() {
  router.push({ path: '/' });
}

</script>


<template>
    <section class="notFound">
        <div class="img">
        <img src="@/assets/404.png" alt="404"/>
        </div>
        <div class="text">
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <a @click="GoBackHome()">Go back to the future</a>
        </div>
    </section>    
</template>


<style scoped>
.router{
    text-decoration: none !important;
}
</style>