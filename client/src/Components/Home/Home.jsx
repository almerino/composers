import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

function Home() {
  return (
    <div>
      <Typography type="headline" color="inherit">
        {'Home'}
      </Typography>
      <Link to="/list/composers" className="simple-link">
        <Button raised color="primary">
          Go to composers list
        </Button>
      </Link>
    </div >
  )
}

export default Home
