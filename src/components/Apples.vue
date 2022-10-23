<script setup>
import {onMounted} from 'vue'
import { useAppleTreeStore } from '@/stores/index'
const appleStore = useAppleTreeStore()

onMounted(() => {
    appleStore.treeApple()
    appleStore.basketApple()
})

</script>

<template>
    <svg v-show="!appleStore.appleIsGroundStatus" id="apples" class="red-apple" :class="{ shake: appleStore.shackingStatus }"> </svg>
</template>


<style scoped>

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}



.red-apple{
    pointer-events:none;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
}
</style>