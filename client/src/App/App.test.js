import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

it('renders App', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('.app')).toHaveLength(1)
  expect(wrapper.find('LinkAppBar')).toHaveLength(1)
  expect(wrapper.find('AllRoutes')).toHaveLength(1)
})
