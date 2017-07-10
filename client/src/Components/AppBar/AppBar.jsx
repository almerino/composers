import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'

function ButtonAppBar({ location }) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className="simple-link">
            <Button color="contrast">Home</Button>
          </Link>
          <Link to="/list/composers" className="simple-link">
            <Button color="contrast">Composers</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  location: PropTypes.object.isRequired,
}

export default ButtonAppBar