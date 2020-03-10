import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import './style.scss';

import ResponsiveAppContainer from "../../components/responsive-app-container";
import RecipeThumbnail from "../../components/recipe-thumbnail";
import Text from "../../../components/text";
import ActionBar from "../../components/action-bar";
import RecipeCategoryForm from "../../components/recipe-category-form";
import Modal from "../../../components/modal";
import NotFound from "../../components/not-found";

const mapStateToProps = (state) => ({
    categories: state.categories
});

const RecipeObject = ({id, title, kcal, time, image}) => {
    return <div className={"recipe-category__element"}>
        <Link to={`/recipe/${id}`}>
            <RecipeThumbnail image={image} title={title} energyValue={kcal} time={time}/>
        </Link>
    </div>
};


const RecipesThumbnailsCollection = ({recipes}) => {
    if (recipes && recipes.length > 0) {
        return recipes.map(recipe => <RecipeObject key={recipe.id} {...recipe}/>);
    }

    return <Text>Recipes not found.</Text>;
};

class RecipeCategory extends React.Component {
    constructor(props) {
        super(props);

        this.id = props.match ? Number.parseInt(props.match.params.id) : 0;
        this.state = {
            isOpen: false,
            category: this.getCategoryObject(),
            search: ""
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.categories !== this.props.categories) {
            this.setState(state => ({
                ...state,
                category: this.getCategoryObject()
            }))
        }
    }

    setModalState(modalState) {
        this.setState(state => ({
            ...state,
            isOpen: modalState
        }))
    }

    addRecipe() {
        this.setModalState(true);
    }

    searchCategory($event) {
        const value = $event.currentTarget.value;

        this.setState(state => ({
            ...state,
            search: value
        }))
    }

    getCategoryObject() {
        return this.props.categories.find(({id}) => id === this.id);
    }

    getRecipes() {
        if (this.state.category) {
            const {recipes} = this.state.category;

            if (!this.state.search) {
                return recipes;
            }

            return recipes.filter(({title}) => title.toString().toLowerCase().indexOf(this.state.search) !== -1)
        }

        return [];
    }

    render() {
        if (!this.state.category) {
            return <NotFound/>
        }

        return <ResponsiveAppContainer>
            <div className="recipe-category">
                <div className="recipe-category__header">
                    <Text type={"header"}>
                        Lista przepisow w kategorii {this.state.category.name}
                    </Text>
                </div>
                <div className="recipe-category__action-bar">
                    <ActionBar onSearch={this.searchCategory.bind(this)} onClick={this.addRecipe.bind(this)}/>
                </div>
                <div className="recipe-category__elements">
                    <RecipesThumbnailsCollection recipes={this.getRecipes()}/>
                </div>
            </div>
            <Modal isOpen={this.state.isOpen} onClose={() => this.setModalState(false)}>
                <div className="recipe-category__create-form">
                    <RecipeCategoryForm/>
                </div>
            </Modal>
        </ResponsiveAppContainer>
    }
}

const RecipeCategoryComponent = connect(mapStateToProps)(RecipeCategory);

export default RecipeCategoryComponent;
