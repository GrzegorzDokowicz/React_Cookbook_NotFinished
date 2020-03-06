import React from 'react';
import {connect} from "react-redux";
import './style.scss';

class RecipeCategoriesList extends React.Component {
    render() {
        return <div className="recipe-categories-list">
            Welcome on recipes categories list!
        </div>
    }
}

const RecipeCategoriesListComponent = connect()(RecipeCategoriesList);

export default RecipeCategoriesListComponent;
