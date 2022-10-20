<script setup>
import {ref} from 'vue'
let apples= ref(5)
const apple = ref(null)
let myTopValue = ref(0)
let myLocalStatus = ref(false)
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



function PickUp(){
    console.log("PickUp");
    myLocalStatus.value = true
}
</script>

<template>
    <div v-for="(element,index) in apples">
        <img v-if="myLocalStatus" class="red-apple" src="@/assets/simple-apple.svg" :id="index" alt="Apple" width="48" height="48" @click="PickUp()" :style="{bottom:`30px`,left:`${randomLeft()}px`} ">
        <img v-else class="red-apple" src="@/assets/simple-apple.svg" :id="index" alt="Apple" width="48" height="48" @click="PickUp()" :style="{top:`${randomTop(30,340)}px`,left:`${randomLeft()}px`} ">
    </div>

   

</template>


<style scoped>
.red-apple{
    position: absolute;
    z-index: 1;
}
</style>