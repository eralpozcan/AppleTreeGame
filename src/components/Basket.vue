<script setup>
import { useAppleTreeStore } from '@/stores/index'
const appleStore = useAppleTreeStore()

</script>

<template>
    <div class="basket" @contextmenu.prevent>
        <svg v-show="appleStore.appleIsGroundStatus" id="basket_apples" class="basket_apple"> </svg>
        <img src="@/assets/basket.svg" width="200" height="200" alt="Apple Tree"/>
    </div>
</template>

<style scoped>
.basket{
    position: absolute;
    bottom: 0;
    left: 75%;
    z-index: 1;
}

.basket_apple{
    pointer-events:none;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
}


</style>