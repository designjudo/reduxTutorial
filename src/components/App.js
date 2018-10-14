import React from 'react'
import { injectGlobal } from 'styled-components'
import Paper from '@material-ui/core/Paper'
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import styled from 'styled-components'

const Grid = styled(Paper)`
  width: 400px;
  padding: 25px;
  margin: 100px auto;
`

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

html {
  font-family: 'Lato', helvetica, arial, sans-serif;
}
`

export default () => {
  return (
    <div>
      <Grid elevation={6}>
        <CommentBox />
        <CommentList />
      </Grid>
    </div>
  )
}
