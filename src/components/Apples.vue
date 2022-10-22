<script setup>
import {onMounted, ref} from 'vue'
import * as d3 from 'd3'
import { useAppleTreeStore } from '@/stores/index'
const appleStore = useAppleTreeStore()

let myTopValue = ref(200)


function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomLeft(i){
    if(myTopValue.value < 40){
        return randomInt(920, 950)
    }else if (myTopValue.value < 90){
        return randomInt(850, 1050)
    }else if (myTopValue.value < 130){
        return randomInt(690, 1200)
    }else if (myTopValue.value < 190){
        return randomInt(650, 1230)
    }else if (myTopValue.value < 285){
        return randomInt(650, 1250)
    }else if (myTopValue.value < 180){ 
        return randomInt(620, 1220)
    }else 
        return randomInt(850, 1050)
    
}

function randomTop(min,max){
    // Min top value 30px max 340px
    myTopValue.value = Math.floor(Math.random() * (max - min + 1)) + min;
    return myTopValue.value
}

function create(i){
  const imgUrl = new URL("../assets/simple-apple.svg", import.meta.url).href
  let abc = d3.select("#apples").append("svg:image")
    .attr("xlink:href", imgUrl)
	.attr("width", 40)
    .attr("height", 40)
    .attr("x", randomLeft(i))
    .attr("y",randomTop(30,340));
    appleStore.svg.push(abc)
}

onMounted(() => {
  for(let i = 0; i < 10; i++){
    create(i)
  }
})

</script>

<template>
    <svg id="apples" class="red-apple"> </svg>
</template>


<style scoped>
.red-apple{
    pointer-events:none;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
}
</style>