import React from 'react';

class QuoteBox extends React.PureComponent {

    render() {
        const { quote,classes,hidden } = this.props;

        return (
            <div style={{height:hidden?100:0,background:'red'}} className={classes.quoteMsg}>
                <blockquote><i>"{quote}"</i></blockquote>
            </div>
        )
    }

}

export default QuoteBox;