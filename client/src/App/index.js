import React, {Component, Suspense,} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import theme from '../helpers/theme'
import {indexCss} from '../helpers/componentStyle'
import './app.css'
import {Parallax, ParallaxProvider} from 'react-scroll-parallax';

// import routes from './routes'
// import Header from './header'
// import QuoteBox from './quoteBox'
// import Footer from './footer'
import HeadBox from './head'
import Home from './home'

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
            <div className="topDiv">
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
                                <Parallax y={[0,-30]} tagOuter="figure">
                                    <Home/>
                                </Parallax>
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
