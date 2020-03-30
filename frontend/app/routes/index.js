import React from 'react';
import {Route} from 'react-router-dom';

import MainComponent from './main';
import RecipeCategoryComponent from './recipe-category';
import RecipeCategoriesListComponent from './recipe-categories-list';
import RecipeComponent from './recipe';
import RecipeFormComponent from './recipe-form';

const StateComponent = () => {
    return <React.Fragment>
        <Route exact path="/" component={MainComponent}/>
        <Route exact path="/recipe/add" component={RecipeFormComponent}/>
        <Route path="/recipes/:id" component={RecipeComponent}/>
        <Route path="/recipe-categories" component={RecipeCategoriesListComponent}/>
        <Route path="/recipe-category/:id" component={RecipeCategoryComponent}/>
    </React.Fragment>;
};

export default StateComponent;
