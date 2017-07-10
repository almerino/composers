import React from 'react'
import { shallow } from 'enzyme'
import AppBar from './AppBar'

it('renders AppBar', () => {
  const wrapper = shallow(<AppBar />)

  const appBar = wrapper.find('withStyles(AppBar)')
  expect(appBar).toHaveLength(1)

  const Toolbar = appBar.find('withStyles(Toolbar)')
  expect(Toolbar).toHaveLength(1)

  const links = Toolbar.find('Link.simple-link')
  expect(links).toHaveLength(2)

  expect(links.at(0).prop('to')).toBe('/')
  expect(links.at(1).prop('to')).toBe('/list/composers')

  expect(links.at(0).children().prop('children')).toBe("Home")
  expect(links.at(1).children().prop('children')).toBe("Composers")
})
