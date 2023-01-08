import { shallowMount } from '@vue/test-utils'
import Navbar from './navbar.vue'

describe('Navbar', () => {
  test('renders correct number of navigation links', () => {
    const wrapper = mount(Navbar)
    const navLinks = wrapper.findAll('li.nav-item')
    expect(navLinks.length).toBe(3)
  })
})
