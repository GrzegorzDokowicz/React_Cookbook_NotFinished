import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import ResponsiveAppContainer from "../../components/responsive-app-container";
import Text from "../../../components/text";
import RecipeProducts from "../../components/recipe-products";
import RecipeSteps from "../../components/recipe-steps";
import RecipeNotes from "../../components/recipe-notes";
import Comments from "../../components/comments";
import CommentForm from '../../components/comment-form';
import RecipeImages from "../../components/recipe-images";
import NotFound from "../../components/not-found";
import Rating from "../../../components/rating";

const mapStateToProps = state => ({
    recipes: state.recipes
});

class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.id = props.match ? Number.parseInt(props.match.params.id) : 0;
        this.state = {
            recipe: this.getRecipeObject(),
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.categories !== this.props.categories) {
            this.setState(state => ({
                ...state,
                category: this.getRecipeObject()
            }))
        }
    }

    getRecipeObject() {
        return this.props.recipes ? this.props.recipes.find(({id}) => id === this.id) : [];
    }

    render() {
        if (!this.state.recipe) {
            return <NotFound/>
        }

        const {recipe} = this.state;
        const sections = [
            recipe.notes ? <div key={1} className="recipe__notes">
                <RecipeNotes/>
            </div> : '',
            recipe.images ? <div key={2} className={"recipe__images"}>
                <RecipeImages/>
            </div> : '',
            recipe.comments ? <div key={3} className="recipe__comments">
                <Comments/>
            </div> : <div key={4} className="recipe__comments">
                <Comments/>
            </div>
        ];

        return <div className="recipe">
            <div className="recipe__image">
                <img src={recipe.image} alt="Not found"/>
            </div>
            <ResponsiveAppContainer>
                <div className="recipe__title">
                    <Text type={"header"}>{recipe.title}</Text>
                    <Rating actualRating={recipe.currentRating} maxRating={5} iconName="star"/>
                </div>
                <div className="recipe__content">
                    <div className="recipe__products">
                        <RecipeProducts data={recipe.products}/>
                    </div>
                    <div className="recipe__steps">
                        <RecipeSteps/>
                    </div>
                </div>
                {sections}
            </ResponsiveAppContainer>
        </div>

    }
}

const RecipeComponent = connect(mapStateToProps)(Recipe);

export default RecipeComponent;
