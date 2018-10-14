import React from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Layout = styled.div`
  display: grid;
  width: 400px;
  grid-template-rows: 16px 150px 50px 70px;
  grid-gap: 8px;
`

class CommentBox extends React.Component {
  state = { comment: '' }

  handleChange = event => {
    this.setState({ comment: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    // Call an action creator
    this.props.saveComment(this.state.comment)
    // Save the comment

    this.setState({ comment: '' })
  }

  render() {
    return (
      <div>
        <Layout>
          <Typography variant="subtitle1">Add a Comment</Typography>
          <TextField
            id="filled-name"
            label="Please leave a message..."
            multiline
            rows="4"
            helperText="enter a comment!"
            value={this.state.comment}
            onChange={this.handleChange}
            margin="normal"
            variant="filled"
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <Button
              style={{ marginRight: 8 }}
              onClick={this.handleSubmit}
              color="primary"
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
            <Button
              onClick={this.props.fetchComments}
              color="secondary"
              variant="contained"
              fullWidth
            >
              Fetch Comments
            </Button>
          </div>
        </Layout>
      </div>
    )
  }
}

export default connect(
  null,
  actions
)(CommentBox)
