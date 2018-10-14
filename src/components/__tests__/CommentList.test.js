import React from 'react'
import { mount } from 'enzyme'
import CommentList from '../CommentList'
import Root from '../../Root'

let wrapped

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

it('renders one li element per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})

it('payload renders on page', () => {
  expect(wrapped.render().text()).toContain('Comment 1')
  expect(wrapped.render().text()).toContain('Comment 2')
})
