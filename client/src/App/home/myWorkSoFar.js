import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GridData from './gridList'
const useStyles = makeStyles(theme => ({
    image: {
        width: 200,
        height: 300,
    },
    img: {
        borderRadius:5,
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <Grid container spacing={6}>
            <Grid item lg={8}>
            <Typography color='textPrimary' variant='h4' >Here's what I've done so far</Typography>
            <Typography variant='h6' color='textSecondary'>
                    I did what i did, I got bugged, I Understood, I Learnt, I Grew, & finally.. I Bugged again :P
                </Typography>
                <Typography variant='body2'>
                    My core strength is to learn quickly and implement even quicker. So i have gained fair amount of
                    experties in every lifecycle
                    step of the project.
                </Typography>
            </Grid>
            <Grid item lg={4}>
                <GridData/>
            </Grid>

        </Grid>

    );
}
