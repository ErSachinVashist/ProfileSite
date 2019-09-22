import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import {footerCss} from '../helpers/componentStyle'
import {FaLinkedin,FaFacebook,FaInstagram,FaGithub} from "react-icons/fa";

class Footer extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" classes={{
                    root:classes.appBarRoot
                }}>
                    <Toolbar variant="dense">
                        <div className={classes.grow} />


                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(footerCss)(Footer);
