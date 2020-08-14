import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from '../css/Ingredient.css';

class Ingredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ( 'bread-top' ):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ( 'meat' ):
                ingredient = <div onClick={this.props.clicked} className={classes.Meat}></div>;
                break;
            case ( 'cheese' ):
                ingredient = <div onClick={this.props.clicked} className={classes.Cheese}></div>;
                break;
            case ( 'bacon' ):
                ingredient = <div onClick={this.props.clicked} className={classes.Bacon}></div>;
                break;
            case ( 'salad' ):
                ingredient = <div onClick={this.props.clicked} className={classes.Salad}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

Ingredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default Ingredient;
