import React from 'react';
import {connect} from "react-redux";
import './style.scss';

class Recipe extends React.Component {
    render() {
        return <div className="recipe">
            Welcome on recipe!
        </div>
    }
}

const RecipeComponent = connect()(Recipe);

export default RecipeComponent;
