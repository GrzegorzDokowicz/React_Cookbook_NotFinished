import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import ResponsiveAppContainer from "../../components/responsive-app-container";

class Recipe extends React.Component {
    render() {
        return <ResponsiveAppContainer>
            <div className="recipe">
                Welcome on recipe!
            </div>
        </ResponsiveAppContainer>
    }
}

const RecipeComponent = connect()(Recipe);

export default RecipeComponent;
