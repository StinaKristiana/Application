import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

export default function LogicalQuestions() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Loģiskie jautājumi
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField label=" What is NaN? What is its type?" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="What is a “closure” in JavaScript?" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
