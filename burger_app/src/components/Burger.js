import React from 'react';

import Ingredient from './Ingredient';
import classes from '../css/Burger.css';


const Burger = (props) => {

  const innerIngredients = (
    Object.keys(props.ingredients).map(key => {
      const ingredientsArray = [...Array(props.ingredients[key])];
      return ingredientsArray.map((_, i) => (
        <Ingredient key={key + i} type={key} clicked={() => props.clicked(key)} />
      ));
    })
  );

  return(
      <div className={classes.Burger}>
        <Ingredient type='bread-top'/>
          {innerIngredients}
        <Ingredient type='bread-bottom'/>
      </div>
  );
}

export default Burger;
