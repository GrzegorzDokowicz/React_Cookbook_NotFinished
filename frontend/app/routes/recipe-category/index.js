import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import ResponsiveAppContainer from "../../components/responsive-app-container";
import RecipeThumbnail from "../../components/recipe-thumbnail";
import Text from "../../components/text";

class RecipeCategory extends React.Component {
    render() {
        const categoryName = "Meksykanskie"

        return <ResponsiveAppContainer>
            <div className="recipe-category">
                <div className="recipe-category__header">
                    <Text type={"header"}>
                        Lista przepisow w kategorii {categoryName}
                    </Text>
                </div>
                <div className="recipe-category__elements">
                    <div className={"recipe-category__element"}>
                        <RecipeThumbnail title={"Test"} energyValue={100} time={"0:45"}/>
                    </div>
                    <div className={"recipe-category__element"}>
                        <RecipeThumbnail title={"Test"} energyValue={100} time={"0:45"}/>
                    </div>
                    <div className={"recipe-category__element"}>
                        <RecipeThumbnail title={"Test"} energyValue={100} time={"0:45"}/>
                    </div>
                    <div className={"recipe-category__element"}>
                        <RecipeThumbnail title={"Test"} energyValue={100} time={"0:45"}/>
                    </div>
                </div>
            </div>
        </ResponsiveAppContainer>
    }
}

const RecipeCategoryComponent = connect()(RecipeCategory);

export default RecipeCategoryComponent;
