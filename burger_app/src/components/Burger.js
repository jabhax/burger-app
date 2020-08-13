import React from 'react';

import Ingredient from './Ingredient';
import classes from '../css/Burger.css';


const Burger = (props) => {
  return(
      <div className={classes.Burger}>
        <Ingredient type='bread-top'/>
        <Ingredient type='cheese'/>
        <Ingredient type='salad'/>
        <Ingredient type='meat'/>
        <Ingredient type='bread-bottom'/>
      </div>
  );
}

export default Burger;
