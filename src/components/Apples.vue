<script setup>
import { onMounted } from "vue";
import { useAppleTreeStore } from "@/stores/index";
const appleStore = useAppleTreeStore();

onMounted(() => {
  appleStore.treeApple();
  appleStore.basketApple();
});
</script>

<template>
  <svg v-show="!appleStore.appleIsGroundStatus" id="apples" class="red-apple"
    :class="{ shake: appleStore.shackingStatus }"></svg>
</template>

<style scoped>
.red-apple {
  pointer-events: none;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}
</style>
