import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../index.css';

const useStyles = makeStyles((theme) => ({
	listItem: {
		padding: theme.spacing(1, 0)
	},
	total: {
		fontWeight: 700
	},
	title: {
		marginTop: theme.spacing(2)
	},
	list: {
		textDecoration: 'none',
		color: 'black'
	}
}));

export default function LearningMaterials() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Mācību materiāli, kuriem vajadzētu iziet cauri:
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<Typography variant="h6" gutterBottom>
						<Grid>
							<a className={classes.list} href={'https://www.codecademy.com/'}>
								Codeacademy
							</a>
						</Grid>
						<Grid>
							<a className={classes.list} href={'https://grasshopper.app/'}>
								Grasshopper
							</a>
						</Grid>
						<Grid>
							<a className={classes.list} href={'https://www.freecodecamp.org/'}>
								Freecodecamp
							</a>
						</Grid>
						<Grid>
							<a className={classes.list} href={'https://www.udemy.com/'}>
								Udemy
							</a>
						</Grid>
						<Grid>
							<a className={classes.list} href={'https://www.khanacademy.org/'}>
								Khan Academy
							</a>
						</Grid>
						<Grid>
							<a className={classes.list} href={'https://www.w3schools.com/'}>
								W3Schools
							</a>
						</Grid>
					</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
