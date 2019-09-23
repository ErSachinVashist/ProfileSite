import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {FaLinkedin,FaFacebook,FaInstagram,FaGithub} from "react-icons/fa";
import {ParallaxBanner} from "react-scroll-parallax";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
    card: {
        background:'transparent',
        position:'relative',
        transition: theme.transitions.create("all", {
            duration: '1s',
            easing: theme.transitions.easing.easeInOut
        }),
    },
    cardBefore:{
        // backgroundImage:"url('http://www.sompaisoscatalans.cat/simage/180/1802853/developer-desktop-wallpaper.jpg')",
        height:'80vh',
        width:'60vw',
    },
    cardAfter:{
        // backgroundImage:"url('http://www.sompaisoscatalans.cat/simage/180/1802853/developer-desktop-wallpaper.jpg')",
        margin:'0% auto',
        height:'100vh',
        width:'100vw',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    cardTitle:{
      color:'white',
      fontWeight:'bolder',
      fontSize:20
    },
    cardSubtitle:{
        color:'white',
        fontWeight:'bolder',
        fontSize:10
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    grow: {
        flexGrow: 1,
    },
    content:{
        textAlign:'center',
        position:'absolute',
        width:'100%',
        top:"40%",
        padding:0
    },
    cardAction:{
        color:'lavender'
    }

}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    let {hidden}=props;
    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return (
        <Card className={clsx(classes.card,hidden?classes.cardBefore:classes.cardAfter)}>

           <ParallaxBanner
                layers={[
                    // {
                    //     image: 'http://www.sompaisoscatalans.cat/simage/180/1802853/developer-desktop-wallpaper.jpg',
                    //     amount: 0.6,
                    // }
                    ,{
                        image: 'https://www.agdelta.com/wp-content/uploads/2018/06/website-parallax-background-C.jpg',
                        amount: 0.2,
                    },
                ]}
                style={{
                    height: '100vh',
                }}
            >
               <CardActions className={classes.cardAction} disableSpacing>
                   <div className={classes.grow} />
                   <IconButton color="inherit"
                               onClick={()=>window.open('https://github.com/ErSachinVashist/React-boiler','_blank')}
                   >
                       <FaGithub />
                   </IconButton>
                   <IconButton color="inherit"
                               onClick={()=>window.open('https://www.linkedin.com/in/sachin-vashist','_blank')}
                   >
                       <FaLinkedin />
                   </IconButton>
                   <IconButton color="inherit"
                               onClick={()=>window.open('https://www.facebook.com/vashist82','_blank')}
                   >
                       <FaFacebook />
                   </IconButton>
                   <IconButton color="inherit"
                               onClick={()=>window.open('https://www.instagram.com/vashist797','_blank')}
                   >
                       <FaInstagram />
                   </IconButton>
               </CardActions>
            </ParallaxBanner>

            <CardContent className={classes.content}>
                <Typography style={{color:'lavender'}}  variant="h5">Hey, I'm</Typography>
                <Fade timeout={2000}>
                    <Typography style={{fontFamily:"'Dancing Script', cursive",color:'lavender'}} variant="h3">--Sachin Vashist--</Typography>
                </Fade>

            </CardContent>
        </Card>
    );
}
