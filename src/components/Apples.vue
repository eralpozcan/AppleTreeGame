<script setup>
import {onMounted, ref} from 'vue'
import * as d3 from 'd3'

let myTopValue = ref(0)
let svg = ref([])
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomLeft(){
    console.log("randomLeft")


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
    }
}

function randomTop(min,max){
    // Min top value 30px max 340px
    myTopValue.value = Math.floor(Math.random() * (max - min + 1)) + min;
    return myTopValue.value
}

function create(){
  const imgUrl = new URL("../assets/simple-apple.svg", import.meta.url).href
  console.log(imgUrl)
  let abc = d3.select("#deneme").append("svg:image")
    .attr("xlink:href", imgUrl)
	.attr("width", 40)
    .attr("height", 40)
    .attr("x", randomLeft())
    .attr("y",randomTop(30,340));

    svg.value.push(abc)
   
}

function triggerTransitionDelay(){
    for(let i=0;i<svg.value.length;i++){
        svg.value[i].transition()
        .duration(1000)
        .attr("y", 850)
        .duration(1000).delay(d3.randomInt(1000,2000))
    }

  //pickRandomPosition()
}

onMounted(() => {
  for(let i = 0; i < 10; i++){
    create()
  }
  //create()
  console.log("mounted Apples")
})


</script>

<template>
    <div >
        <svg id="deneme" class="red-apple" @click="triggerTransitionDelay()"> </svg>
    </div>


    <!-- <div v-for="(element,index) in apples">
        <img v-if="myLocalStatus" class="red-apple" src="@/assets/simple-apple.svg" :id="index" alt="Apple" width="48" height="48" @click="PickUp()" :style="{bottom:`30px`,left:`${randomLeft()}px`} ">
        <img ref="apple" class="red-apple" src="@/assets/simple-apple.svg" :id="index" alt="Apple" width="48" height="48" @click="PickUp()" :style="{top:`${randomTop(30,340)}px`,left:`${randomLeft()}px`} ">
    </div> -->

   

</template>


<style scoped>
.red-apple{
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
}
</style>