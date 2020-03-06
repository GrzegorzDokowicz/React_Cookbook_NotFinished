import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import ResponsiveAppContainer from "../../components/responsive-app-container";

class RecipeCategory extends React.Component {
    render() {
        return <ResponsiveAppContainer>
            <div className="recipe-category">
                Welcome on Recipe category!
            </div>
        </ResponsiveAppContainer>
    }
}

const RecipeCategoryComponent = connect()(RecipeCategory);

export default RecipeCategoryComponent;
