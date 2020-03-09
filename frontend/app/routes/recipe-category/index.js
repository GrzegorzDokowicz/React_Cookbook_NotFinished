import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import './style.scss';

import ResponsiveAppContainer from "../../components/responsive-app-container";
import RecipeThumbnail from "../../components/recipe-thumbnail";
import Text from "../../../components/text";
import ActionBar from "../../components/action-bar";

class RecipeCategory extends React.Component {
    addRecipe() {
        console.log("add recipe");
    }

    render() {
        const categoryName = "Meksykanskie";

        return <ResponsiveAppContainer>
            <div className="recipe-category">
                <div className="recipe-category__header">
                    <Text type={"header"}>
                        Lista przepisow w kategorii {categoryName}
                    </Text>
                </div>
                <div className="recipe-category__action-bar">
                    <ActionBar onClick={this.addRecipe.bind(this)}/>
                </div>
                <div className="recipe-category__elements">
                    <div className={"recipe-category__element"}>
                        <Link to="/recipe/1">
                            <RecipeThumbnail title={"Test"} energyValue={100} time={"0:45"}/>
                        </Link>
                    </div>
                    <div className={"recipe-category__element"}>
                        <Link to="/recipe/1">
                            <RecipeThumbnail title={"Test"} energyValue={100} time={"0:45"}/>
                        </Link>
                    </div>
                    <div className={"recipe-category__element"}>
                        <Link to="/recipe/1">
                            <RecipeThumbnail title={"Test"} energyValue={100} time={"0:45"}/>
                        </Link>
                    </div>
                    <div className={"recipe-category__element"}>
                        <Link to="/recipe/1">
                            <RecipeThumbnail title={"Test"} energyValue={100} time={"0:45"}/>
                        </Link>
                    </div>
                </div>
            </div>
        </ResponsiveAppContainer>
    }
}

const RecipeCategoryComponent = connect()(RecipeCategory);

export default RecipeCategoryComponent;
