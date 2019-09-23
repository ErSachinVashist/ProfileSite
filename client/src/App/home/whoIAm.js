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
                    <Typography color='textPrimary' variant='h4'>Who I am ?</Typography>
                    <Typography variant='h6' color='textSecondary'>
                        Hi, I am Sachin Vashist. Full Stack Developer and Thinker.
                    </Typography>
                    <Typography variant='body2'>
                        I am a Delhite, from heart and soul.
                        I am currently working with ServerGuy (Delhi) as a Enthusiastic Developer and Growing DevOps Engineer.
                        I started my career back in 2016 as a Frontend Developer, and with 3 years of hard and smart work, I am here presenting myself to you as a Full-Stack Developer.
                        I am a quick learner and believe in <b>"Smart Work but never back down from Hard Work".</b>

                    </Typography>
                    <Typography variant='body2'>
                        Coming to my weekness,i feel there is always some scope of improvement in our biggest strength too.
                        My hobbies are Gyming and Sports.
                    </Typography>
                </Grid>
            </Grid>

    );
}
