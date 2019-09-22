import React, {Component, Suspense,} from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import theme from '../helpers/theme'
import {indexCss} from '../helpers/componentStyle'
import './app.css'
import {ParallaxProvider} from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';

// import routes from './routes'
// import Header from './header'
// import QuoteBox from './quoteBox'
// import Footer from './footer'
import HeadBox from './head'
import WhoIAm from './whoIAm'
import WhatIDo from './whatIDo'
import MyWorkSoFar from './myWorkSoFar'
import MyAmbitions from './myAmbitions'
import IntroBox2 from './whoIAm'

class App extends Component {
    state = {
        hidden: false
    }
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({hidden: false});
    //     }, 3000);
    // }

    render() {
        const {classes} = this.props;
        let {hidden} = this.state
        return (
            <div>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <MuiThemeProvider theme={theme}>
                        {/*<Header/>*/}
                        <Suspense className={classes.mainWrapper} fallback={
                            <h1 className={classes.quoteMsg}> Warming up ... </h1>
                        }>
                            {/*<QuoteBox hidden={hidden} classes={classes} quote="Life is 10% what happens to you and 80% how you react to it."/>*/}
                            {/*{!hidden && <Switch>*/}
                            {/*        {routes}*/}
                            {/*    </Switch>*/}
                            {/*}*/}
                            <ParallaxProvider>
                                <HeadBox hidden={hidden} classes={classes}/>
                                {/*<IntroBox classes={classes}/>*/}
                                <Grid container style={{marginTop: 50}} spacing={8} justify='center'>
                                    <Grid md={8}>
                                        <Fade bottom timeout={1500}>
                                            <WhoIAm classes={classes}/>
                                        </Fade>
                                    </Grid>
                                    <Grid md={8}>
                                        <Fade bottom timeout={1500}>
                                            <WhatIDo classes={classes}/>
                                        </Fade>
                                    </Grid>
                                    <Grid md={8}>
                                        <Fade bottom timeout={1500}>
                                            <MyWorkSoFar classes={classes}/>
                                        </Fade>
                                    </Grid>
                                    <Grid md={8}>
                                        <Fade bottom timeout={1500}>
                                            <MyAmbitions classes={classes}/>
                                        </Fade>
                                    </Grid>
                                </Grid>
                            </ParallaxProvider>
                        </Suspense>
                        {/*<Footer/>*/}
                    </MuiThemeProvider>
                </BrowserRouter>
            </div>
        );
    }
}

export default withStyles(indexCss)(App);
