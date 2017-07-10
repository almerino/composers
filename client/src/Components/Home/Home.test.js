import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

it('renders Home', () => {
  const wrapper = shallow(<Home />)
  expect(wrapper.find('withStyles(Typography)').prop('children')).toBe('Home')

  const link = wrapper.find('Link.simple-link')
  expect(link).toHaveLength(1)

  const innerButton = link.find('withStyles(Button)')
  expect(innerButton).toHaveLength(1)
  expect(innerButton.prop('children')).toBe('Go to composers list')
})
