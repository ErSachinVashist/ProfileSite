import React, {Component,} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import {homeCss} from '../../helpers/componentStyle'
import Fade from 'react-reveal/Fade';

import WhoIAm from './whoIAm'
import WhatIDo from './whatIDo'
import MyWorkSoFar from './myWorkSoFar'
import MyAmbitions from './myAmbitions'

class App extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.paperStyle} elevation={0}>
                <Fade bottom timeout={1500}>
                    <WhoIAm classes={classes}/>
                </Fade>
                <br/><br/><br/><br/>
                <Fade bottom timeout={1500}>
                    <WhatIDo classes={classes}/>
                </Fade>
                <br/><br/><br/><br/>
                <Fade bottom timeout={1500}>
                    <MyWorkSoFar classes={classes}/>
                </Fade>
                <br/><br/><br/><br/>
                <Fade bottom timeout={1500}>
                    <MyAmbitions classes={classes}/>
                </Fade>
            </Paper>
        );
    }
}

export default withStyles(homeCss)(App);
