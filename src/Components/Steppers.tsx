import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ApplicationForm from './ApplicationForm'
import LogicalQuestions from './LogicalQuestions'
import Review from './LearningMaterials'
import { green } from '@material-ui/core/colors'
import '../index.css'

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'absolute',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    width: '100%',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[500],
    },
  },

  MuiStepIcon: {
    active: {
      backgroundColor: green[500],
    },
  },
}))

const steps = ['Pieteikšanās forma', 'Atjautības uzdevumi', 'Mācību materiāli']

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <ApplicationForm />
    case 1:
      return <LogicalQuestions />
    case 2:
      return <Review />
    default:
      throw new Error('Unknown step')
  }
}

export default function Steppers() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Pieteikšānāš forma
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gatavs
                </Typography>
                <Typography variant="subtitle1">
                  Pieteikums tiks izskatīts dažu dienu laikā..
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Atpakaļ
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Pabeigt' : 'Tālāk'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  )
}
