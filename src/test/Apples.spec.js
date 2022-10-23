import { beforeEach, describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import Apples from "../components/Apples.vue";

describe("Apples", () => {
  let wrapper = null;
  beforeEach(() => {
    const pinia = createPinia();
    wrapper = mount(Apples, {
      global: {
        plugins: [pinia],
      },
    });
  });
  it("renders properly", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
