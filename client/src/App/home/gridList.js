import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles(theme => ({
    gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        borderRadius:10,
        width: 200,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const tileData = [
    {
        img: 'https://www.vrinsofts.com/wp-content/uploads/page//hire-dedicated-developer.png',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.vrinsofts.com/wp-content/uploads/page//hire-dedicated-developer.png',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.vrinsofts.com/wp-content/uploads/page//hire-dedicated-developer.png',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.vrinsofts.com/wp-content/uploads/page//hire-dedicated-developer.png',
        title: 'Image',
        author: 'author',
    },

]
export default function TitlebarGridList() {
    const classes = useStyles();

    return (
            <GridList cellHeight={80} className={classes.gridList}>
                {tileData.map((tile, i) => (
                    <GridListTile key={i}>
                        <img src={tile.img} alt={tile.title}/>
                    </GridListTile>
                ))}
            </GridList>
    );
}
