import { shallowMount } from '@vue/test-utils'
import GerichtPostPutDeleteComponent from '@/components/GerichtPostPutDeleteComponent.vue'

describe('GerichtPostPutDeleteComponent', () => {
  it('submits the form', () => {
    // Arrange
    const wrapper = shallowMount(GerichtPostPutDeleteComponent)
    const gericht = {
      name: 'Test Gericht',
      beschreibung: 'This is a test gericht',
      preis: '9.99'
    }
    wrapper.setData({ gericht })

    // Act
    wrapper.find('form').trigger('submit')

    // Assert
    expect(wrapper.vm.gericht).toEqual(gericht)
  })
})
