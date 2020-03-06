import React from 'react';
import {connect} from "react-redux";
import './style.scss';

import CategoryThumbnail from "../../components/category-thumbnail";
import Text from "../../components/text";
import {Link} from 'react-router-dom';
import ResponsiveAppContainer from "../../components/responsive-app-container";

class RecipeCategoriesList extends React.Component {
    render() {
        return <ResponsiveAppContainer>
            <div className="recipe-categories-list">
                <div className={"recipe-categories-list__header"}>
                    <Text type={"header"}>
                        Kategorie przepisow
                    </Text>
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
