import { beforeEach, describe, it, expect} from 'vitest'

import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import GroundGrass from '../GroundGrass.vue'

describe('GroundGrass.vue', () => {
    let wrapper = null
    beforeEach(() => {
        const pinia = createPinia()
        wrapper = mount(GroundGrass, {
        global: {
            plugins: [pinia]
        }
        })
    })
    it('renders properly', () => {
        expect(wrapper.exists()).toBe(true)
    })
})
