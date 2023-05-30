<script setup>
import { onBeforeRouteLeave } from "vue-router";
import Apples from "@/components/Apples.vue";
import AppleTree from "@/components/AppleTree.vue";
import GroundGrass from "@/components/GroundGrass.vue";
import Basket from "@/components/Basket.vue";
import EndScreen from "@/components/EndScreen.vue";

import { useAppleTreeStore } from "../stores/index";
const appleStore = useAppleTreeStore();

</script>

<template>
  <template v-if="appleStore.appleIsBasket">
    <EndScreen></EndScreen>
  </template>
  <template v-else>
    <Apples></Apples>
    <AppleTree></AppleTree>
    <Basket></Basket>
    <GroundGrass></GroundGrass>
  </template>
</template>
<style scoped></style>
