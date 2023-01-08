import { shallowMount } from '@vue/test-utils'
import GerichtComponent from '@/components/GerichtComponent'
import GerichtService from '@/services/GerichtService'

jest.mock('@/services/GerichtService')

describe('GerichtComponent', () => {
  let wrapper
  const gerichte = [
    {
      id: 1,
      name: 'Gericht 1',
      beschreibung: 'Description of Gericht 1',
      preis: 10
    },
    {
      id: 2,
      name: 'Gericht 2',
      beschreibung: 'Description of Gericht 2',
      preis: 20
    }
  ]

  beforeEach(() => {
    GerichtService.getGerichte.mockResolvedValue({ data: gerichte })
    wrapper = shallowMount(GerichtComponent)
  })

  test('has the correct initial data', () => {
    expect(wrapper.vm.gerichte).toEqual([])
  })

  test('renders the data correctly', async () => {
    await wrapper.vm.getGerichte()
    expect(wrapper.vm.gerichte).toEqual(gerichte)
    expect(wrapper.html()).toContain('Gericht 1')
    expect(wrapper.html()).toContain('Gericht 2')
  })

  test('updates the data correctly when the getGerichte method is called', async () => {
    await wrapper.vm.getGerichte()
    expect(wrapper.vm.gerichte).toEqual(gerichte)
  })
})
