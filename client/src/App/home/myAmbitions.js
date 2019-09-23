import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
    image: {
        width: 200,
        height: 200,
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
            <Grid item>
                <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src="https://instagram.fdel19-1.fna.fbcdn.net/vp/518bbb0a14e9c93ad8af95ca5e3ff246/5E1FEE3E/t51.2885-15/e35/46257025_218370725705479_8239217552480894591_n.jpg?_nc_ht=instagram.fdel19-1.fna.fbcdn.net&_nc_cat=107" />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm>
                <Typography color='textPrimary' variant='h4'>My Ambitions</Typography>
                <Typography variant='h6' color='textSecondary'>
                    To travel from "Employee" to "Employer".
                </Typography>
                <Typography variant='body2'>
                    Ambitions need skills to build ,<br/>
                    Ambitions need time to make,<br/>
                    Ambitions need hardwork to pursue ,<br/>
                    <strong>Ambitions are yet to take.</strong>
                </Typography>
            </Grid>
        </Grid>

    );
}
