import { beforeEach, describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import MainScreen from "../MainScreen.vue";

describe("MainScreen.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    const pinia = createPinia();
    wrapper = mount(MainScreen, {
      global: {
        plugins: [pinia],
      },
    });
  });
  it("renders properly", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
