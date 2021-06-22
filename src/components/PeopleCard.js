import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const PeopleCard = ({name, image, classes}) => {
  return (
    <Card className={classes.item}>
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <Typography variant="h6" component="p">
          {name}
        </Typography>
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
      height: '170px',
  }
}) (PeopleCard)