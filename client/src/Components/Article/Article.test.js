import React from 'react'
import { mount, shallow } from 'enzyme'
import { MockedProvider } from 'react-apollo/lib/test-utils'
import Article, { articleQuery, SimpleArticle } from './Article'

const props = {
  match: {
    params: {
      id: '1',
    },
  },
  data: {
    article: {
      id: '1',
      name: 'name',
      image: 'imageUrl',
      genre: 'Classique',
      bio: {
        id: '1',
        birth: '03/03/1939',
        place: 'Paris',
      },
      compositions: [{
        id: '1',
        name: 'Pierre et le loup',
        year: '2002',
      }, {
        id: '1',
        name: 'Pierre et le loup',
        year: '2002',
      }],
    },
  },
}

it('renders Article with data', () => {
  const wrapper = shallow(
    <MockedProvider mocks={[
      { request: { query: articleQuery }, result: { data: { ...props.data } } }
    ]}>
      <Article {...props} />
    </MockedProvider>)

  const article = wrapper.find(Article)
  expect(article).toHaveLength(1)
  expect(article.prop('data')).toEqual(props.data)
})

it('renders SimpleArticle ', () => {
  const wrapper = shallow(<SimpleArticle {...props} />)
  const instance = wrapper.renderer._instance._instance

  expect(wrapper.find('.article')).toHaveLength(1)
  expect(wrapper.find('withStyles(Card)')).toHaveLength(1)

  const CardHeader = wrapper.find('withStyles(CardHeader)')
  expect(CardHeader).toHaveLength(1)
  expect(CardHeader.prop('avatar').props)
    .toEqual({ alt: 'name', src: 'imageUrl' })
  expect(CardHeader.prop('title')).toBe('name')
  expect(CardHeader.prop('subheader')).toBe('Paris - 2 mars 1939')

  const CardContents = wrapper.find('withStyles(CardContent)')
  expect(CardContents).toHaveLength(2)
  expect(CardContents.at(0).find("withStyles(Typography)")
    .children().at(0).text()).toBe('Genre: ')
  expect(CardContents.at(0).find("withStyles(Typography)")
    .children().at(1).text()).toBe('Classique')

  const CardActions = wrapper.find('withStyles(CardActions)')
  expect(CardActions).toHaveLength(1)

  let IconButton = CardActions.find('withStyles(IconButton)')
  expect(IconButton.prop('onClick'))
    .toBe(wrapper.renderer._instance._instance.handleExpandClick)
  expect(IconButton.find('pure(ExpandLess)')).toHaveLength(0)
  expect(IconButton.find('pure(ExpandMore)')).toHaveLength(1)

  instance.handleExpandClick()
  expect(instance.state).toEqual({ expanded: true })
  expect(wrapper.find('pure(ExpandLess)')).toHaveLength(1)
  expect(wrapper.find('pure(ExpandMore)')).toHaveLength(0)

  expect(wrapper.find('withStyles(List)')).toHaveLength(1)
  expect(wrapper.find('withStyles(ListItem)')).toHaveLength(2)
  expect(wrapper.find('withStyles(ListItemText)')).toHaveLength(2)
  expect(wrapper.find('withStyles(ListItemText)').at(0).props())
    .toEqual({ primary: 'Pierre et le loup', secondary: '2002' })
})

