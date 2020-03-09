import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import ResponsiveAppContainer from "../../components/responsive-app-container";
import Text from "../../../components/text";
import RecipeProducts from "./recipe-products";
import RecipeSteps from "./recipe-steps";
import RecipeNotes from "./recipe-notes";
import Comments from "../../components/comments";
import RecipeImages from "./recipe-images";

class Recipe extends React.Component {
    render() {
        return <ResponsiveAppContainer>
            <div className="recipe">
                <div className="recipe__image">
                    <img src="none" alt="Not found" /> Recipe image
                </div>
                <div className="recipe__title">
                    <Text type={"header"}>
                        Recipe title
                    </Text>
                </div>
                <div className="recipe__content">
                    <div className="recipe__products">
                        <RecipeProducts/>
                    </div>
                    <div className="recipe__steps">
                        <RecipeSteps/>
                    </div>
                </div>
                <div className="recipe__notes">
                    <RecipeNotes/>
                </div>
                <div className={"recipe__images"}>
                    <RecipeImages/>
                </div>
                <div className="recipe__comments">
                    <Comments/>
                </div>
            </div>
        </ResponsiveAppContainer>;
    }
}

const RecipeComponent = connect()(Recipe);

export default RecipeComponent;
