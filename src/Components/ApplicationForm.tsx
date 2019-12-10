import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import { FormControl, InputLabel, Select, Input } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      padingg: theme.spacing(9),
      minWidth: 300,
    },
    formControls: {
      padingg: theme.spacing(0),
      minWidth: 0,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      width: 250,
    },
    textFields: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      width: 260,
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 250,
      },
    },
  })
)

export default function ApplicationForm() {
  const classes = useStyles()

  const [state, setState] = React.useState({
    checkedG: false,
  })

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.checked })
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Pieteikšanāš forma
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Vārds"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Uzvārds"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Dzimšanas datums"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            type="number"
            label="Tālrunis"
            fullWidth
            autoComplete="phone"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControls}>
            <InputLabel>Izglītības līmenis</InputLabel>
            <Select
              native
              defaultValue=""
              input={<Input id="grouped-native-select" />}
            >
              <option />
              <optgroup label="--izvēlēties līmeni--">
                <option value={1}>Pamatizglītība</option>
                <option value={2}>Vidējā izglītība</option>
                <option value={3}>Vidējā izglītība</option>
                <option value={4}>Specializētā vidējā izglītība</option>
                <option value={5}>Arodizglītība</option>
                <option value={6}>Nepabeigta augstākā izglītība</option>
                <option value={7}>
                  Profesionālā augstākā ziglītība/ koledža
                </option>
                <option value={8}>Augstākā izglītība(bakalaura grāds)</option>
                <option value={9}>Augstākā izglītība(doktora grāds)</option>
                <option value={9}>Augstākā izglītība(maģistra grāds)</option>
              </optgroup>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-multiline-flexible"
            label="Kur uzzināji par CODELEX"
            multiline
            rowsMax="4"
            onChange={handleChange('multiline')}
            className={classes.textFields}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            className={classes.formControl}
            control={
              <GreenCheckbox
                checked={state.checkedG}
                onChange={handleChange('checkedG')}
                value="checkedG"
              />
            }
            label="Vai ir savs portatīvais dators"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
