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
    shackingStatus(){
      return this.shacking
    },
  },
  actions: {
    BasketApple(xPos, yPos){
      const imgUrl = new URL("../assets/simple-apple.svg", import.meta.url).href
      for(let i = 0; i < 5; i++){
        let abc = d3.select("#basket_apples").append("svg:image")
          .attr("xlink:href", imgUrl)
          .attr("width", 40)
          .attr("height", 40)
          .attr("x", 22+(25*i))
          .attr("y",52);
          this.basketSvg.push(abc)
      }

    },
    DropDownApples(){
      for(let i=0;i<this.svg.length;i++){
        this.svg[i].transition()
        .duration(1000)
        .attr("y", 850)
        .duration(1000).delay(d3.randomInt(1000,2000))
      }
    },
  }
})