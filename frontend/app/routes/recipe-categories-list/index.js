import React from 'react';
import {connect} from "react-redux";
import './style.scss';

import CategoryThumbnail from "../../components/category-thumbnail";
import Text from "../../../components/text";
import {Link} from 'react-router-dom';
import ResponsiveAppContainer from "../../components/responsive-app-container";
import ActionBar from "../../components/action-bar";

class RecipeCategoriesList extends React.Component {
    addCategory() {
        console.log("add category");
    }

    render() {
        return <ResponsiveAppContainer>
            <div className="recipe-categories-list">
                <div className={"recipe-categories-list__header"}>
                    <Text type={"header"}>
                        Kategorie przepisow
                    </Text>
                </div>
                <div className="recipe-categories-list__action-bar">
                    <ActionBar onClick={this.addCategory.bind(this)}/>
                </div>
                <ul className="recipe-categories-list__elements">
                    <li className="recipe-categories-list__element">
                        <Link to="/recipe-category/1">
                            <CategoryThumbnail title={"Title"}/>
                        </Link>
                    </li>
                    <li className="recipe-categories-list__element">
                        <Link to="/recipe-category/1">
                            <CategoryThumbnail title={"Title"}/>
                        </Link></li>
                    <li className="recipe-categories-list__element">
                        <Link to="/recipe-category/1">
                            <CategoryThumbnail title={"Title"}/>
                        </Link></li>
                    <li className="recipe-categories-list__element">
                        <Link to="/recipe-category/1">
                            <CategoryThumbnail title={"Title"}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </ResponsiveAppContainer>
    }
}

const RecipeCategoriesListComponent = connect()(RecipeCategoriesList);

export default RecipeCategoriesListComponent;
