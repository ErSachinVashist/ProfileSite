import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
    image: {
        width: 220,
        height: 220,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <Grid container spacing={6} style={{marginTop:20}}>
            <Grid item xs={12}>
                <Typography color='textPrimary' variant='h4' align='center'>Here's what I've done so far</Typography>
            </Grid>
            <Grid item xs={12} sm container>
                <Typography variant='body2' >
                    <Typography variant='h6' color='textSecondary'>
                        Hi, I am Sachin Vashist. A Full Stack Developer and Thinker.
                    </Typography>
                    <p>
                        I am a Delhite, from heart and soul, but can blend in any environment.
                        I am currently working with ServerGuy (Delhi) as a Enthusiastic Developer and Growing DevOps Engineer.
                        I started my career back in 2016 as a Frontend Developer, and with 3 years of hard and smart work, I am here presenting myself to you as a Full-Stack Developer.


                    </p>
                    My strength is I am a quick learner and believe in "Smart Work rather but never back down from Hard Work".
                    Coming to my weekness,i feel there is always some scope of improvement in our biggest strength too.
                    My hobbies are Gyming and Sports.

                </Typography>
            </Grid>
            <Grid item>
                <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src="https://instagram.fdel19-1.fna.fbcdn.net/vp/518bbb0a14e9c93ad8af95ca5e3ff246/5E1FEE3E/t51.2885-15/e35/46257025_218370725705479_8239217552480894591_n.jpg?_nc_ht=instagram.fdel19-1.fna.fbcdn.net&_nc_cat=107" />
                </ButtonBase>
            </Grid>
        </Grid>

    );
}
