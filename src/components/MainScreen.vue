<script setup>
</script>


<template>
    <main class="main-screen">
        <h1>Play to Apple Tree Game</h1>
        <button class="home-button"> Play Button</button>
    </main>
</template>



<style scoped>
.main-screen{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  transition: margin 0.5s ease-out;  
}

.home-button{
  border: 0;
  background-color: #fff;
  color: #516dff;
  padding: 15px 20px;
  font-family: inherit;
  cursor: pointer;
}


</style>