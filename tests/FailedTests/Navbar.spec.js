import { mount } from '@vue/test-utils'
import NavBar from '@/components/Navbar.vue'

describe('NavBar', () => {
  it('renders the correct markup', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.html()).toContain('<nav class="navbar navbar-light" style="background-color: #e3f2fd;">')
    expect(wrapper.html()).toContain('<ul class="nav nav-pills">')
    expect(wrapper.html()).toContain('<li class="nav-item">')
    expect(wrapper.html()).toContain('<router-link class="nav-link" to="/">Home</router-link>')
    expect(wrapper.html()).toContain('<router-link class="nav-link" to="/gerichte">Menu</router-link>')
    expect(wrapper.html()).toContain('<router-link class="nav-link" to="/about">About</router-link>')
  })
})
