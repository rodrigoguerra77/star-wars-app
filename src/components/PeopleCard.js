import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

const PeopleCard = ({classes, name, image, to = '#'}) => {
  const history = useHistory()

  return (
    <Card className={classes.item}>
      <CardActionArea onClick={() => history.push(to)}>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Typography variant='h6' component='p'>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default withStyles({
  item: {
    width: '270px',
    margin: '1em',
    textAlign: 'center',
    boxSizing: 'border-box',
    padding: '0.5em'
  },
  media: {
      height: '180px',
  }
}) (PeopleCard)