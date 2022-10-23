<script setup>
import { onBeforeRouteLeave } from 'vue-router'
import Apples from '@/components/Apples.vue'
import AppleTree from '@/components/AppleTree.vue'
import GroundGrass from '@/components/GroundGrass.vue'
import Basket from '@/components/Basket.vue'



onBeforeRouteLeave(() => {
    sessionStorage.clear()
    localStorage.clear()
})


</script>

<template>
    <Apples></Apples>
    <AppleTree></AppleTree>
    <Basket></Basket>
    <GroundGrass></GroundGrass>
</template>

<style scoped>
</style>