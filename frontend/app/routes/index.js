import React from 'react';
import {Route} from 'react-router-dom'

import MainComponent from "./main";
import RecipeCategoryComponent from "./recipe-category";
import RecipeCategoriesListComponent from "./recipe-categories-list";
import RecipeComponent from "./recipe";

const StateComponent = () => {
    return <React.Fragment>
        <Route exact path="/" component={MainComponent}/>
        <Route path="/recipe/1" component={RecipeComponent}/>
        <Route path="/recipe-categories" component={RecipeCategoriesListComponent}/>
        <Route path="/recipe-category/:id" component={RecipeCategoryComponent}/>
    </React.Fragment>
};

export default StateComponent;
