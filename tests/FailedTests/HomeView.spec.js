import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
  it('renders the correct markup', () => {
    const wrapper = shallowMount(HomeView)
    expect(wrapper.html()).toContain('<div class="home">')
    expect(wrapper.html()).toContain('<img alt="Vue logo" src="../assets/rest1pic.jpg" style="max-width: 1920px; max-height: 1080px">')
  })
})
