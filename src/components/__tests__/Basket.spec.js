import { beforeEach, describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import Basket from "../Basket.vue";

describe("Basket.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    const pinia = createPinia();
    wrapper = mount(Basket, {
      global: {
        plugins: [pinia],
      },
    });
  });
  it("renders properly", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
