import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
    card: {
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        margin:'3% auto',
        transition: theme.transitions.create("all", {
            duration: '1s',
            easing: theme.transitions.easing.easeInOut
        }),
    },
    cardBefore:{
        backgroundImage:"url('https://scontent.fdel19-1.fna.fbcdn.net/v/t1.0-9/26001211_1749269465117391_6214587835477699525_n.jpg?_nc_cat=111&_nc_oc=AQmozjxOtKndb91JY-j-WiUlwWFWvIMGifr64yjOhqimEu1Z9EOIlVEz3O4OIz5vuAQ&_nc_ht=scontent.fdel19-1.fna&oh=65261f05c2d135b775d170024b40a13c&oe=5E3A0A8B')",
        height:'80vh',
        width:'60vw',
    },
    cardAfter:{
        backgroundImage:"url('https://scontent.fdel19-1.fna.fbcdn.net/v/t1.0-9/31179881_1871745456203124_8813126424412710236_n.jpg?_nc_cat=100&_nc_oc=AQlHfk8HPR9OHX08R3v0lgOYVTFMoO7ixCo3Crh-QZo_eGIo_YYPfAsuP_UcLaFeSrU&_nc_ht=scontent.fdel19-1.fna&oh=ce14a3acbdac063904d2350f92e9dddd&oe=5DF85C1B')",
        margin:'0% auto',
        height:'40vh',
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
      fontSize:30
    },
    cardSubtitle:{
        color:'white',
        fontWeight:'bolder',
        fontSize:20
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
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
            <CardHeader
                classes={{
                    title:classes.cardTitle,
                    subheader:classes.cardSubtitle
                }}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        S
                    </Avatar>
                }
                title="Sachin Vashist"
                subheader="Full Stack Developer"
            />
            <CardContent>
                <Typography align={hidden?'right':'left'} variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
