import { defineStore } from 'pinia'
import * as d3 from 'd3'

export const useAppleTreeStore = defineStore('appleTree', {
  state :() => ({
    shacking: false,
    playing: false,
    svg : [],
    basketSvg: [],
  }),
  getters: {
    shackingStatus : (state) => state.shacking,
    playingStatus : (state) => state.playing,
    svgData: (state) => state.svg,
    basketSvgData: (state) => state.basketSvg,
  },
  actions: {
    xPos(i) {
      if(i < 5){
        return 22 + i * 25
      }else if(i < 10){
        return 22 + (i - 5) * 25
      }
    },
    yPos(i) {
      if(i < 5){
        return 52
      }else if(i < 10){
        return 30
      }else{
        return 40
      }
    },

    basketApple(){
      const imgUrl = new URL("../assets/simple-apple.svg", import.meta.url).href
      for(let i = 0; i < 10; i++){
        let abc = d3.select("#basket_apples").append("svg:image")
          .attr("xlink:href", imgUrl)
          .attr("width", 40)
          .attr("height", 40)
          .attr("x", this.xPos(i))
          .attr("y",this.yPos(i));
          this.basketSvg.push(abc)
      }

    },
    dropDownApples(){
      for(let i=0;i<this.svg.length;i++){
        this.svg[i].transition()
        .duration(1000)
        .attr("y", 850)
        .duration(1000).delay(d3.randomInt(1000,2000))
      }
    },
  }
})