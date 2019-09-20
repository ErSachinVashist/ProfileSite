import React, { Component,Suspense,  } from 'react';
import {BrowserRouter,Switch} from 'react-router-dom';
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import theme from '../helpers/theme'
import {indexCss} from '../helpers/componentStyle'
import './app.css'
// import routes from './routes'
// import Header from './header'
// import QuoteBox from './quoteBox'
import Footer from './footer'
import HeadBox from './head'
class App extends Component {
    state={
        hidden:true
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, 5000);
    }

    render() {
        const { classes } = this.props;
        let {hidden}=this.state
        return (
            <div>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <MuiThemeProvider theme={theme}>
                        {/*<Header/>*/}
                        <Suspense className={classes.mainWrapper} fallback={
                            <h1 className={classes.quoteMsg}> Warming up ... </h1>
                        }>
                            {/*<QuoteBox hidden={hidden} classes={classes} quote="Life is 10% what happens to you and 90% how you react to it."/>*/}
                            {/*{!hidden && <Switch>*/}
                            {/*        {routes}*/}
                            {/*    </Switch>*/}
                            {/*}*/}
                            <HeadBox hidden={hidden}/>
                        </Suspense>
                        {/*<Footer/>*/}
                    </MuiThemeProvider>
                </BrowserRouter>
            </div>
        );
    }
}

export default withStyles(indexCss)(App);
