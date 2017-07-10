import React from 'react'
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import { Link } from 'react-router-dom'
import { LinearProgress } from 'material-ui/Progress'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import "./Composers.css"

function Composers({ data }) {
  if (data.loading) {
    return <LinearProgress mode="query" />
  }

  return (
    <div>
      <Typography type="headline" color="inherit">
        {'Composers'}
      </Typography>
      <Paper className="composers" elevation={4}>
        <List>
          {data.composers.map(({ id, name, image }) =>
            <Link
              to={`/article/composers/${id}`}
              className="simple-link"
              key={id}
            >
              <ListItem dense button>
                <Avatar alt={name} src={image} />
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          )}
        </List>
      </Paper>
    </div>
  )
}

const composersQuery = gql`
  query {
    composers: allComposers {
      id
      name
      image
    }
  }
`

export default graphql(composersQuery)(Composers)
