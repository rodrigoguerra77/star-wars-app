import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const PeopleCard = ({classes, name, image, to = '#'}) => {
  return (
    <Card className={classes.item}>
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <Link to={to}>
          <Typography variant="h6" component="p">
            {name}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default withStyles({
  item: {
    width: '200px',
    margin: '2em',
    textAlign: 'center',
    boxSizing: 'border-box',
    padding: '1em'
  },
  media: {
      height: '150px',
  }
}) (PeopleCard)