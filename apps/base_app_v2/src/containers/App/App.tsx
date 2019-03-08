import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
	gray: {
		padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.primary,
	}
});

export interface Props extends WithStyles<typeof styles> {}

function App(props: any) {

	const { classes } = props;

	return (
		<div className={classes.root}>
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<p className={classes.gray}>Header</p>
				</Grid>
				<Grid item xs={3}>
					<p>Hierarchy</p>
				</Grid>
				<Grid item xs={9}>
					<p>Main Content</p>
				</Grid>
			</Grid>
		</div>
	)
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(App);
