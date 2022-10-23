import { beforeEach, describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import appleTree from "../components/AppleTree.vue";

describe("AppleTree.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    const pinia = createPinia();
    wrapper = mount(appleTree, {
      global: {
        plugins: [pinia],
      },
    });
  });
  it("renders properly", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
