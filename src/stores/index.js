import { defineStore } from "pinia";
import * as d3 from "d3";
import { xPos, yPos, randomInt, treeXPos } from "@/utils/helpers";

export const useAppleTreeStore = defineStore("appleTree", {
  state: () => ({
    shacking: false,
    playing: false,
    appleIsGround: false,
    appleIsBasket: false,
    appleSize: { width: 40, height: 40 },
    yPosValue: [],
    svg: [],
    basketSvg: [],
  }),
  getters: {
    shackingStatus: (state) => state.shacking,
    playingStatus: (state) => state.playing,
    appleIsGroundStatus: (state) => state.appleIsGround,
    svgData: (state) => state.svg,
    basketSvgData: (state) => state.basketSvg,
    appleIsBasketStatus: (state) => state.appleIsBasket,
  },
  actions: {
    setPlayingStatus(status) {
      this.playing = status;
      sessionStorage.setItem("playing", status);
    },
    setShackingStatus(status) {
      this.shacking = status;
      sessionStorage.setItem("shacking", status);
    },
    setAppleIsGroundStatus(status) {
      this.appleIsGround = status;
      sessionStorage.setItem("appleIsGround", status);
    },
    setAppleIsBasketStatus(status) {
      this.appleIsBasket = status;
      sessionStorage.setItem("appleIsBasket", status);
    },

    // Tree Random Seed yPos
    treeYPos(i) {
      const max = 340;
      const min = 30;
      this.yPosValue.push(randomInt(min, max));
      return this.yPosValue[i];
    },

    treeApple() {
      const imgUrl = new URL("../assets/simple-apple.svg", import.meta.url)
        .href;

      for (let i = 0; i < 15; i++) {
        const tree_apple = d3
          .select("#apples")
          .append("svg:image")
          .attr("xlink:href", imgUrl)
          .attr("width", this.appleSize.width)
          .attr("height", this.appleSize.height)
          .attr("y", this.treeYPos(i))
          .attr("x", treeXPos(this.yPosValue[i]));
        this.svg.push(tree_apple);
      }
    },
    basketApple() {
      const imgUrl = new URL("../assets/simple-apple.svg", import.meta.url)
        .href;
      for (let i = 0; i < 10; i++) {
        const basket_apple = d3
          .select("#basket_apples")
          .append("svg:image")
          .attr("xlink:href", imgUrl)
          .attr("width", this.appleSize.width)
          .attr("height", this.appleSize.height)
          .attr("x", xPos(i))
          .attr("y", yPos(i));
        this.basketSvg.push(basket_apple);
      }
      setTimeout(() => {
        this.setAppleIsBasketStatus(true);
      }, 5000);
    },
    dropDownApples() {
      for (let i = 0; i < this.svg.length; i++) {
        this.svg[i]
          .transition()
          .attr("y", 850)
          .duration(1000)
          .delay(d3.randomInt(1000, 2000));
      }
      setTimeout(() => {
        this.setAppleIsGroundStatus(true);
        this.setShackingStatus(false);
      }, 3000);
    },
    shakeTree() {
      this.setShackingStatus(true);
      setTimeout(() => {
        this.dropDownApples();
      }, 100);
    },
  },
});
