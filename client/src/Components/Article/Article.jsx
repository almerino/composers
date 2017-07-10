import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import { withRouter } from 'react-router-dom'
import { LinearProgress } from 'material-ui/Progress'
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import ExpandLessIcon from 'material-ui-icons/ExpandLess'
import './Article.css'

class Article extends Component {
  constructor(props) {
    super(props)
    this.handleExpandClick = this.handleExpandClick.bind(this)
    this.state = { expanded: false }
  }

  handleExpandClick() {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { data } = this.props

    if (data.loading) {
      return <LinearProgress mode="query" />
    }

    const { name, image, bio, genre, compositions } = this.props.data.article
    const birth = new Date(bio.birth).toLocaleDateString('fr-FR', {
      year: 'numeric', month: 'long', day: 'numeric'
    })

    return (
      <div className="article">
        <Card>
          <CardHeader
            avatar={
              <Avatar alt={name} src={image} />
            }
            title={name}
            subheader={`${bio.place} - ${birth}`}
          />
          <CardContent>
            <Typography type="subheading">
              <b>{'Genre: '}</b>{genre}
            </Typography>
          </CardContent>
          <CardActions className="actions">
            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              {this.state.expanded
                ? <ExpandLessIcon />
                : <ExpandMoreIcon />}
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
            <CardContent>
              <Typography type="title">
                {'Compositions'}
              </Typography>
              <List dense>
                {compositions.map(({ id, name, year }) => (
                  <ListItem key={id}>
                    <ListItemText
                      primary={name}
                      secondary={year}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Collapse>
        </Card>
      </div >
    )
  }
}

Article.PropTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      bio: PropTypes.shape({
        id: PropTypes.string.isRequired,
        birth: PropTypes.instanceOf(Date).isRequired,
        place: PropTypes.string.isRequired,
      }),
      compositions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
      })),
    }),
  }).isRequired,
}

export const articleQuery = gql`
  query article($id: ID!) {
    article: Composer(id: $id) {
      id
      name
      image
      genre
      bio {
        id
        birth
        place
      }
      compositions {
        id
        name
        year
      }
    }
  }
`
export const SimpleArticle = Article

export default graphql(articleQuery, {
  options: ({ match: { params: { id } } }) => ({ variables: { id } })
})(withRouter(Article))
