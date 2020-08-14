import React, {Component} from 'react';
import AuxComp from '../hoc/AuxComp';

import Burger from '../components/Burger';


class BurgerBuilder extends Component {

  /* State data */
  state = {
    /* Ingredients are added/removed via their count. Currently, ingredients
    are placed in the order of this ingredients object array going from Salad
    down to Meat. Additionally, ingredients are placed in the order that they
    come in with respect to the salad-meat structure. */
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  /* Remove an Ingredient by decreasing the count of it through state */
  removeIngredient = (type) => {
    let ingredientsCopy = {...this.state.ingredients};
    ingredientsCopy[type]--;
    if (ingredientsCopy[type] <= 0) ingredientsCopy[type] = 0;
    this.setState({ingredients: ingredientsCopy});
  }

  /* Add an Ingredient by increasing the count of it through state */
  addIngredient = (type) => {
    let ingredientsCopy = {...this.state.ingredients};
    ingredientsCopy[type]++;
    this.setState({ingredients: ingredientsCopy});
  }

  render() {
    return(
      <AuxComp>
        <Burger ingredients={this.state.ingredients} clicked={this.removeIngredient}/>
        <div>
          <div>Build Controls</div>
          <button onClick={() => this.addIngredient('meat')}>Meat</button>
          <button onClick={() => this.addIngredient('cheese')}>Cheese</button>
          <button onClick={() => this.addIngredient('bacon')}>Bacon</button>
          <button onClick={() => this.addIngredient('salad')}>Salad</button>
        </div>
      </AuxComp>
    );
  }
}

export default BurgerBuilder;
