import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import {homeCss} from '../../helpers/componentStyle';
class Home extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={require('../../assests/images/reactHome.png')}
                    title="React "
                />
                <CardHeader
                    className={classes.cardHead}
                    title='Kick Start your Project!'
                    subheader='Start editing you app from ./src'
                />
            </Card>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(homeCss)(Home);
