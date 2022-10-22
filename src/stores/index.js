import { defineStore } from 'pinia'
import * as d3 from 'd3'
export const useAppleTreeStore = defineStore('appleTree', {
  state :() => ({
    shacking: false,
    svg : [],

  }),
  getters: {
    shackingStatus(){
      return this.shacking
    },
  },
  actions: {
    shakeTree(){
      this.shacking = true
    },
    DropDownApples(){
      for(let i=0;i<this.svg.length;i++){
        this.svg[i].transition()
        .duration(1000)
        .attr("y", 850)
        .duration(1000).delay(d3.randomInt(1000,2000))
      }
    }
  }



})