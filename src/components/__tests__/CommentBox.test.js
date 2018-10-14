import React from 'react'
import { mount } from 'enzyme'
import CommentBox from '../CommentBox'
import Root from '../../Root'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('shows a shows a text area and two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(2)
})

it('users can enter input into the text area', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  })
  wrapped.update()

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
})

// it('users input make sure the form clears', () => {
//   wrapped.find(Button).simulate('change', {
//     target: { value: 'new comment' }
//   })
//   wrapped.update()
//   wrapped.find(Button).simulate('submit')
//   wrapped.update()

//   expect(wrapped.find('textarea').prop('value')).toEqual('')
// })
