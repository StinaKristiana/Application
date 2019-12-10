import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import '../index.css'

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  list: {
    listStyleType: 'none',
  },
}))

export default function LearningMaterials() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Mācību materiāli, kuriem vajadzētu iziet cauri
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            <ul className={classes.list}>
              <li>Codeacademy</li>
              <li>Grasshopper</li>
              <li>Freecodecamp</li>
              <li>Udemy</li>
              <li>Khan Academy</li>
              <li>Coursera</li>
              <li>W3Schools</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
