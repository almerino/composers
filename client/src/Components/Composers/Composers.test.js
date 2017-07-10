import React from 'react'
import { shallow } from 'enzyme'
import { MockedProvider } from 'react-apollo/lib/test-utils'
import Composers, { composersQuery, SimpleComposers } from './Composers'

const props = {
  data: {
    composers: [{
      id: '1',
      name: 'name',
      image: 'image',
    }],
  },
}

it('renders composers with data', () => {
  const wrapper = shallow(
    <MockedProvider mocks={[
      { request: { query: composersQuery }, result: { data: { ...props.data } } }
    ]}>
      <Composers {...props} />
    </MockedProvider>)

  const composers = wrapper.find(Composers)
  expect(composers).toHaveLength(1)
  expect(composers.prop('data')).toEqual(props.data)
})

it('renders SimpleComposers ', () => {
  const wrapper = shallow(<SimpleComposers {...props} />)
  const instance = wrapper.renderer._instance._instance

  expect(wrapper.find('withStyles(Typography)')).toHaveLength(1)
  expect(wrapper.find('withStyles(Typography)').prop('children'))
    .toBe('Composers')

  expect(wrapper.find('withStyles(Paper)')).toHaveLength(1)
  expect(wrapper.find('withStyles(List)')).toHaveLength(1)
  expect(wrapper.find('Link')).toHaveLength(1)
  expect(wrapper.find('Link').prop('to')).toBe('/article/composers/1')
  expect(wrapper.find('withStyles(ListItem)')).toHaveLength(1)
  expect(wrapper.find('withStyles(Avatar)').props())
    .toEqual({ alt: 'name', src: 'image' })

  expect(wrapper.find('withStyles(ListItemText)')).toHaveLength(1)
  expect(wrapper.find('withStyles(ListItemText)').prop('primary')).toBe('name')
})

