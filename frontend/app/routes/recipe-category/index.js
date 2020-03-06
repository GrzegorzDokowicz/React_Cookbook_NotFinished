import React from 'react';
import {connect} from "react-redux";
import './style.scss';

class RecipeCategory extends React.Component {
    render() {
        return <div className="recipe-category">
            Welcome on Recipe category!
        </div>
    }
}

const RecipeCategoryComponent = connect()(RecipeCategory);

export default RecipeCategoryComponent;
