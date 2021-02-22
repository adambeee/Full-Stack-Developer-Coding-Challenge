import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AlertLog from './alert-log';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#005a8f',
    },
  }),
);
  

export default function Dashboard() {
    const classes = useStyles();
    return (
    <div style={{ padding: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <AlertLog></AlertLog>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
    )
}