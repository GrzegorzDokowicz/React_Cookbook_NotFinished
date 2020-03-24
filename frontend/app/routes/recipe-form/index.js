import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import ResponsiveAppContainer from "../../components/responsive-app-container";
import RecipeGeneralDataForm from "../../components/recipe-general-data-form";
import Text from "../../../components/text";
import RecipeProducts from "../../components/recipe-products";
import RecipeProductsForm from "../../components/recipe-products-form";
import RecipeSteps from "../../components/recipe-steps";
import RecipeStepsForm from "../../components/recipe-steps-form";
import {initCategoriesData} from "../../data-layer/recipe-categories/actions";

const mapStateToProps = state => ({
    categories: state.categories.elements
});

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: [],
            products: []
        }
    }

    componentDidMount() {
        if (!this.props.categories || this.props.categories.length === 0) {
            this.props.dispatch(initCategoriesData());
        }
    }

    setSteps(steps) {
        console.log(steps);
        this.setState(state => ({
            ...state,
            steps: steps
        }))
    }

    render() {
        return <div className="recipe-form">
            <ResponsiveAppContainer>
                <Text type={"header"}>Dodawanie przepisu</Text>
                <div className="recipe-form__general-data">
                    <RecipeGeneralDataForm categories={this.props.categories}/>
                </div>
                <div className="recipe-form__products">
                    <div className="recipe-form__products-form">
                        <RecipeProductsForm/>
                    </div>
                    <div className="recipe-form__products-list">
                        <RecipeProducts data={this.state.products}/>
                    </div>
                </div>
                <div className="recipe-form__steps">
                    <div className="recipe-form__steps-form">
                        <RecipeStepsForm onChange={this.setSteps.bind(this)}/>
                    </div>
                    <div className="recipe-form__steps-list">
                        <RecipeSteps steps={this.state.steps}/>
                    </div>
                </div>
            </ResponsiveAppContainer>
        </div>
    }
}

const RecipeFormComponent = connect(mapStateToProps)(RecipeForm);

export default RecipeFormComponent;
